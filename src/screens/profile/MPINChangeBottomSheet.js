import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import Entypo from 'react-native-vector-icons/Entypo'
import { commonStyles } from '../../utils/styles'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS } from '../../utils/theme'
import SetMPINBottomSheet from './SetMPINBottomSheet'

interface VerifyCodeProps { }
const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 45;

function MPINChangeBottomSheet({ mpinRbRef, optResetTimer, mpinChangeSubmit }) {

    let resendOtpTimerInterval;

    // const [mpinChangeClosed, setMPINChangeClosed] = useState(false);

    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
        RESEND_OTP_TIME_LIMIT,
    );
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [mpin, setMpin] = useState('');
    const ref2 = useBlurOnFulfill({ mpin, cellCount: CELL_COUNT });
    const [props2, getCellOnLayoutHandler2] = useClearByFocusCell({
        mpin,
        setMpin,
    });

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

    useEffect(() => {
        if (optResetTimer) {
            startResendOtpTimer();
        }
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime, optResetTimer])

    return (
        <RBSheet
            ref={mpinRbRef}
            height={380}
            openDuration={250}
            closeOnDragDown={true}
            animationType="fade"
            customStyles={{
                container: {
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                draggableIcon: {
                    backgroundColor: "#555",
                    width: 0
                }
            }}>
            <View>
                <View style={{ ...commonStyles.row, marginTop: -20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: '#000' }}>
                        Change Mpin
                    </Text>
                    <TouchableOpacity onPress={() => { mpinRbRef.current.close() }}>
                        <Entypo name="cross" size={24} color="#000000" />
                    </TouchableOpacity>
                </View>

                <View style={{ ...commonStyles.rowStart }}>
                    <Text style={{ ...commonStyles.fs10_400, color: '#85949F', lineHeight: 14, marginVertical: 6 }}>
                        To change mpin kindly verify your mobile number
                    </Text>
                    <Text style={{ ...commonStyles.fs10_400, color: '#000', lineHeight: 14, marginVertical: 6, marginLeft: 6 }}>
                        +8298786756
                    </Text>
                </View>

                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}
                        >
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
                <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 10, fontWeight: "400", color: '#000', marginTop: 6 }}>
                        Reset OTP in 0:{resendButtonDisabledTime}
                    </Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: "600", color: '#000' }}>
                    Enter Mpin
                </Text>

                <CodeField
                    ref={ref2}
                    {...props2}
                    value={mpin}
                    onChangeText={setMpin}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler2(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}
                        >
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />

                <View style={{ alignItems: "center", marginVertical: 32 }}>
                    <TouchableOpacity
                        style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                        onPress={mpinChangeSubmit}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Confirm OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
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
        marginTop: 16,
        width: '100%',
    },
    cellRoot: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#333',
        borderRadius: 12,
        backgroundColor: "#fff"
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

export default React.memo(MPINChangeBottomSheet)
