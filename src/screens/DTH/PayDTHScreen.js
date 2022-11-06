import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/styles'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomCheckbox, { CustomCheckTickbox2 } from '../../components/CustomCheckbox'

export default function PayDTHScreen({ navigation }) {
    return (
        <>
            {custom_header("Pay Aritel Digital TV Bill", navigation)}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: 16 }}>
                    <View style={commonStyles.customCard}>
                        <View style={[commonStyles.row]}>
                            <Image
                                source={require("../../assets/images/airtel_logo.png")}
                                resizeMode="contain"
                                style={{ width: 42, height: 42, marginBottom: 14, marginRight: 11 }}
                            />
                            <View style={{ width: "100%" }}>
                                <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Aritel Digital TV</Text>
                                <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2 }}>130123023976</Text>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee" }} />

                        <View style={[commonStyles.row, { marginTop: 5 }]}>
                            <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Bill Details</Text>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: COLORS.pink }}>HIDE</Text>
                        </View>

                        <View style={[commonStyles.row, { marginVertical: 14 }]}>
                            <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2 }}>Customer Name</Text>
                            <Text style={{ fontSize: 10, fontWeight: "400", color: COLORS.lightGray2 }}>Sanyam Sahalot</Text>
                        </View>

                        <View style={{ width: "100%", padding: 14, backgroundColor: "#F6F6F6", borderRadius: 9 }}>
                            <Text style={{ fontSize: 23, fontWeight: "500", color: "#000", marginBottom: 5 }}>₹ 241</Text>
                            <Text style={{ fontSize: 10, fontWeight: "400", color: "#E20010" }}>Due Date: 26-May-2022</Text>
                        </View>
                    </View>

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Debit Form</Text>

                        <View style={[commonStyles.row, { marginTop: 12, alignItems: "flex-start" }]}>
                            <View style={commonStyles.rowStart}>
                                <CustomCheckbox title="" callback={() => { }} alreadyChecked={true} />
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ ...commonStyles.fs14_400, color: COLORS.lightGray2 }}>
                                        Nextopay wallet  ₹   22
                                    </Text>
                                    <Text style={{ ...commonStyles.fs14_400, color: "#057A10", marginTop: 8 }}>Status</Text>
                                </View>
                            </View>
                            <AntDesign name="exclamationcircleo" size={14} color={COLORS.lightGray2} />
                        </View>

                        <View style={{ width: "112%", height: 1, backgroundColor: "#eee", marginTop: 6, marginLeft: -20 }} />

                        <>
                            <View style={[commonStyles.row, { marginTop: 28, alignItems: "flex-start" }]}>
                                <View style={commonStyles.rowStart}>
                                    <CustomCheckbox title="" callback={() => { }} />
                                    <View style={{ marginLeft: 8 }}>
                                        {pay_text_block("Nextopay Account")}
                                    </View>
                                </View>
                                {pay_text_block("₹ 10.00")}
                            </View>
                            {/* {save_cards_block()} */}
                        </>

                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 20 }} />

                        <PayCardComponent
                            title="Debit Card XX 2074"
                            bank="HDFC Bank"
                            callback={() => { }}
                            icon={
                                <View style={{ ...commonStyles.rowStart }}>
                                    <View style={{ width: 14, height: 14, backgroundColor: "#EB001B", borderRadius: 100 }} />
                                    <View style={{ width: 14, height: 14, backgroundColor: "#F79E1B", borderRadius: 100, marginLeft: -4 }} />
                                </View>
                            }
                        />

                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 20 }} />

                        <PayCardComponent
                            title="Credit Card XX 2074"
                            bank="ICICI Bank"
                            callback={() => { }}
                            icon={
                                <View style={{ ...commonStyles.rowStart }}>
                                    <Image
                                        source={require("../../assets/images/visa.png")}
                                        resizeMode="contain"
                                        style={{ width: 38, height: 38, marginTop: -8, marginLeft: 4 }}
                                    />
                                </View>
                            }
                        />

                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 20 }} />

                        <PayCardComponent
                            title="Credit Card XX 2074"
                            bank="Kotak Bank"
                            callback={() => { }}
                            icon={
                                <View style={{ ...commonStyles.rowStart }}>
                                    <Image
                                        source={require("../../assets/images/rupay.png")}
                                        resizeMode="contain"
                                        style={{ width: 38, height: 38, marginTop: -8, marginLeft: 4 }}
                                    />
                                </View>
                            }
                        />

                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 20 }} />

                        <AddUPICardComponent
                            title="Add UPI"
                            icon={require("../../assets/images/add-upi.png")}
                            subText="Google Pay, PhonePe, Paytm and more"
                            callback={() => { }}
                        />

                        <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 20 }} />

                        <AddATMCardComponent
                            title="Add Debit/Credit Card"
                            icon={"creditcard"}
                            subText="1,034.50"
                            callback={() => { }}
                        />

                    </View>
                    <View style={{ height: 10 }} />
                </View>
            </ScrollView>

            <View style={{ ...commonStyles.row, paddingHorizontal: 20, backgroundColor: "#fff", paddingVertical: 15, elevation: 8, shadowColor: "999" }}>
                {pay_text_block("₹ 1034.50")}

                <TouchableOpacity style={{ ...commonStyles.commonBtnStyle, width: 140 }}
                    activeOpacity={0.8}
                    onPress={() => { }}
                >
                    <Text style={{ ...commonStyles.fs15_600, color: "#fff" }}>Book & Pay</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


