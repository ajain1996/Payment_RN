import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { commonStyles } from '../../utils/styles'
import { CustomCheckTickbox } from '../../components/CustomCheckbox'
import Confirm_button from '../../components/Confirm_button'

export default function PostpaidBill2({ navigation }) {
    return (
        <>
            {see_all_screen_header("", navigation)}

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16 }}>
                <View style={{ ...commonStyles.customCard }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        activeOpacity={0.8}>
                        <Image
                            source={require("../../assets/images/user_profile.png")}
                            style={{ width: 45, height: 45, borderRadius: 100 }}
                        />
                        <View style={{ marginLeft: 8, width: "85%" }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: "#000" }}>Esther Howard</Text>
                            <Text style={{ fontSize: 10, fontWeight: '400', color: "#85949F" }}>
                                (808) 555-0111
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ ...commonStyles.customCard, marginTop: 16 }}>
                    <Text style={{ ...commonStyles.fs16_500, marginBottom: 9 }}>Select your Operator</Text>

                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <View style={{ ...commonStyles.row, marginVertical: 9, height: 46 }} key={index}>
                                <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                                    <Image
                                        source={require("../../assets/images/airtel_logo2.png")}
                                        resizeMode="contain"
                                        style={{ width: 45, height: 45, marginRight: 8 }}
                                    />
                                    <View style={{ width: "76%", height: 38 }}>
                                        <Text style={{ ...commonStyles.fs14_400 }}>Airtel Postpaid</Text>
                                        <View style={{ borderBottomColor: "#dcdcdc", borderBottomWidth: 1, width: "123%", position: "absolute", bottom: 0 }} />
                                    </View>
                                </View>

                                <View style={{ marginTop: -12 }}>
                                    <CustomCheckTickbox title="" callback={(response) => { }} />
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            <Confirm_button
                onPress={() => { navigation.navigate("PayPostpaidScreen") }}
            />

        </>
    )
}