import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import Confirm_button from '../../components/Confirm_button';

export default function AddNewCreditCardScreen({ navigation }) {

    const [cardNumber, setCardNumber] = useState("2435 3489 7484");

    return (
        <>
            {custom_header("Airtel Payments Bank FASTag", navigation)}

            <ScrollView style={{ padding: 16 }}>
                <FastagInputComponent
                    placeholder='Credit Card Number'
                    value={cardNumber}
                    onChangeText={(val) => { setCardNumber(val) }}
                    subText="Please enter your card number"
                    bankName="HDFC Bank"
                />

            </ScrollView>
            <Confirm_button
                onPress={() => { navigation.navigate("PayCreditCardBillScreen") }}
            />
        </>
    )
}

const FastagInputComponent = ({ placeholder, subText, value, bankName, ...rest }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <Text style={{ ...commonStyles.fs14_400, color: "#000", marginBottom: 18 }}>Link Your Credit Card</Text>

            <View>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#85949F"
                    defaultValue={value}
                    keyboardType="numeric"
                    style={{ ...styles.textInput }}
                    {...rest}
                />
                {value.length !== 0 ? <View style={{ ...styles.inputRightIcon }} /> : <></>}
            </View>

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8, marginBottom: 9 }}>
                {subText}
            </Text>

            {value.length !== 0
                ? <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ ...styles.bankLogo }}>
                        <View style={{ width: 8, height: 8, backgroundColor: "#fff" }} />
                    </View>
                    <Text style={{ ...commonStyles.fs14_400, color: "#000", marginTop: 8, marginBottom: 9 }}>
                        {bankName}
                    </Text>
                </View>
                : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
    inputRightIcon: {
        width: 21, height: 21,
        backgroundColor: "#D9D9D9",
        borderRadius: 100,
        position: "absolute",
        right: 0, bottom: 8,
    },
    textInput: {
        ...commonStyles.fs14_500,
        borderBottomColor: "#85949F",
        borderBottomWidth: 1,
        paddingBottom: 4,
        padding: 0,
    },
    bankLogo: {
        width: 18, height: 18,
        borderWidth: 8,
        borderColor: "red",
        backgroundColor: "#fff",
        ...commonStyles.centerStyles,
        marginRight: 8,
    }
})
