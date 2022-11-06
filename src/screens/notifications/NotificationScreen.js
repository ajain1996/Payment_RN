import { View, Text, ImageBackground, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS, SIZES } from '../../utils/theme'
import Entypo from 'react-native-vector-icons/Entypo';
import { NotiRupee, UserWhite } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import { useEffect } from 'react';
import { getNotificationsAPI } from '../../utils/API';

export default function NotificationScreen({ navigation }) {

    const [notificationsData, setNotificationsData] = useState([]);

    useEffect(() => {
        getNotificationsAPI((response) => {
            console.log("response: ", response)
        })
    }, [])


    return (
        <View>
            {custom_header("Notifications", navigation)}

            <View style={{ width: SIZES.width, height: SIZES.height }}>
                <ImageBackground
                    source={require("../../assets/images/home-bg2.png")}
                    resizeMode="cover"
                    style={{ width: SIZES.width, height: SIZES.height }}
                >
                    {notificationsData.length !== 0
                        ? <FlatList
                            data={[1, 2, 3]}
                            contentContainerStyle={{ backgroundColor: "transparent", paddingHorizontal: 12, paddingBottom: 20 }}
                            renderItem={({ item }) => {
                                if (item === 1) {
                                    return (
                                        <SingleNotificationBlock
                                            isbg={true}
                                            icon={UserWhite}
                                        />
                                    );
                                } else {
                                    return (
                                        <SingleNotificationBlock
                                            isbg={false}
                                            icon={NotiRupee}
                                        />
                                    );
                                }
                            }}
                        />
                        : <View style={{ alignItems: "center", justifyContent: "center", height: "90%", paddingHorizontal: 60 }}>
                            <Image
                                source={require("../../assets/images/no_notifications_img.png")}
                                resizeMode="contain"
                                style={{ width: 140, height: 140, marginBottom: 14 }}
                            />
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#323F4B", textAlign: "center", lineHeight: 24 }}>
                                You do not have any active bill notifications.
                            </Text>
                        </View>}
                    <View style={{ height: 70 }} />
                </ImageBackground>
            </View>
        </View>
    )
}


const SingleNotificationBlock = ({ title, icon, isbg, time }) => {
    return (
        <View style={[styles.singleNotificationWrapper]}>
            <View style={{ flexDirection: "row" }}>
                <View style={[styles.notoficationIcon, { backgroundColor: isbg ? COLORS.pink : "transparent" }]}>
                    {isbg
                        ? <SvgUri width="30" height="30" source={icon} />
                        : <SvgUri width="38" height="38" source={icon} />}
                </View>
                <Text style={styles.notificationTitle}>You have new notification</Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end", marginTop: 12 }}>
                <Entypo name='dots-three-vertical' size={25} color="#dcdcdc" style={{ marginRight: -9 }} />
                <Text style={[styles.notificationTime, { marginTop: 2 }]}>2d</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    singleNotificationWrapper: {
        width: "100%",
        padding: 10,
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#999",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 50,
        borderRadius: 10,
        marginTop: 14
    },
    notoficationIcon: {
        width: 54, height: 54,
        backgroundColor: COLORS.pink,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    notificationTitle: {
        fontSize: 14,
        color: COLORS.greyText,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 9
    },
    notificationTime: {
        fontSize: 12,
        color: COLORS.lightGray,
        fontWeight: '500',
        marginLeft: 20
    }
})