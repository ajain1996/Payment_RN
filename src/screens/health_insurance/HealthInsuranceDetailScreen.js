import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import { commonStyles } from '../../utils/styles'
import Confirm_button from '../../components/Confirm_button'

export default function HealthInsuranceDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("Bajaj Finance LTD", navigation)}

            <ScrollView style={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='Policy Number'
                    subText="Please enter valid Policy Number with hyphen (“-”) e.g., OG-20-9906-8432-000000376"
                    value="Policy Number"
                />

                <PleaseNoteComponent />
            </ScrollView>

            <Confirm_button
                onPress={() => { }}
            />
        </>
    )
}

export const PleaseNoteComponent = ({ }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <Text style={{ ...commonStyles.fs10_400, color: "#000", margin: 5 }}>
                Please Note:  We  may charge you a conenience fee based on your payment mode.
            </Text>
        </View>
    );
}
