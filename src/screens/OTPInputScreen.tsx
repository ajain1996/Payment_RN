import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {COLORS} from '../utils/theme';
import {commonStyles} from '../utils/styles';
import {validateOTPPostRequest} from '../utils/API';
import Custom_Loader from '../components/Custom_Loader';
import {Panel_Component} from '../components/Panel_component';
import {NextopayContext} from '../context/NextopayContext';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/reducer/user';
import Auth from '../services/Auth';
import {useCallback} from 'react';

interface OPTInputScreenProps {}
const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 90;

export const OPTInputScreen: React.FC<OPTInputScreenProps> = ({
  navigation,
  route,
}) => {
  const dispatch = useDispatch();

  let resendOtpTimerInterval: any;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  const {phoneNumber, setBearerToken, setUserToken} =
    useContext(NextopayContext);

  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  };

  //declarations for input field
  const [value, setValue] = useState('');
  const [valueError, setValueError] = useState('');
  const [loading, setLoading] = useState(false);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const otpResponseCallback = useCallback(
    async response => {
      setLoading(false);
      console.log('\n\n Main File validateOTPPostRequest: ', response);
      console.log('validateOTPPostRequest status: ', response['status']);
      console.log(
        'validateOTPPostRequest bearer-token: ',
        response['bearer-token'],
      );
      console.log(
        'validateOTPPostRequest user-token: ',
        response['data'].usertoken,
      );
      console.log('validateOTPPostRequest user data: ', response['data']);
      if (response !== null) {
        if (response['status'] === 'Sucess') {
          setBearerToken(response['bearer-token']);
          setUserToken(response['data'].usertoken);
          dispatch(setUser(response['data']));
          await Auth.setAccount(response['data']);
          await Auth.setLocalStorageData(
            'bearerToken',
            response['bearer-token'],
          );
          await Auth.setLocalStorageData(
            'usertoken',
            response['data'].usertoken,
          );
          await Auth.setLocalStorageData('phoneNumber', phoneNumber);
          if (response['data'].mpin === null) {
            navigation.navigate('InputMPINScreen');
          } else {
            navigation.navigate('AppStack');
          }
        } else if (response['status'] === 'failed') {
          Alert.alert('Alert!', response['message']);
        }
      }
    },
    [phoneNumber],
  );

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const handleSubmit = () => {
    if (value?.length === 0) {
      setValueError('The OTP field is required.');
    } else if (value?.length < 6) {
      setValueError('OTP cannot be less then 6');
    } else {
      setLoading(true);
      validateOTPPostRequest(phoneNumber, value, otpResponseCallback);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={{height: '17%'}} />

      <View style={{alignItems: 'flex-start', width: '100%'}}>
        {renderLoginChangeText(navigation)}
        <View style={{height: 8}} />

        {renderEnterOTPText('+91' + phoneNumber)}
      </View>
      <View style={{height: '6%'}} />

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      {/* View for resend otp  */}
      {resendButtonDisabledTime > 0 ? (
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            marginTop: 40,
            borderRadius: 9,
          }}>
          <Text style={styles.resendCodeText}>
            Resend OTP in {resendButtonDisabledTime} sec
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onResendOtpButtonPress}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            marginTop: 40,
            borderRadius: 9,
          }}>
          <View style={styles.resendCodeContainer}>
            <Text style={styles.resendCode}>Resend OTP </Text>
            <Text style={[styles.resendCode, {color: '#999'}]}> in </Text>
            <Text style={{color: COLORS.primary}}>
              {' '}
              {resendButtonDisabledTime} sec
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <View style={{height: '13%'}} />

      {renderSubmitBtn(handleSubmit)}
      <Custom_Loader loading={loading} />
      <Panel_Component loading={loading} />
    </ScrollView>
  );
};

const renderLoginChangeText = navigation => {
  return (
    <View style={{...commonStyles.row, width: '100%'}}>
      <Text style={{fontSize: 22, fontWeight: '500', color: '#000'}}>
        Login
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{fontSize: 12, fontWeight: '500', color: COLORS.primary}}>
          Change
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const renderEnterOTPText = phoneNumber => {
  return (
    <View style={{...commonStyles.rowStart, width: '100%'}}>
      <Text style={{fontSize: 14, fontWeight: '400', color: '#333'}}>
        Please enter the OTP sent to
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          color: COLORS.primary,
          marginLeft: 8,
        }}>
        {phoneNumber}
      </Text>
    </View>
  );
};

export const renderSubmitBtn = onPress => {
  return (
    <TouchableOpacity
      style={{...commonStyles.commonBtnStyle, ...commonStyles.centerStyles}}
      onPress={onPress}>
      <Text style={{fontSize: 16, fontWeight: '500', color: '#fff'}}>
        Confirm
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
    color: '#000',
  },
  codeFieldRoot: {
    marginTop: 40,
    width: '100%',
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  cellText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },

  button: {
    marginTop: 20,
  },
  resendCode: {
    color: COLORS.primary,
  },
  resendCodeText: {
    color: '#000',
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
