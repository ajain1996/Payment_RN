import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import { COLORS } from '../../utils/theme'
import Confirm_button from '../../components/Confirm_button'

export default function PayPostpaidScreen({ navigation }) {
    return (
        <>
            {custom_header("Pay Ajmer Vidyut Vitran ....", navigation)}

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16 }}>
                <View style={commonStyles.customCard}>
                    <View style={[commonStyles.row, { marginBottom: 8 }]}>
                        <Image
                            source={require("../../assets/images/electricity/sun-direct.png")}
                            resizeMode="contain"
                            style={{ width: 42, height: 42, marginRight: 11 }}
                        />
                        <View style={{ width: "100%" }}>
                            <Text style={{ ...commonStyles.fs14_400 }}>Arlene McCoy</Text>
                            <Text style={{ ...commonStyles.fs10_400, color: COLORS.lightGray2 }}>130123023976</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 1, backgroundColor: "#eee" }} />

                    <View style={[commonStyles.row, { marginVertical: 14 }]}>
                        <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2 }}>Email</Text>
                        <TextInput
                            placeholder='E-mail Id'
                            placeholderTextColor="#85949F"
                            style={{ ...commonStyles.fs10_400, width: "84%", marginLeft: 16, padding: 0 }}
                        />
                    </View>
                    <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginBottom: 20, marginTop: -10 }} />

                    <View style={{ width: "100%", padding: 14, backgroundColor: "#F6F6F6", borderRadius: 9 }}>
                        <Text style={{ ...commonStyles.fs18_500 }}>₹ 241</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={{ alignItems: "center" }}>
                <Text style={{ ...commonStyles.fs10_400, color: COLORS.pink }}>This payment is secured by Razorpay</Text>
            </View>

            <View style={{ marginTop: 5 }} />
            <Confirm_button
                onPress={() => { navigation.navigate("PayPostpaidScreen") }}
            />

        </>
    )
}