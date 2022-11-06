import { ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import { LastPayComponentPart } from '../broadband/SelectedBroadbandScreen'
import Confirm_button from '../../components/Confirm_button'

export default function PipedGasDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("Airtel Landline", navigation)}

            <ScrollView style={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='BP No'
                    subText="Please enter valid BP NO"
                    value="BP No"
                />

                <LastPayComponentPart />

            </ScrollView>
            <Confirm_button
                onPress={() => { }}
            />
        </>
    )
}