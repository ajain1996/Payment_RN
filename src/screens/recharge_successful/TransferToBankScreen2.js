import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../utils/styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS, SIZES } from '../../utils/theme';
import { RenderSingleTransaction } from '../transaction/TransactionScreen';
import { BackBtn } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function TransferToBankScreen2({ navigation }) {

    const [tab, setTab] = useState("recieved");

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {renderBgComponent(navigation)}
            <View style={{ padding: 16 }}>
                {renderBalanceInfo("10,000.42", "12,000", () => { navigation.navigate("TransferToBankScreen3") })}

                {renderGeneratePayLink(() => { })}

                {renderDetailsComponent("Nextop9694774646", "ICICI0000106", () => { })}

                <View style={{ ...commonStyles.customCard, paddingHorizontal: 0, paddingVertical: 0, marginTop: 20 }}>
                    <View style={{ ...commonStyles.row }}>
                        <TouchableOpacity
                            style={{
                                ...styles.tabStyle,
                                borderBottomColor: tab === "recieved" ? COLORS.pink : "#dcdcdc",
                                borderBottomWidth: tab === "recieved" ? 2 : 1,
                            }}
                            activeOpacity={1}
                            onPress={() => { setTab("recieved") }}
                        >
                            <Text style={{ ...commonStyles.fs14_400, marginBottom: -10 }}>Recieved</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                ...styles.tabStyle,
                                borderBottomColor: tab === "settled" ? COLORS.pink : "#dcdcdc",
                                borderBottomWidth: tab === "settled" ? 2 : 1,
                            }}
                            activeOpacity={1}
                            onPress={() => { setTab("settled") }}
                        >
                            <Text style={{ ...commonStyles.fs14_400, marginBottom: -10 }}>Settled</Text>
                        </TouchableOpacity>
                    </View>

                    {tab === "recieved"
                        ? <View>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                                    return (
                                        <View key={index} style={{ paddingHorizontal: 16 }}>
                                            <RenderSingleTransaction item={item} />
                                        </View>
                                    );
                                })
                            }

                            <View style={{ height: 20 }} />
                        </View> : <></>}
                </View>
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
                    onPress={transferOnPress}
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

const renderGeneratePayLink = (onPress) => {
    return (
        <View style={{ ...commonStyles.customCard, marginTop: 20, paddingHorizontal: 0, paddingVertical: 0 }}>
            <TouchableOpacity style={{ ...commonStyles.row }} onPress={onPress}>
                <Text style={{ ...commonStyles.fs14_600, color: COLORS.pink, marginHorizontal: 12, marginTop: 14 }}>
                    Generate Payment link
                </Text>
                <Image
                    style={{ width: 14, height: 14, marginRight: 9 }}
                    resizeMode="contain"
                    source={require("../../assets/images/chevron-right.png")}
                />
            </TouchableOpacity>
            <View style={{ marginTop: 8 }} />
            <View style={{ ...styles.recieveFunds }}>
                <View style={{ ...commonStyles.rowStart, alignItems: "center", marginTop: 8 }}>
                    <AntDesign name='exclamationcircleo' size={18} color={COLORS.pink} />
                    <Text style={{ ...commonStyles.fs14_500, color: "#323F4B", marginLeft: 8, marginTop: -4 }}>
                        Receive funds through payment link.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const renderDetailsComponent = (accountNumber, IFSCCode, onPress) => {
    return (
        <View style={{ ...commonStyles.customCard, marginTop: 20, paddingHorizontal: 0, paddingVertical: 0 }}>
            <TouchableOpacity style={{ ...commonStyles.row, alignItems: "center", paddingHorizontal: 10, paddingVertical: 10 }}
                onPress={onPress}
            >
                <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                    <Image
                        style={{ width: 28, height: 28, marginRight: 9 }}
                        resizeMode="contain"
                        source={require("../../assets/images/artboard.png")}
                    />
                    <Text style={{ ...commonStyles.fs14_400, color: COLORS.pink }}>
                        Your Nextopay Account
                    </Text>
                </View>
                <Image
                    style={{ width: 14, height: 14 }}
                    resizeMode="contain"
                    source={require("../../assets/images/chevron-right.png")}
                />
            </TouchableOpacity>

            <View style={{ ...commonStyles.row, justifyContent: "space-around", paddingHorizontal: 10 }}>
                <View style={{ width: "36%" }}>
                    <Text style={{ ...commonStyles.fs12_400 }}>
                        Account Number
                    </Text>
                    <Text style={{ ...commonStyles.fs12_400 }}>
                        {accountNumber}
                    </Text>
                </View>

                <View style={{ width: "36%" }}>
                    <Text style={{ ...commonStyles.fs12_400 }}>
                        IFSC
                    </Text>
                    <Text style={{ ...commonStyles.fs12_400 }}>
                        {IFSCCode}
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 8 }} />
            <View style={{ ...styles.recieveFunds }}>
                <View style={{ ...commonStyles.rowStart, alignItems: "center", marginTop: 8 }}>
                    <AntDesign name='exclamationcircleo' size={18} color={COLORS.pink} />
                    <Text style={{ ...commonStyles.fs14_500, color: "#323F4B", marginLeft: 8, marginTop: -4 }}>
                        Receive funds in your Nextopay virtual account
                    </Text>
                </View>
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
    }
})