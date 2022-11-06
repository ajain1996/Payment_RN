import { ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen'
import Confirm_button from '../../components/Confirm_button'

export default function CableTVDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("ACT TV", navigation)}

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='Account Number/Mobile Number MAC ID'
                    subText="Please enter valid Account Number / Mobile Number / MAC ID"
                    value="Account Number/Mobile Number MAC ID"
                />
            </ScrollView>

            <Confirm_button
                onPress={() => { }}
            />
        </>
    )
}