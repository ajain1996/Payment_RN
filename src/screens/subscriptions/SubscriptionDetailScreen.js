import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import { COLORS } from '../../utils/theme'
import CustomCheckbox from '../../components/CustomCheckbox'

export default function SubscriptionDetailScreen({ navigation }) {
    return (
        <View>
            {custom_header("MX Player", navigation)}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <Image
                        source={require("../../assets/images/subscription_bg.png")}
                        resizeMode="contain"
                        style={{ width: "100%", height: 254 }}
                    />

                    <View style={[commonStyles.customCard, { marginTop: 16 }]}>
                        <Text style={{ ...commonStyles.fs16_700, marginBottom: 8 }}>Plan Description</Text>

                        {
                            [
                                "Ad-Free* Access to content Under MX Originals & certain  selected content on the MX Platform along with access to Top Movies  ",
                                "Ad-Free* Access to local player and +11,000+ hours of international dibbed content (vdesi) across 300+ shows",
                                "Get Early Access to new releases",
                                "MX Gold can be used across 3 devices at a time"
                            ].map((data, index) => {
                                return (
                                    <View style={{ ...commonStyles.rowStart, marginVertical: 5 }} key={index}>
                                        <View style={{ width: 40 }}>
                                            <Text style={{ fontSize: 18, color: COLORS.lightGray }}>✱</Text>
                                        </View>
                                        <View style={{ width: "89%" }}>
                                            <Text style={{ ...commonStyles.fs12_400, color: COLORS.lightGray }}>{data}</Text>
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>

                    <View style={[commonStyles.customCard, { marginTop: 16 }]}>
                        <Text style={{ ...commonStyles.fs16_700, marginBottom: 8 }}>Select Your Plan</Text>

                        <View style={{ borderWidth: 1, borderColor: "#dcdcdc", borderRadius: 4, width: 162 }}>
                            <View style={{ ...commonStyles.rowStart, alignItems: "center", padding: 9 }}>
                                <CustomCheckbox
                                    width={18}
                                    height={18}
                                    callback={() => { navigation.navigate("SubscriptionPlanScreen") }}
                                />

                                <Text style={{ ...commonStyles.fs10_400, color: COLORS.pink, marginLeft: 8 }}>
                                    ₹ 299 for 12 months
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}