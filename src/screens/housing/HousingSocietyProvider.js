import { View, Text } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header';
import { commonStyles } from '../../utils/styles';
import { RenderBroadbandFrame } from '../broadband/BroadBandScreen';

export default function HousingSocietyProvider({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Select Provider", navigation)}

            <View style={{ padding: 16 }}>
                <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                    {[
                        "Goverdhan Villa Maintenace Society",
                        "Pearl Regalia Welfare And Maintaince Society",
                    ].map((item, index) => {
                        return (
                            <View key={index} >
                                <RenderBroadbandFrame
                                    item={item}
                                    onPress={() => { navigation.navigate("SelectedHSProvider") }}
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}