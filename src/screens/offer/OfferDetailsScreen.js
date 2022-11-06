import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { OfferDetailsBg, ChevronDown, DateSvg } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function OfferDetailsScreen() {
    return (
        <View>
            <SvgUri width="100%" height="230" source={OfferDetailsBg} />

            <ImageBackground
                source={require("../../assets/images/home-bg2.png")}
                resizeMode="stretch"
                style={{ width: "100%", height: SIZES.height / 1.38 }}
            >
                <View style={{ marginHorizontal: 14, marginTop: -20 }}>
                    <GiftVoucherBox
                        claimOfferOnpres={() => { }}
                        giftNowOnPress={() => { }}
                    />
                    <View style={{ marginTop: 18 }} />

                    <MoreDetails />
                </View>
            </ImageBackground>
        </View>
    )
}


const GiftVoucherBox = ({ claimOfferOnpres, giftNowOnPress }) => {
    return (
        <View style={[styles.giftVoucherWrapper]}>
            <Text style={styles.giftTextStyle}>Gift Voucher</Text>
            <Text style={[styles.giftSubTextStyle]}>
                on purchase of gift voucher with NextoPay
            </Text>
            <View style={{ height: 10 }} />

            <TouchableOpacity style={[styles.claimOfferBtnStyle]}
                activeOpacity={0.7}
                onPress={claimOfferOnpres}
            >
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Claim Offer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.giftNowBtnStyle]}
                activeOpacity={0.7}
                onPress={giftNowOnPress}
            >
                <Text style={{ fontSize: 18, fontWeight: "700", color: COLORS.pink }}>Gift Now</Text>
            </TouchableOpacity>
        </View>
    );
}


const MoreDetails = () => {
    return (
        <View style={[styles.giftVoucherWrapper]}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <Text style={styles.moreDetailsTextStyle}>More Details</Text>
                <SvgUri width="16" height="16" source={ChevronDown} />
            </View>
            <View style={{ marginTop: 28 }} />

            <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
                <SvgUri width="25.8" height="25.8" source={DateSvg} />
                <Text style={styles.dateExpiry}>Expires on 31 may 2022,11:59 PM</Text>
            </View>
            <View style={{ marginTop: 16 }} />

            <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginLeft: 4 }}>
                <AntDesign name="exclamationcircleo" size={24} color="#000" />
                <Text style={[styles.dateExpiry, { marginLeft: 8 }]}>Offer Details</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    giftVoucherWrapper: {
        width: "100%",
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#333",
        padding: 24,
        borderRadius: 9,
        alignItems: "center",
    },
    giftTextStyle: {
        fontSize: 16, fontWeight: "500", color: "#000"
    },
    giftSubTextStyle: {
        fontSize: 10, fontWeight: "400", color: COLORS.lightGray2, marginTop: 16
    },
    claimOfferBtnStyle: {
        width: 226, height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.pink,
        borderRadius: 9,
    },
    giftNowBtnStyle: {
        width: 226, height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: COLORS.pink,
        borderRadius: 9, marginTop: 10,
    },
    moreDetailsTextStyle: {
        fontSize: 16, fontWeight: "bold", color: "#000",
        lineHeight: 24
    },
    dateExpiry: {
        fontSize: 14, color: COLORS.greyText,
        lineHeight: 24, marginLeft: 8
    }
});