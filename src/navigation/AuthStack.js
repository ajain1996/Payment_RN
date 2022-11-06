import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../onboarding/IntroScreen";
import InputMPINScreen from "../screens/InputMPINScreen";
import { OPTInputScreen } from "../screens/OTPInputScreen";
import RegisterLoginScreen from "../screens/RegisterLoginScreen";
import Auth from "../services/Auth";

const Stack = createStackNavigator();

export default function AuthStack() {

    const screenOptions = {
        headerShown: false,
    };

    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    React.useEffect(() => {
        Auth.getIntro().then(value => {
            console.log("value: ", value)
            if (value == null) {
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch.toString() === "true") {
        routeName = 'IntroScreen';
    } else {
        routeName = 'RegisterLoginScreen';
    }

    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName={routeName}
        >
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="RegisterLoginScreen" component={RegisterLoginScreen} />
            <Stack.Screen name="OPTInputScreen" component={OPTInputScreen} />
            <Stack.Screen name="InputMPINScreen" component={InputMPINScreen} />
        </Stack.Navigator>
    );
}
