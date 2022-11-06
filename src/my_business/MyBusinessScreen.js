import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import custom_header from '../components/custom_header';
import { commonStyles } from '../utils/styles';
import { COLORS, SIZES } from '../utils/theme';
import { NextopayLogo, CashBack } from '../utils/imageManager'
import SvgUri from '../utils/Svg';

const advantagesList = [
    { name: "Instant\nCashback" },
    { name: "Maximum\nCashback" },
    { name: "Auto\nInvoice" },
    { name: "Virtual Account\nfor Billing" },
    { name: "100%\nDigital" },
    { name: "No hidden\ncharges" },
    { name: "Cash back on QR\nrecieved payment" },
    { name: "24*7\nWithdrawl" },
    { name: "Generate\npayment link" },
    { name: "Make\nDeals and Offer" },
]

export default function MyBusinessScreen({ navigation }) {
    return (
        <View>
            {custom_header("Introducing", navigation)}

            <View style={{ padding: 16 }}>
                <View style={[commonStyles.customCard, {
                    height: SIZES.height - 150, alignItems: "center", paddingHorizontal: 0, paddingVertical: 0,
                }]}>

                    <FlatList
                        data={advantagesList}
                        numColumns={2}
                        style={{ width: "100%", marginHorizontal: 20 }}
                        contentContainerStyle={{ alignItems: "center" }}
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ ...commonStyles.customCard, width: SIZES.width / 2.5, margin: 8 }}>
                                    <SvgUri width="33" height="33" source={CashBack} />
                                    <Text style={{ ...commonStyles.fs14_400 }}>{item.name}</Text>
                                </View>
                            );
                        }}
                        ListHeaderComponent={
                            <View>
                                <View style={{ marginTop: 20 }} />
                                <Text style={{ ...commonStyles.fs22_600, color: COLORS.pink }}>Introducing</Text>

                                <View style={{ ...commonStyles.row, alignItems: "center" }}>
                                    <SvgUri width="95" height="95" source={NextopayLogo} />
                                    <View style={{ alignItems: "center", marginTop: -9 }}>
                                        <TouchableOpacity
                                            style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                                            onPress={() => { }}
                                        >
                                            <Text style={{ fontSize: 22, fontWeight: "500", color: "#fff" }}>Nextopay</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <Text style={{ ...commonStyles.fs14_400, color: COLORS.lightGray }}>Now earn more then your commision</Text>

                                <Image
                                    source={require("../assets/images/my_business/my_business_2.png")}
                                    resizeMode="contain"
                                    style={{ width: "100%", height: 344 }}
                                />

                                <Text style={{ ...commonStyles.fs14_600 }}>Advantage to become Merchant</Text>
                            </View>
                        }
                        ListFooterComponent={
                            <View style={{ alignItems: "center", marginVertical: 20 }}>
                                <TouchableOpacity
                                    style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                                    onPress={() => { navigation.navigate("MyBusinesScreen2") }}
                                >
                                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />


                    {/* <View style={{ width: 16 }} />

                        <View style={{ ...commonStyles.customCard, width: "46%" }}>
                            <Image
                                source={require("../assets/images/my_business/instant_cashback.png")}
                                resizeMode="contain"
                                style={{ width: 33, height: 33, borderRadius: 100 }}
                            />
                            <Text style={{ ...commonStyles.fs14_400 }}>Maximum Cashback</Text>
                        </View> */}
                </View>
            </View>
        </View>
    )
}