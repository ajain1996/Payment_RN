import { View, Text, Image } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { FlatList } from 'react-native-gesture-handler'

const images = [
    { img: require('../../assets/images/amazon.png'), text: "Amazon" },
    { img: require('../../assets/images/gpay.png'), text: "Google Pay" },
    { img: require('../../assets/images/artboard.png'), text: "Nextopay" },
    { img: require('../../assets/images/paytm.png'), text: "Paytm" },
    { img: require('../../assets/images/phonepe.png'), text: "Phonepe" },
    { img: require('../../assets/images/whatsApp.png'), text: "WhatsApp" }
]

export default function QR_Screen({ navigation }) {
    return (
        <View>
            {custom_header("", navigation)}
            <View style={{ paddingHorizontal: 16 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginLeft: -40 }}>
                    <Image
                        source={require("../../assets/images/qr_artboard.png")}
                        resizeMode="contain"
                        style={{ width: 100, height: 100, marginTop: 16 }}
                    />
                    <Text style={{ fontSize: 41, fontWeight: "500", color: "#000000", lineHeight: 61.5 }}>Nextopay</Text>
                </View>

                <View style={{ alignItems: "center", marginTop: -120 }}>
                    <Image
                        source={require("../../assets/images/bhim_upi.png")}
                        resizeMode="contain"
                        style={{ width: "90%", height: 300 }}
                    />

                    <Image
                        source={require("../../assets/images/qr_scanner_img.png")}
                        resizeMode="contain"
                        style={{ width: "90%", height: 300, marginTop: -100, marginBottom: 12 }}
                    />

                    <Text style={{ fontSize: 31, fontWeight: "300", color: "#000000", lineHeight: 48 }}>
                        PAY WITH ANY APP
                    </Text>

                    <FlatList
                        data={images}
                        numColumns={3}
                        contentContainerStyle={{ backgroundColor: "transparent", paddingHorizontal: 12, paddingBottom: 20 }}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Image
                                        source={item.img}
                                        resizeMode="contain"
                                        style={{ width: 60, height: 60, marginHorizontal: 28, marginVertical: 10 }}
                                    />
                                    <Text style={{
                                        fontSize: 10, fontWeight: "400", color: "#000000", lineHeight: 15, textAlign: "center",
                                        marginTop: -8, marginBottom: 5
                                    }}>
                                        {item.text}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    )
}