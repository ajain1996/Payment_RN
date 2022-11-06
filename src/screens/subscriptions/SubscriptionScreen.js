import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { RenderElectricityFrame, RenderNormalSearch } from '../electricity/ElectricityScreen'
import { commonStyles } from '../../utils/styles'

export default function SubscriptionScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Subscription", navigation)}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
                    <RenderNormalSearch placeholder='Select  by Provider' />

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <View key={index} >
                                    <RenderElectricityFrame
                                        item={item}
                                        onPress={() => { navigation.navigate("SubscriptionDetailScreen") }}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}