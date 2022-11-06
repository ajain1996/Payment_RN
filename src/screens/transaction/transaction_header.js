import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { commonStyles } from '../../utils/styles'
import { ChevronDown, BackBtn } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function transaction_header(navigation) {
    return (
        <View style={{ ...styles.headerBox }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginRight: 20 }}>
                    <SvgUri width="18" height="18" source={BackBtn} />
                </TouchableOpacity>

                <Ionicons name="location-sharp" size={28} color={COLORS.pink} />
                <Text style={{ fontSize: 14, color: "#000", fontWeight: '700', marginLeft: 9 }}>Jaipur</Text>
                <View style={{ marginLeft: 4 }} />
                <SvgUri width="15" height="15" source={ChevronDown} />
            </View>
            <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate("BillNotifications")}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        resizeMode="contain"
                        source={require("../../assets/images/notifications.png")}
                    />
                    <View style={{ width: 11, height: 11, backgroundColor: COLORS.pink, borderRadius: 100, position: "absolute", top: -2, right: -1 }}></View>
                </TouchableOpacity>
                <Image
                    source={require("../../assets/images/user_profile.png")}
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 100, marginLeft: 15 }}
                />
            </View>
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
        paddingVertical: 13,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.pink
    }
});
