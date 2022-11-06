import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { RenderNormalSearch } from '../electricity/ElectricityScreen';
import { RenderWaterFrame } from '../water/WaterScreen';
import see_all_screen_header from '../see_all/see_all_screen_header';
import { commonStyles } from '../../utils/styles';

export default function LoanRepaymentScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Loan Repayment", navigation)}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <RenderNormalSearch placeholder="Search by Biler" />

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <View key={index} >
                                    <RenderWaterFrame
                                        item={item}
                                        onPress={() => { navigation.navigate("LoanRepaymentDetailScreen") }}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>

                <View style={{ height: 66 }} />
            </ScrollView>
        </View>
    )
}