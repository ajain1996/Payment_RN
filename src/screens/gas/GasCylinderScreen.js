import { View, Text } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { commonStyles } from '../../utils/styles';
import { RenderBroadbandFrame } from '../broadband/BroadBandScreen';

export default function GasCylinderScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Select your Gas Provider", navigation)}

            <View style={{ padding: 16 }}>
                <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                    {[
                        "Bharat Gas",
                        "HP Gas",
                        "Indane Gas (Indian Oil)"
                    ].map((item, index) => {
                        return (
                            <View key={index} >
                                <RenderBroadbandFrame
                                    item={item}
                                    onPress={() => { navigation.navigate("GasDetailScreen") }}
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}