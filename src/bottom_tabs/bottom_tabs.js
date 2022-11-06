import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import OfferScreen from "../screens/offer/OfferScreen";
import MyBusinessScreen from "../my_business/MyBusinessScreen";
import HistoryScreen from "../history/HistoryScreen";
import { COLORS } from "../utils/theme";
import BillNotifications from "../screens/bill_notifications/BillNotifications";
import TransactionScreen from "../screens/transaction/TransactionScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                tabBarLabel: "",
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.white,
                    borderRadius: 0,
                    height: 64,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopStartRadius: 8,
                    borderTopEndRadius: 8,
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require("../assets/images/home.png")}
                                text="Home"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="OfferScreen"
                component={OfferScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require("../assets/images/offer-tab.png")}
                                text="Offer"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="MyBusinessScreen"
                component={MyBusinessScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require("../assets/images/my-business-tab.png")}
                                text={`My\nBusiness`}
                                center="center"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="BillNotifications"
                component={TransactionScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require("../assets/images/history-tab.png")}
                                text="History"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <BuildTabComponent
                                image={require("../assets/images/user-tab2.png")}
                                text="Profile"
                                focused={focused}
                            />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const BuildTabComponent = ({ image, text, focused, center }) => {
    return (
        <View style={{ height: 50, marginBottom: -15 }}>
            <View style={{
                width: 60, alignItems: 'center', paddingTop: 2,
            }}>
                {center ? <View style={{ width: 54, height: 54, borderRadius: 100, elevation: 10, shadowColor: "#333", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", marginTop: center ? -36 : 0 }}>
                    <Image
                        source={image}
                        resizeMode="contain"
                        style={{
                            width: 26, height: 26,
                            tintColor: focused ? COLORS.pink : "#323F4B",
                        }}
                    />
                </View> : <Image
                    source={image}
                    resizeMode="contain"
                    style={{
                        width: 23, height: 23,
                        tintColor: focused ? COLORS.pink : "#323F4B",
                    }}
                />}
                <Text style={{
                    fontSize: 10.5, fontWeight: "400", color: focused ? COLORS.pink : "#323F4B",
                    lineHeight: 11, textAlign: "center", marginTop: 8
                }}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default BottomTabs;