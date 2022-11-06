import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Rechange_success_header from './rechange_success_header'
import { COLORS, SIZES } from '../../utils/theme'
import { commonStyles } from '../../utils/styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MobileBlack, File2 } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function RechargeSuccessfulScreen({ navigation }) {
    return (
        <View>
            <Rechange_success_header
                title="Recharge Successful"
                time="10:02 AM on 12 Jan 2022"
                navigation={navigation}
            />

            <ImageBackground
                source={require("../../assets/images/home-bg2.png")}
                resizeMode="cover"
                style={{ width: "100%", height: SIZES.height }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 16 }}>
                        {renderPaymentSuccessText()}

                        <View style={{ ...commonStyles.customCard, marginTop: 20 }}>
                            <Text style={{ ...commonStyles.fs16_700, color: "#000" }}>
                                Mobile recharged
                            </Text>

                            <View style={{ ...commonStyles.row, alignItems: "flex-start", marginVertical: 8 }}>
                                <View style={{ ...commonStyles.rowStart }}>
                                    <View style={{ marginLeft: -6 }}>
                                        <SvgUri width="42" height="42" source={MobileBlack} />
                                    </View>
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{ ...commonStyles.fs14_400, color: "#000" }}>
                                            Airtel prepaid
                                        </Text>
                                        <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                            9660884174
                                        </Text>
                                    </View>
                                </View>

                                <Text style={{ ...commonStyles.fs14_400, color: "#000" }}>
                                    ₹ 99
                                </Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginVertical: 8 }} />

                            <View style={{ ...commonStyles.row, alignItems: "flex-start", marginVertical: 8 }}>
                                <View style={{ ...commonStyles.rowStart }}>
                                    <SvgUri width="25" height="25" source={File2} />
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{ ...commonStyles.fs14_400, color: "#000" }}>
                                            Bill Details
                                        </Text>
                                    </View>
                                </View>

                                <Entypo name='chevron-small-up' size={30} color="#000" />
                            </View>

                            <View style={{ ...commonStyles.row }}>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    Recharge Amount
                                </Text>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    99.00
                                </Text>
                            </View>

                            <View style={{ ...commonStyles.row, marginVertical: 8 }}>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    Platform fee inclusive of GST
                                </Text>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    1.00
                                </Text>
                            </View>

                            <View style={{ ...commonStyles.row, marginBottom: 8 }}>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    Total Amount
                                </Text>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    100.00
                                </Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginVertical: 8 }} />

                            <View style={{ ...commonStyles.rowStart, marginVertical: 8 }}>
                                <SvgUri width="25" height="25" source={File2} />
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ ...commonStyles.fs14_400, color: "#000" }}>
                                        Payment Details
                                    </Text>
                                </View>
                            </View>

                            <View style={{ ...commonStyles.row, marginVertical: 8 }}>
                                <View>
                                    <Text style={{ ...commonStyles.fs10_400, color: "#85949F" }}>
                                        Transaction ID
                                    </Text>
                                    <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                        NX2201121002142861418161
                                    </Text>
                                </View>
                                <Ionicons name='share-social' size={28} color="#000" />
                            </View>

                            <Text style={{ ...commonStyles.fs10_400, color: "#85949F" }}>
                                Airtel Prepaid Refernce ID
                            </Text>
                            <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                995748480
                            </Text>
                            <View style={{ height: 8 }} />

                            <Text style={{ ...commonStyles.fs10_400, color: "#85949F" }}>
                                Debited from
                            </Text>

                            <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                                <Image
                                    source={require("../../assets/images/paytm.png")}
                                    resizeMode="stretch"
                                    style={{ width: 40, height: 32, marginRight: 8 }}
                                />
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    ********4646
                                </Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginVertical: 8 }} />

                            <TouchableOpacity onPress={() => navigation.navigate("TransferToBankScreen")}>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000", textAlign: "center", marginTop: 16 }}>
                                    Need help & Support
                                </Text>
                            </TouchableOpacity>
                            <Text />
                            <Text />

                        </View>
                        <View style={{ height: 88 }} />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const renderPaymentSuccessText = () => {
    return (
        <View style={{ ...commonStyles.customCard, paddingVertical: 4, paddingHorizontal: 6, alignItems: "center" }}>
            <View style={{ borderWidth: 1, borderColor: COLORS.green, margin: 4, width: "100%", borderRadius: 7, alignItems: "center", paddingVertical: 20 }}>
                <AntDesign name='checkcircle' size={46} color={COLORS.green} />
                <Text style={{ ...commonStyles.fs16_700, color: COLORS.green, marginTop: 8 }}>
                    Payment Successful!
                </Text>
            </View>
        </View>
    );
}