import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React, { useContext, useState } from 'react'
import { renderSubmitBtn } from './OTPInputScreen';
import { commonStyles } from '../utils/styles';
import { NextopayLogo } from '../utils/imageManager'
import SvgUri from '../utils/Svg';
import { loginAPIPostRequest, mobileRegisterPostRequest } from '../utils/API';
import { Panel_Component } from '../components/Panel_component';
import Custom_Loader from '../components/Custom_Loader';
import Error_Component from '../components/Error_Component';
import { NextopayContext } from '../context/NextopayContext';
import { useEffect } from 'react';
import Auth from '../services/Auth';
import { setUser } from '../redux/reducer/user';

export default function RegisterLoginScreen({ navigation }) {

    const [phoneNumberError, setPhoneNumberError] = useState("");
    const { phoneNumber, setPhoneNumber } = useContext(NextopayContext);
    const [labelUp, setLabelUp] = useState(false);
    const [loading, setLoading] = useState(false);

    const renderPhoneNumberLabel = () => {
        if (phoneNumber?.length > 0 || labelUp) {
            return (
                <Text
                    style={[
                        styles.label,
                        labelUp &&
                        { color: '#222222', backgroundColor: '#fff', marginLeft: -7 },
                    ]}>
                    Phone Number
                </Text>
            );
        }
        return null;
    };

    const handleSubmit = () => {
        if (phoneNumber?.length === 0) {
            setPhoneNumberError("The mobile field is required.")
        } else if (phoneNumber?.length < 10) {
            setPhoneNumberError("Mobile number cannot be less then 10")
        }
        else {
            setLoading(true)
            mobileRegisterPostRequest(phoneNumber, (response) => {
                setLoading(false)
                console.log('Main File mobileRegisterPostRequest', response)
                if (response !== null) {
                    if (response?.status?.toString() === "true") {
                        // var otpTextList = []
                        // otpTextList = response["otp-message"].split(" ")
                        // console.log('otpTextList', otpTextList[5])
                        // var otpVal = otpTextList[5]
                        navigation.navigate('OPTInputScreen')
                    } else if (response?.status === "failed") {
                        loginAPIPostRequest(phoneNumber, response2 => {
                            setLoading(false);
                            console.log('Main File loginAPIPostRequest', response2);
                            if (response2 !== null) {
                                if (response2?.status?.toString() === "true") {
                                    navigation.navigate('OPTInputScreen')
                                }
                            }
                        });
                    }
                }
            })
        }
    }

    useEffect(() => {
        Auth.getAccount()
            .then((data) => {
                console.log('data fetched in Register Login: ', data);
                if (data !== null) {
                    // dispatch(setUser(data));
                    navigation.navigate("AppStack")
                } else { }
            });
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => {
            if (phoneNumber?.length === 0) {
                setLabelUp(false)
            }
        }} accessible={false}>
            <View>
                <ScrollView contentContainerStyle={{ ...styles.scrollViewWrapper }}>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                    <View>
                        <View style={{ alignItems: "center" }}>
                            <SvgUri width="220" height="220" source={NextopayLogo} />
                            <View style={{ height: '8%' }} />
                        </View>

                        <View style={{ alignItems: 'flex-start', width: '100%' }}>
                            {renderLoginChangeText()}
                            <View style={{ height: 8 }} />

                            {renderEnterOTPText()}
                            <View style={{ height: '6%' }} />
                        </View>

                        <View>
                            {renderPhoneNumberLabel()}
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#999',
                                    borderRadius: 10,
                                }}>
                                <TextInput
                                    value={phoneNumber}
                                    onChangeText={text => {
                                        setPhoneNumber(text);
                                        setPhoneNumberError("")
                                    }}
                                    keyboardType="number-pad"
                                    maxLength={10}
                                    placeholder={labelUp ? '' : 'Phone Number'}
                                    placeholderTextColor="#222"
                                    style={{
                                        height: 46,
                                        fontSize: 14,
                                        color: '#222222',
                                        paddingHorizontal: 16,
                                    }}
                                    onPressIn={() => {
                                        setLabelUp(true);
                                    }}
                                />
                            </View>
                            <Error_Component text={phoneNumberError} />
                        </View>
                        <View style={{ height: '6%' }} />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        {renderSubmitBtn(handleSubmit)}
                    </View>

                    <Custom_Loader loading={loading} />

                </ScrollView>

                <Panel_Component loading={loading} />

            </View>
        </TouchableWithoutFeedback>
    )
}

export const renderLoginChangeText = () => {
    return (
        <View style={{ ...commonStyles.row, width: '100%' }}>
            <Text style={{ fontSize: 22, fontWeight: '500', color: '#000' }}>
                Welcome
            </Text>
        </View>
    );
};

const renderEnterOTPText = () => {
    return (
        <View style={{ ...commonStyles.rowStart, width: '100%' }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#333' }}>
                Please enter your Mobile Number to sent the OTP
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewWrapper: {
        width: "100%", height: "100%",
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "space-between",
    },
    label: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 22,
        top: -11,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
})
