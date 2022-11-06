import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../utils/styles'
import custom_header from '../../components/custom_header'

export default function PayCreditCardBillScreen({ navigation }) {

    const [amount, setAmount] = useState("");

    return (
        <View>
            {custom_header("Airtel Payments Bank FASTag", navigation)}
            <View style={{ paddingHorizontal: 16, justifyContent: "space-between", height: "88%" }}>

                <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                    <View style={{ ...commonStyles.rowStart }}>
                        <View style={{ ...styles.inputRightIcon }} />
                        <View>
                            <Text style={{ ...commonStyles.fs14_400, color: "#000", marginBottom: 2 }}>
                                Link Your Credit Card
                            </Text>
                            <Text style={{ ...commonStyles.fs14_400, color: "#000", marginBottom: 18 }}>2435XXXXX7484</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ ...styles.rupeeSymbol }}>₹</Text>
                        <TextInput
                            placeholder="Enter Amount"
                            placeholderTextColor="#85949F"
                            defaultValue={amount}
                            keyboardType="numeric"
                            onChangeText={val => { setAmount(val) }}
                            style={{ ...styles.textInput }}
                        />
                    </View>
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                        onPress={() => { navigation.navigate("PayCreditCardBillScreen") }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Proceed To Pay</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputRightIcon: {
        width: 21, height: 21,
        backgroundColor: "#D9D9D9",
        borderRadius: 100,
        marginRight: 12,
        marginTop: 4
    },
    textInput: {
        ...commonStyles.fs14_400,
        padding: 8,
        paddingHorizontal: 32,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 5
    },
    bankLogo: {
        width: 18, height: 18,
        borderWidth: 8,
        borderColor: "red",
        backgroundColor: "#fff",
        ...commonStyles.centerStyles,
        marginRight: 8,
    },
    rupeeSymbol: {
        ...commonStyles.fs18_400,
        color: "#000",
        marginBottom: 18,
        position: "absolute",
        top: 10, left: 14,
    }
})
