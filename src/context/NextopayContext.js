import React, { createContext, useEffect, useState } from 'react';

export const NextopayContext = createContext();

export const NextopayProvider = props => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bearerToken, setBearerToken] = useState("");
    const [userToken, setUserToken] = useState("");

    // validateOTPPostRequest(route?.params?.phoneNumber, value, response => {
    //     setLoading(false);
    //     console.log('Main File validateOTPPostRequest', response);
    //     if (response !== null) {
    //         if (response['status'] === 'Sucess') {
    //             if (response['data'].mpin === null) {
    //                 navigation.navigate('InputMPINScreen', {
    //                     bearerToken: response['bearer-token'],
    //                     userToken: response['data'].usertoken,
    //                 });
    //             } else {
    //                 navigation.navigate('Root');
    //             }
    //         } else if (response['status'] === 'failed') {
    //             Alert.alert('Alert!', response['message']);
    //         }
    //     }
    // });

    useEffect(() => {
        console.log("Context Phone Number: ", phoneNumber)
        return () => { }
    }, [])


    return (
        <NextopayContext.Provider value={{
            phoneNumber, setPhoneNumber,
            bearerToken, setBearerToken,
            userToken, setUserToken,
        }}>
            {props.children}
        </NextopayContext.Provider>
    );
}