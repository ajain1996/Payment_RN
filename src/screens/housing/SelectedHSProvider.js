import { View, Text } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles';
import { ElectricityInputScreen } from '../electricity/ElectricityDetailScreen';

export default function SelectedHSProvider({ navigation }) {

    const [hsProvider, setHSProvider] = useState("Flat No/Shop No")

    console.log("hsProvider: ", hsProvider)

    return (
        <View>
            {custom_header("Goverdhan Villa Maintenace........", navigation)}

            <View style={{ padding: 16 }}>
                <ElectricityInputScreen
                    placeholder='Flat No/Shop No'
                    subText="Please enter your Flat No/Shop No"
                    value={hsProvider}
                    onChange={(val) => { setHSProvider(val) }}
                />
            </View>
        </View>
    )
}