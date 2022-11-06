import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS, SIZES } from '../../utils/theme';

export default function DTHProviderScreen({ navigation }) {

    const [allProviders, setAllProviders] = useState([
        // {
        //     logo: require("../../assets/images/airtel_logo.png"),
        //     name: "Airtel Digital TV"
        // },
        // {
        //     logo: require("../../assets/images/Dish_TV.png"),
        //     name: "Dish TV"
        // },
        // {
        //     logo: require("../../assets/images/sun_direct.png"),
        //     name: "Sun Direct"
        // },
        // {
        //     logo: require("../../assets/images/Tata_Sky.png"),
        //     name: "Tata play(Formerly TataSky)"
        // },
        // {
        //     logo: require("../../assets/images/d2h_logo.png"),
        //     name: "D2H"
        // },
    ])

    const getDTHProvidersList = () => {
        if (allProviders.length === 0) {
            return (
                <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}>
                    <Text style={{ fontSize: 14, color: "#000" }}>No DTH providers</Text>
                </View>
            );
        } else {
            allProviders.map((item, index) => {
                return (
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.providerWrapper}
                        onPress={() => { navigation.navigate("SelectedDTHScreen") }}
                    >
                        <Image
                            source={item?.logo}
                            resizeMode="contain"
                            style={{ width: 42, height: 42, marginBottom: allProviders.length !== index + 1 ? 16 : 0, marginRight: 11 }}
                        />
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>{item?.name}</Text>
                            {allProviders.length !== index + 1
                                ? <View style={{ height: 1, backgroundColor: "#eee", width: "84%", marginTop: 15 }} />
                                : <></>}
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    }

    return (
        <>
            {custom_header("Select Provider", navigation)}
            <View style={[styles.dthProviderWrapper]}>
                {getDTHProvidersList()}
                {/*  */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    dthProviderWrapper: {
        width: SIZES.width - 30,
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#333",
        borderRadius: 9,
        alignItems: "center",
        margin: 16,
        paddingVertical: 12,
    },
    providerWrapper: {
        flexDirection: "row",
        alignItems: 'center',
        width: "100%", height: 38,
        paddingHorizontal: 10,
        marginBottom: 12,
    }
});