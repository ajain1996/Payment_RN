import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme';
import { commonStyles } from '../../utils/styles';
import Confirm_button from '../../components/Confirm_button';

export default function SelectedDTHScreen({ navigation }) {
    return (
        <>
            {custom_header("Airtel Digital TV", navigation)}
            <ScrollView>
                <View style={{ margin: 16 }}>
                    <View style={commonStyles.customCard}>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Subscriber ID</Text>
                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 3, marginBottom: 11 }} />

                        <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2 }}>
                            Your Subscriber id is located on your TV menu, on the bottom of the screen
                        </Text>
                    </View>

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        <Text style={{ fontSize: 10, fontWeight: "400", color: "#000" }}>
                            Paying this bill allows Nextopay to fetch your current and future bills so that you can view and pay them.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Confirm_button
                onPress={() => { navigation.navigate("PayDTHScreen") }}
            />
        </>
    )
}
