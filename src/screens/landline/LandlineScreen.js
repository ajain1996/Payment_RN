import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header';
import { RenderNormalSearch } from '../electricity/ElectricityScreen';
import { commonStyles } from '../../utils/styles';
import { RenderBroadbandFrame } from '../broadband/BroadBandScreen';

export default function LandlineScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Landline", navigation)}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <RenderNormalSearch placeholder="Search by Provider" />

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        {[
                            "Airtel Landline",
                            "Reliance Communication",
                            "Asianet Broadband",
                            "BSNL Broadband/Landline - Corporate",
                            "BSNL Broadband/Landline -Individual",
                            "ACT Broadband",
                            "Airtel Broadband",
                            "Hathway Broadband"].map((item, index) => {
                                return (
                                    <View key={index} >
                                        <RenderBroadbandFrame
                                            item={item}
                                            onPress={() => { navigation.navigate("LandlineDetailScreen") }}
                                        />
                                    </View>
                                );
                            })}
                    </View>
                </View>

                <View style={{ height: 62 }} />
            </ScrollView>
        </View>
    )
}