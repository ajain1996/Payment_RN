import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import { commonStyles } from '../../utils/styles'
import Confirm_button from '../../components/Confirm_button'

export default function SelectedBroadbandScreen({ navigation }) {
    return (
        <>
            {custom_header("Airtel Broadband", navigation)}

            <ScrollView style={{ paddingHorizontal: 16 }}>
                <ElectricityInputScreen
                    placeholder='Telephone Number'
                    subText="Please enter your Telephone Number with STD Code(include 0)"
                    value="Telephone Number"
                />

                <LastPayComponentPart />

            </ScrollView>
            <Confirm_button
                onPress={() => { navigation.navigate("PayDTHScreen") }}
            />
        </>
    )
}

export const LastPayComponentPart = ({ note }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            {note ? <Text style={{ ...commonStyles.fs10_400, color: "#000", margin: 8 }}>
                Please Note: We may charge you a convenience fee based on your payment mode.
            </Text> : <></>}
            <View style={[commonStyles.rowStart, { paddingRight: 16, alignItems: "center" }]}>
                <Image
                    source={require("../../assets/images/bbps.png")}
                    resizeMode="contain"
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <Text style={{ ...commonStyles.fs10_400, color: "#000", margin: 8 }}>
                    Paying this bill allows Nextopay to fetch your current and future bills so that you can view and pay them.
                </Text>
            </View>
        </View>
    );
}
