import { ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import { LastPayComponentPart } from '../broadband/SelectedBroadbandScreen'
import Confirm_button from '../../components/Confirm_button'

export default function WaterPHEDScreen({ navigation }) {
    return (
        <>
            {custom_header("PHED - Rajasthan", navigation)}

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='Emitra CID Code'
                    subText="Please enter valid e-Mitra CID Code"
                    value="Emitra CID Code"
                />

                <LastPayComponentPart note={true} />
            </ScrollView>

            <Confirm_button
                onPress={() => { navigation.navigate("LandlineScreen") }}
            />
        </>
    )
}