import { ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import { LastPayComponentPart } from '../broadband/SelectedBroadbandScreen'
import Confirm_button from '../../components/Confirm_button'

export default function LoanRepaymentDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("Bajaj Finance LTD", navigation)}

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='Loan Account Number'
                    subText="Please enter valid loan Account Number"
                    value="Loan Account Number"
                />

                <LastPayComponentPart />
            </ScrollView>

            <Confirm_button
                onPress={() => { }}
            />
        </>
    )
}