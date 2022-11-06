import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { preference_and_filter_box } from '../offer/offer_components'
import { commonStyles } from '../../utils/styles'

export default function BrandVouchersScreen({ navigation }) {
    return (
        <View>
            {custom_header("Brand & Vouchers", navigation)}

            <ScrollView showsVerticalScrollIndicator={false}>
                {preference_and_filter_box()}
                <View style={{ padding: 16 }}>
                    <View style={[commonStyles.customCard]}>
                        <Text style={{ ...commonStyles.fs14_600, color: "#000" }}>
                            Now Select first 5% cashback merchant
                        </Text>

                        <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 6, marginBottom: 8 }}>
                            Get ready to be rewarded with the perks you love
                        </Text>
                        {["Amazon", "Spotify", "Netflix", "Uber", "Flipkart", "Dominos"].map((item, index) => {
                            return (
                                <View key={index} >
                                    <RenderBrandVoucherBlock
                                        item={item}
                                        index={index}
                                        onPress={() => { navigation.navigate("HealthInsuranceDetailScreen") }}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export const RenderBrandVoucherBlock = ({ item, onPress, index }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ ...commonStyles.row, alignItems: "center", height: 60 }}
            onPress={onPress}
        >
            <View style={{ ...commonStyles.rowStart }}>
                <Image
                    source={require("../../assets/images/water-logo.png")}
                    resizeMode="contain"
                    style={{ width: 45, height: 45 }}
                />
                <View style={{ ...styles.textBlockStyle }}>
                    <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
                </View>
            </View>
            {index === 0 ? <Text style={{ ...commonStyles.fs14_600, color: "#057A10", marginBottom: 20 }}>5%</Text> : <></>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textBlockStyle: {
        marginLeft: 8, borderBottomColor: "#dcdcdc", borderBottomWidth: 1, width: "80%", height: 40
    }
})
