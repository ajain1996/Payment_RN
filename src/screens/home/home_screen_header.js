import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme'
import { Location, ChevronDown, Bell } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react';
import { useEffect } from 'react';
import { getNotificationsCountAPI } from '../../utils/API';

export default function Home_screen_header({ navigation }) {

    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        getNotificationsCountAPI((response) => {
            if (response !== null) {
                if (response?.status.toString() === "True") {
                    console.log("notificationCount response", response);
                    setNotificationCount(response?.Count)
                }
            }
        })
    }, [])

    return (
        <View style={{ ...styles.headerBox }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require("../../assets/images/user_profile.png")}
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }}
                />
                <SvgUri width="22" height="22" source={Location} />
                <Text style={{ fontSize: 14, color: "#000", fontWeight: '700', marginLeft: 9, marginRight: 4 }}>Jaipur</Text>
                <SvgUri width="14" height="14" source={ChevronDown} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
                <FontAwesome name='bell' size={28} color={COLORS.pink} />
                <View style={{ ...styles.notificationCount }}>
                    <Text style={{ color: "#fff", fontSize: 10, marginTop: -1.8 }}>{notificationCount}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        width: '100%',
        // height: 52,
        backgroundColor: COLORS.lightPink,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 13
    },
    notificationCount: {
        width: 17, height: 17,
        backgroundColor: COLORS.pink,
        borderRadius: 100,
        position: "absolute",
        top: -3, right: 2,
        borderWidth: 2,
        borderColor: COLORS.lightPink,
        justifyContent: "center",
        alignItems: "center"
    }
});
