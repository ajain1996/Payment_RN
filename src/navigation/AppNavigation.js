import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Auth from "../services/Auth";
import { setUser } from '../redux/reducer/user';
import { useDispatch, useSelector } from 'react-redux';
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useState } from "react";
import HelpAndSupport from "../screens/help_support/HelpAndSupport";

export default function AppNavigation() {

    const dispatch = useDispatch();

    const { userData, login } = useSelector(state => state.User);

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    const [loginChk, setLoginChk] = useState(true);

    const getUser = async () => {
        let data = await Auth.getAccount();
        console.log('data fetched: ', data);
        if (data !== null) {
            dispatch(setUser(data));
            setLoginChk(false);
        } else {
            setLoginChk(false);
        }
    }

    useEffect(() => {
        getUser()
    }, []);

    if (loginChk) {
        return null;
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Auth"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
                    {/* {!login
                        ? <Stack.Screen name="Auth" component={AuthStack} />
                        : <Stack.Screen name="AppStack" component={AppStack} />} */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}