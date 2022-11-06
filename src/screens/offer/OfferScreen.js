import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme'
import { preference_and_filter_box } from './offer_components'
import { OfferGift, ThreeDots } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import { getAllOffersPostAPI } from '../../utils/API'
import { NextopayContext } from '../../context/NextopayContext'

export default function OfferScreen({ navigation }) {

    const [offersList, setOffersList] = useState([]);

    const { phoneNumber, bearerToken, userToken } = useContext(NextopayContext);

    useEffect(() => {
        getAllOffersPostAPI(
            phoneNumber,
            userToken,
            bearerToken,
            (response) => {
                console.log('\n OfferScreen getAllOffersPostAPI: ', response)
                if (response !== null) {
                    if (response?.status === "True") {
                        setOffersList(response?.Offers)
                    }
                }
            }
        );
        return () => { }
    }, [])

    const getOffersList = () => {
        if (offersList.length === 0) {
            return (
                <View style={{ alignItems: "center", justifyContent: "center", height: 100 }}>
                    <Text style={{ fontSize: 14, color: "#000" }}>No Offers</Text>
                </View>
            );
        } else {
            return (
                <FlatList
                    data={offersList}
                    numColumns={2}
                    contentContainerStyle={{ paddingHorizontal: 16, flexGrow: 1 }}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ item }) => {
                        return (
                            <OfferBlock item={item} navigation={navigation} />
                        );
                    }}
                    ListFooterComponent={
                        <View style={{ height: 235 }} />
                    }
                />
            );
        }
    }

    return (
        <View style={{}}>
            {custom_header("Offers", navigation, ThreeDots, true)}

            {preference_and_filter_box()}

            {getOffersList()}
        </View>
    )
}


const OfferBlock = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={[styles.offerWrapper]} activeOpacity={0.9}
            onPress={() => { navigation.navigate("OfferDetailsScreen") }}
        >
            <Image
                source={require("../../assets/images/offer/img1.png")}
                // source={{ uri: item?.offer_image }}
                resizeMode="stretch"
                style={{ width: "100%", height: 100, marginBottom: 5 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>{item?.name}</Text>
            <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2, marginTop: 6 }}>
                {/* Up to   75 Cashback* */}
                {item?.caption}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                <SvgUri width="16" height="16" source={OfferGift} />
                <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2, marginLeft: 4 }}>
                    Fashion & Cloth
                </Text>
            </View>
            <Text />

            <View style={[styles.offerTypeStyle]}>
                <Text style={{ fontSize: 10, fontWeight: "500", color: "#000" }}>2d</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    offerWrapper: {
        width: "47.8%",
        paddingVertical: 12,
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#333",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    offerTypeStyle: {
        width: 38,
        paddingVertical: 4,
        backgroundColor: "#D6CAE3",
        justifyContent: "center",
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: "absolute",
        bottom: 0, right: 0,
    }
});
