import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../utils/styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../utils/theme';
import { BackBtn } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function TransferToBankScreen3({ navigation }) {

    const [mobileNumber, setMobileNumber] = useState("")
    const [amount, setAmount] = useState("")

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {renderBgComponent(navigation)}
            <View style={{ padding: 16 }}>
                {renderBalanceInfo("10,000.42", "12,000", () => { })}

                <RenderGeneratePayLink
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber}
                    amount={amount}
                    setAmount={setAmount}
                    onPress={() => { }}
                    copyDetailsOnPress={() => { }}
                    shareOnPress={() => { }}
                />
            </View>
        </ScrollView>
    )
}

const renderBgComponent = (navigation) => {
    return (
        <View>
            <Image
                source={require("../../assets/images/gift_voucher.png")}
                style={{ width: "100%", height: 241 }}
            />
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ position: "absolute", top: 24, left: 16 }}>
                <SvgUri width="18" height="18" source={BackBtn} />
            </TouchableOpacity>
        </View>
    );
}

const renderBalanceInfo = (totalBalance, todayCollection, transferOnPress) => {
    return (
        <View style={{ ...commonStyles.customCard, marginTop: -52, zIndex: 1 }}>
            <View style={{ ...commonStyles.row }}>
                <View style={{ borderRightWidth: 1, borderRightColor: "#D9D9D9", width: "50%", height: 64 }}>
                    <Text style={{ ...commonStyles.fs14_500, color: "#323F4B" }}>Total Balance</Text>
                    <Text style={{ ...commonStyles.fs16_500, color: "#000" }}>₹ {totalBalance}</Text>
                </View>
                <View style={{ width: "50%", paddingLeft: 40, height: 64 }}>
                    <Text style={{ ...commonStyles.fs14_500, color: "#323F4B" }}>Today Collection</Text>
                    <Text style={{ ...commonStyles.fs16_500, color: "#000" }}>₹ {todayCollection}</Text>
                </View>
            </View>

            <View style={{ alignItems: "flex-end", marginTop: 24 }}>
                <TouchableOpacity style={{ ...commonStyles.commonBtnStyle, width: "66%", height: 48 }}
                    onPress={transferOnPress} activeOpacity={0.9}
                >
                    <Text style={{ ...commonStyles.fs16_700, color: "#fff" }}>Transfer to bank</Text>
                </TouchableOpacity>
            </View>

            <View style={{ ...commonStyles.rowStart, alignItems: "center", marginTop: 20, margin: -8 }}>
                <AntDesign name='exclamationcircleo' size={18} color={COLORS.pink} />
                <Text style={{ ...commonStyles.fs14_500, color: "#323F4B", marginLeft: 8, marginTop: -4 }}>
                    QR:   0+ Virtual A/c :   0 + Link:   0
                </Text>
            </View>
        </View>
    );
}

const RenderGeneratePayLink = ({ mobileNumber, setMobileNumber, amount, setAmount, onPress, copyDetailsOnPress, shareOnPress }) => {
    return (
        <View style={{ ...commonStyles.customCard, marginTop: 20, paddingHorizontal: 0, paddingVertical: 0 }}>
            <TouchableOpacity style={{ ...commonStyles.row }}>
                <Text style={{ ...commonStyles.fs14_600, color: COLORS.pink, marginHorizontal: 12, marginTop: 14 }}>
                    Generate Payment link
                </Text>
                <Image
                    style={{ width: 14, height: 14, marginRight: 9 }}
                    resizeMode="contain"
                    source={require("../../assets/images/chevron-right.png")}
                />
            </TouchableOpacity>

            <Text style={{ ...commonStyles.fs12_400, marginHorizontal: 12, marginTop: 6 }}>
                Enter customer’s mobile number
            </Text>

            <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#85949F',
                        borderRadius: 10,
                    }}>
                    <TextInput
                        value={mobileNumber}
                        onChangeText={text => {
                            setMobileNumber(text);
                        }}
                        placeholder={'Mobile number'}
                        placeholderTextColor="#222222"
                        keyboardType='number-pad'
                        style={{
                            height: 40,
                            ...commonStyles.fs12_400,
                            color: '#222222',
                            paddingHorizontal: 20,
                        }}
                        onPressIn={() => {
                            setLabelUp(true);
                        }}
                    />
                </View>
            </View>

            <View style={{ padding: 12 }}>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#85949F',
                        borderRadius: 10,
                    }}>
                    <TextInput
                        value={amount}
                        onChangeText={text => {
                            setAmount(text);
                        }}
                        placeholder={'Enter amount'}
                        placeholderTextColor="#222222"
                        keyboardType='number-pad'
                        style={{
                            height: 40,
                            ...commonStyles.fs12_400,
                            color: '#222222',
                            paddingHorizontal: 20,
                        }}
                        onPressIn={() => {
                            setLabelUp(true);
                        }}
                    />
                </View>
            </View>

            <View style={{ paddingHorizontal: 12, paddingBottom: 12 }}>
                <TouchableOpacity style={{ ...commonStyles.commonBtnStyle, width: "100%", height: 48, backgroundColor: "#85949F" }}
                    onPress={onPress} activeOpacity={0.9}
                >
                    <Text style={{ ...commonStyles.fs16_700, color: "#fff" }}>Generate payment link</Text>
                </TouchableOpacity>
            </View>

            <View style={{ ...commonStyles.row, paddingHorizontal: 12, marginBottom: 24, marginTop: 36 }}>
                <TouchableOpacity style={{ ...commonStyles.commonBorderedBtnStyle, width: "48%", height: 48 }}
                    activeOpacity={0.9} onPress={copyDetailsOnPress}
                >
                    <View style={{ ...commonStyles.row }}>
                        <AntDesign name='copy1' size={20} color="#5B2D8F" />
                        <Text style={{ ...commonStyles.fs16_700, color: "#5B2D8F", marginLeft: 10 }}>
                            Copy Details
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...commonStyles.commonBtnStyle, width: "48%", height: 48 }}
                    activeOpacity={0.9} onPress={shareOnPress}
                >
                    <View style={{ ...commonStyles.row }}>
                        <AntDesign name='sharealt' size={24} color="#fff" />
                        <Text style={{ ...commonStyles.fs16_700, color: "#fff", marginLeft: 10 }}>
                            Share
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    recieveFunds: {
        width: "100%", height: 33, backgroundColor: "#F6F6F6",
        paddingHorizontal: 12, borderBottomRightRadius: 9, borderBottomLeftRadius: 9
    },
    tabStyle: {
        width: "50%", height: 44,
        ...commonStyles.centerStyles,
        borderWidth: 0.5,
        borderColor: "#dcdcdc",
        borderBottomWidth: 2,
    },
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
})