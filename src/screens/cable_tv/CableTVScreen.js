import { View, Text } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { commonStyles } from '../../utils/styles';
import { RenderBroadbandFrame } from '../broadband/BroadBandScreen';

export default function CableTVScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Select your Cable  Tv Oper.... ", navigation)}

            <View style={{ padding: 16 }}>
                <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                    {[
                        "ACT TV",
                        "Asianet Digital",
                        "Hathway Postpaid Digital Cable TV",
                        "GTPL Hathway limited",
                        "INDigital",
                        "Paytmytv-Den",
                        "Paytmytv-Hathway",
                    ].map((item, index) => {
                        return (
                            <View key={index} >
                                <RenderBroadbandFrame
                                    item={item}
                                    onPress={() => { navigation.navigate("CableTVDetailScreen") }}
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}