const save_cards_block = (text) => {
    return (
        <View style={{ width: "100%", padding: 4, backgroundColor: "#F3E8FF", borderRadius: 30, paddingLeft: 16, marginTop: 5 }}>
            <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                <CustomCheckTickbox2
                    callback={() => { }}
                />
                <View style={{ width: 8 }} />
                {text
                    ? <Text style={{ ...commonStyles.fs10_400, color: COLORS.pink }}>{text}</Text>
                    : <Text style={{ ...commonStyles.fs10_400, color: COLORS.pink }}>Save cards as per latest RBI guidlines</Text>}
            </View>
        </View>
    );
}

const pay_text_block = (text) => {
    return (
        <Text style={{ ...commonStyles.fs14_600 }}>
            {text}
        </Text>
    );
}


export const PayCardComponent = ({ title, callback, icon, bank }) => {
    return (
        <>
            <View style={[commonStyles.row, { marginTop: 20, alignItems: "flex-start" }]}>
                <View style={commonStyles.rowStart}>
                    <CustomCheckbox title="" callback={callback} />
                    <View style={{ marginLeft: 8 }}>
                        {pay_text_block(title)}
                        <Text style={{ ...commonStyles.fs10_500 }}>{bank}</Text>
                    </View>
                    {icon}
                </View>
            </View>
            <View style={{ ...commonStyles.rowStart, alignItems: "center", marginTop: 10, marginLeft: 32 }}>
                <Text style={{ ...commonStyles.fs10_500, color: COLORS.lightGray2, marginRight: 6 }}>
                    Enter CVV Number:
                </Text>
                <TextInput
                    style={{ ...styles.inputCVV }}
                />
            </View>
            <View style={{ marginLeft: 32, marginTop: 6 }}>
                {save_cards_block()}
            </View>

        </>
    );
}


