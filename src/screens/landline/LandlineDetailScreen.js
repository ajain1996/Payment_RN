import { ScrollView, View } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import { LastPayComponentPart } from '../broadband/SelectedBroadbandScreen'
import Confirm_button from '../../components/Confirm_button'

export default function LandlineDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("Airtel Landline", navigation)}

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='Telephone Number'
                    subText="Please enter your Telephone Number with STD Code(include 0)"
                    value="Telephone Number"
                />

                <LastPayComponentPart />
            </ScrollView>

            <Confirm_button
                onPress={() => { navigation.navigate("GasCylinderScreen") }}
            />
        </>
    )
}