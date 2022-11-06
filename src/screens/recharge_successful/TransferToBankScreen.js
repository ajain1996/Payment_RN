import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import Entypo from 'react-native-vector-icons/Entypo'
import { Filled_nextopay_account_details } from '../../my_business/Custom_details'

export default function TransferToBankScreen({ navigation }) {

    const [amount, setAmount] = useState("")
    const [labelUp, setLabelUp] = useState(true);

    const transferRbRef = useRef(null)

    const renderFullNameLabel = () => {
        if (amount || labelUp) {
            return (
                <Text
                    style={[
                        styles.label,
                        labelUp &&
                        { color: '#85949F', backgroundColor: '#fff', marginLeft: -7 },
                    ]}>
                    Enter Amount
                </Text>
            );
        }
        return null;
    };

    return (
        <View>
            {custom_header("Transfer to Bank", navigation)}

            <View>
                <View style={{ padding: 16, height: "92%", justifyContent: "space-between" }}>
                    <View>
                        <View style={{ ...commonStyles.customCard, marginBottom: 16 }}>
                            <View style={{ ...commonStyles.row, alignItems: "flex-start", marginVertical: 8 }}>
                                <View style={{ ...commonStyles.rowStart }}>
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                            Availabale to Withdraw
                                        </Text>
                                        <Text style={{ ...commonStyles.fs16_600, color: "#000", marginTop: 4 }}>
                                            ₹ 10,01,643.85
                                        </Text>
                                    </View>
                                </View>

                                <Image
                                    source={require("../../assets/images/artboard.png")}
                                    resizeMode="contain"
                                    style={{ width: 44, height: 44 }}
                                />
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginVertical: 8 }} />
                            <View style={{ height: 16 }} />

                            <View>
                                {renderFullNameLabel()}
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: '#D9D9D9',
                                        borderRadius: 10,
                                    }}>
                                    <Text style={{ ...commonStyles.fs16_600, color: "#000", position: "absolute", top: 6, left: 22 }}>
                                        ₹
                                    </Text>
                                    <TextInput
                                        value={amount}
                                        onChangeText={text => {
                                            setAmount(text);
                                        }}
                                        placeholder={labelUp ? '' : 'Full Name'}
                                        placeholderTextColor="#222222"
                                        keyboardType='number-pad'
                                        style={{
                                            height: 40,
                                            ...commonStyles.fs16_600,
                                            color: '#222222',
                                            paddingHorizontal: 40,
                                        }}
                                        onPressIn={() => {
                                            setLabelUp(true);
                                        }}
                                    />
                                </View>
                            </View>

                            <View style={{ ...commonStyles.row, marginVertical: 16 }}>
                                {
                                    ["2000", "5000", "10,000", "25,000"].map((item, index) => {
                                        return (
                                            <View style={{ elevation: 8, shadowColor: "#999", paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "#fff", borderRadius: 5 }}
                                                key={index}
                                            >
                                                <Text style={{ ...commonStyles.fs15_500, color: "#85949F" }}>
                                                    ₹ {item}
                                                </Text>
                                            </View>
                                        );
                                    })
                                }
                            </View>
                        </View>

                        <Text style={{ ...commonStyles.fs16_600 }}>Bank Account</Text>

                        <View style={{ ...commonStyles.customCard, marginTop: 16 }}>
                            <View style={{ ...commonStyles.row, alignItems: "flex-start", marginVertical: 8 }}>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ ...commonStyles.fs10_400, color: "#000" }}>
                                        Name
                                    </Text>
                                    <Text style={{ ...commonStyles.fs16_600, color: "#000", marginTop: 4 }}>
                                        JIOBINDAS
                                    </Text>
                                </View>

                                <Image
                                    source={require("../../assets/images/UBI.jpg")}
                                    resizeMode="contain"
                                    style={{ width: 44, height: 44 }}
                                />
                            </View>

                            <View style={{ ...commonStyles.row, paddingHorizontal: 8 }}>
                                <Text style={{ ...commonStyles.fs10_400, color: "#000" }}>
                                    Bank (IFSC: ICIC0006785)
                                </Text>
                                <Text style={{ ...commonStyles.fs10_400, color: "#000" }}>
                                    Account number
                                </Text>
                            </View>

                            <View style={{ ...commonStyles.row, paddingHorizontal: 8, marginTop: 6, marginBottom: 12 }}>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    ICICI BANK
                                </Text>
                                <Text style={{ ...commonStyles.fs14_300, color: "#000" }}>
                                    6785 0560 1240
                                </Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity
                            style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                            onPress={() => { transferRbRef.current.open() }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Transfer   ₹ 5000</Text>
                        </TouchableOpacity>
                    </View>

                    <TransferToBankBottomSheet
                        transferRbRef={transferRbRef}
                        navigation={navigation}
                        onChange={() => { }}
                    />
                </View>
            </View>
        </View>
    )
}

const TransferToBankBottomSheet = ({ transferRbRef, onChange, navigation }) => {
    return (
        <RBSheet
            ref={transferRbRef}
            height={350}
            openDuration={250}
            closeOnDragDown={true}
            animationType="fade"
            customStyles={{
                container: {
                    padding: 20,
                    borderRadius: 20
                },
                draggableIcon: {
                    backgroundColor: "#555",
                    width: 0
                }
            }}>
            <View>
                <View style={{ ...commonStyles.row, marginTop: -20 }}>
                    <Text style={{ ...commonStyles.fs14_700, color: '#000' }}>
                        {'Your Nextopay Account'}
                    </Text>
                    <TouchableOpacity onPress={() => { transferRbRef.current.close() }}>
                        <Entypo name="cross" size={18} color="#000000" />
                    </TouchableOpacity>
                </View>


                <Text style={{ ...commonStyles.fs10_400, color: '#85949F', lineHeight: 14, marginVertical: 8 }}>
                    {'Share your Nextopay virtual account details to receive funds in your Nextopay Account'}
                </Text>

                <Filled_nextopay_account_details
                    bankDetails={
                        [
                            { IFSC: "ICICI0000106", NAME: "Vikesh kumar", ACCOUNTNUMBER: "2427 2880 0240 0886" },
                        ]
                    }
                />

                <View style={{ ...commonStyles.row, marginTop: 16, paddingHorizontal: 4 }}>
                    <TouchableOpacity style={{ ...commonStyles.commonBorderedBtnStyle, width: "48%", height: 48 }}
                        onPress={() => { navigation.navigate("TransferToBankScreen2") }}
                    >
                        <Text style={{ ...commonStyles.fs16_700, color: "#5B2D8F" }}>Copy Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ ...commonStyles.commonBtnStyle, width: "48%", height: 48 }}>
                        <Text style={{ ...commonStyles.fs16_700, color: "#fff" }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </RBSheet>
    );
}

const styles = StyleSheet.create({
    label: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 22,
        top: -8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 10,
        fontWeight: "300"
    },
});