export const AddUPICardComponent = ({ title, callback, subText, icon }) => {
    return (
        <>
            <View style={[commonStyles.rowStart, { marginTop: 20, alignItems: "flex-start" }]}>
                <CustomCheckbox title="" callback={callback} />
                <View style={{ marginLeft: 8, marginTop: -2 }}>
                    <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                        {pay_text_block(title)}
                        <Image
                            source={icon}
                            resizeMode="contain"
                            style={{ width: 26, height: 26, marginLeft: 8 }}
                        />
                    </View>
                    <Text style={{ ...commonStyles.fs10_500, color: COLORS.lightGray2 }}>{subText}</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "#F6F6F6", padding: 8, marginTop: 8 }}>
                <TextInput
                    placeholder='VPN'
                    placeholderTextColor="#999"
                    style={{ ...styles.cardInputStyle }}
                />

                <View style={{ ...commonStyles.row, justifyContent: "center", marginTop: 8 }}>
                    {[1, 2, 3, 4].map((data, index) => {
                        return (
                            <View style={{ ...styles.upiTextBlock }} key={index}>
                                <Text style={{ ...commonStyles.fs12_500 }}>@oksbi</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        </>
    );
}


export const AddATMCardComponent = ({ title, callback, subText, icon }) => {
    return (
        <>
            <View style={[commonStyles.row, { marginTop: 20, alignItems: "flex-start" }]}>
                <View style={commonStyles.rowStart}>
                    <CustomCheckbox title="" callback={callback} />
                    <View style={{ marginLeft: 8, marginTop: 0 }}>
                        <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                            {pay_text_block(title)}
                            <AntDesign name={icon} size={20} color="#000" style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                </View>
                <Text style={{ ...commonStyles.fs12_500 }}>₹ {subText}</Text>
            </View>

            <View style={{ backgroundColor: "#F6F6F6", padding: 8, marginTop: 8 }}>
                <TextInput
                    placeholder='Enter your card number'
                    placeholderTextColor="#999"
                    style={{ ...styles.cardInputStyle }}
                />

                <View style={{ ...commonStyles.row, marginTop: 8 }}>
                    <View style={{ ...commonStyles.rowStart }}>
                        <TextInput
                            placeholder='MM'
                            placeholderTextColor="#999"
                            style={{ ...styles.mmyyInputStyle }}
                        />
                        <TextInput
                            placeholder='YY'
                            placeholderTextColor="#999"
                            style={{ ...styles.mmyyInputStyle }}
                        />
                    </View>
                    <TextInput
                        placeholder='CVV'
                        placeholderTextColor="#999"
                        style={{ ...styles.mmyyInputStyle, width: 55, marginRight: 0 }}
                    />
                </View>
            </View>

            <View style={{ ...commonStyles.rowStart, marginTop: 24, paddingHorizontal: 20 }}>
                <CustomCheckTickbox2
                    callback={() => { }}
                />
                <View style={{ marginLeft: 10 }}>
                    <View style={{ ...commonStyles.rowStart }}>
                        <Text style={{ ...commonStyles.fs10_500, color: COLORS.lightGray2 }}>
                            This card will be encrypted and saved as per latest</Text>
                        <Text style={{ ...commonStyles.fs10_500, color: COLORS.pink, marginLeft: 4 }}></Text>
                    </View>
                    <View style={{ ...commonStyles.rowStart }}>
                        <Text style={{ ...commonStyles.fs10_500, color: COLORS.pink }}>RBI guidelines.</Text>
                        <Text style={{ ...commonStyles.fs10_500, color: COLORS.lightGray2, marginLeft: 4 }}>
                            CVV will not be saved
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    inputCVV: {
        width: 42, height: 26, borderWidth: 1, borderColor: "#dcdcdc", borderRadius: 4,
        fontSize: 12, color: "#999", padding: 6
    },
    upiTextBlock: {
        ...commonStyles.centerStyles,
        width: 60, height: 24,
        borderWidth: 0.6,
        borderColor: "#999",
        backgroundColor: "#fff",
        borderRadius: 3,
        marginHorizontal: 3
    },
    cardInputStyle: {
        width: "100%", height: 36,
        backgroundColor: "#fff",
        padding: 0, paddingHorizontal: 14,
        borderColor: "#dcdcdc", borderWidth: 0.6
    },
    mmyyInputStyle: {
        width: 50, height: 32,
        backgroundColor: "#fff",
        padding: 0,
        paddingHorizontal: 14,
        borderColor: "#dcdcdc",
        borderWidth: 0.6,
        fontSize: 11,
        marginRight: 8
    }
})