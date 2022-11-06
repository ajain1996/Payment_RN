import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS, SIZES } from '../../utils/theme';
import RBSheet from 'react-native-raw-bottom-sheet'
import Entypo from 'react-native-vector-icons/Entypo';
import { ChevronDown } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';


export default function RechargeplanpayScreen({ navigation }) {

    const scrollViewRef = useRef();
    const actionSheetRef = useRef();
    const actionSheetRef2 = useRef();

    const [stateList, setStateList] = useState([
        { name: "Delhi", value: "delhi" },
        { name: "Madhya Pradesh", value: "mp" },
        { name: "Rajhasthan", value: "rj" },
        { name: "Maharastra", value: "mah" },
        { name: "Uttar Pradesh", value: "up" },
        { name: "Gujarat", value: "guj" },
    ]);

    const [operatorList, setOperatorList] = useState([
        { name: "Airtel", value: "airtel" },
        { name: "Jio", value: "jio" },
        { name: "Idea", value: "idea" },
        { name: "BSNL", value: "bsnl" },
        { name: "Vodafone", value: "vodafone" },
    ])

    return (
        <>
            {custom_header("Pay", navigation)}
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollViewRef}
                nestedScrollEnabled={true}
            // onMomentumScrollEnd={() =>
            //     actionSheetRef.current?.handleChildScrollEnd()
            // }
            >
                <View style={{ margin: 16 }}>
                    <View style={[styles.planBlock1]}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
                            activeOpacity={0.8}>
                            <Image
                                source={require("../../assets/images/user_profile.png")}
                                style={{ width: 45, height: 45, borderRadius: 100 }}
                            />
                            <View style={{ marginLeft: 8, width: "85%" }}>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: "#000" }}>Esther Howard</Text>
                                <Text style={{ fontSize: 10, fontWeight: '400', color: "#85949F" }}>
                                    (808) 555-0111
                                </Text>
                                <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 10 }} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                            {rechargeBtns('Airtel Prepaid', () => { actionSheetRef.current.open() })}
                            {rechargeBtns('Rajhasthan', () => { actionSheetRef2.current.open() })}
                        </View>
                    </View>

                    {renderRechargeHistory()}

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.proceedBtnStyle]}
                            onPress={() => { }}
                        >
                            <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff" }}>PROCEED</Text>
                        </TouchableOpacity>
                    </View>

                    <RBSheet
                        ref={actionSheetRef}
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
                        }}
                    >
                        <View style={{ width: "100%", paddingBottom: 40 }}>
                            <View style={{
                                borderBottomWidth: 1, borderColor: "#dcdcdc", marginTop: 24, paddingBottom: 4,
                                marginHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                                <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Select Operator</Text>
                                <TouchableOpacity onPress={() => { actionSheetRef.current.close() }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Entypo name='cross' size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            {stateList.map((item, index) => {
                                return (
                                    <View key={index} style={{
                                        borderBottomWidth: 1, borderColor: "#dcdcdc", marginTop: 24, paddingBottom: 4,
                                        marginHorizontal: 14
                                    }}>
                                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>{item?.name}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </RBSheet>

                    <RBSheet
                        ref={actionSheetRef2}
                        height={330}
                        openDuration={250}
                        closeOnDragDown={true}
                        animationType="fade"
                        customStyles={{
                            container: {
                                padding: 0,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            },
                            draggableIcon: {
                                backgroundColor: "#555",
                                width: 0
                            }
                        }}
                    >
                        <View style={{ width: "100%", paddingBottom: 40 }}>
                            <View style={{
                                borderBottomWidth: 1, borderColor: "#dcdcdc", paddingBottom: 4,
                                marginHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                                <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Select State</Text>
                                <TouchableOpacity onPress={() => { actionSheetRef2.current.close() }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Entypo name='cross' size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            {operatorList.map((item, index) => {
                                return (
                                    <TouchableOpacity activeOpacity={0.7} key={index} style={{
                                        borderBottomWidth: 1, borderColor: "#dcdcdc", marginTop: 24, paddingBottom: 4,
                                        marginHorizontal: 14
                                    }} onPress={() => { navigation.navigate("RechargeplanpayScreen") }}>
                                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>{item?.name}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </RBSheet>
                </View>
            </ScrollView>
        </>
    )
}


export const rechargeBtns = (title, onPress) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity style={[styles.giftNowBtnStyle]}
                activeOpacity={0.7}
                onPress={onPress}
            >
                <Text style={{ fontSize: 12, fontWeight: "400", color: COLORS.pink }}>{title}</Text>
                <SvgUri width="15" height="15" source={ChevronDown} />
            </TouchableOpacity>
        </View>
    );
}


const renderRechargeHistory = () => {
    return (
        <View style={[styles.planBlock1, { marginTop: 20 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ width: "30%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
                        ₹ 239
                    </Text>
                </View>
                <TouchableOpacity style={{ width: 110, height: 34, backgroundColor: COLORS.pink, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                    <Text style={{ fontSize: 10, fontWeight: "400", color: "#fff" }}>CHANGE PLAN</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: 12, marginBottom: 4 }}>
                <Text style={{ fontSize: 11, fontWeight: "400", color: "#000", marginRight: 16 }}>
                    Talktime: 0.0
                </Text>
                <Text style={{ fontSize: 11, fontWeight: "400", color: "#000", marginRight: 16 }}>
                    Data: 1.5 GB/per day
                </Text>
                <Text style={{ fontSize: 11, fontWeight: "400", color: "#000", marginRight: 16 }}>
                    Validity: 84 days
                </Text>
            </View>

            <View style={{ alignItems: 'flex-start', width: "100%" }}>
                <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F", marginTop: 10 }}>
                    Calls: Unlimited
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F", marginTop: 10 }}>
                    Data: 1.5 GB/per day
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F", marginTop: 10 }}>
                    Sms: 100/per day
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F", marginTop: 10 }}>
                    Validity: 84 days
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    planBlock1: {
        width: "100%",
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#333",
        padding: 16,
        borderRadius: 9,
        alignItems: "center",
    },
    giftNowBtnStyle: {
        width: 122, height: 33,
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.pink,
        borderRadius: 9, marginTop: 10,
        flexDirection: "row",
        paddingHorizontal: 10
    },
    textInputStyle: {
        backgroundColor: "#fff",
        width: "100%", height: 50,
        elevation: 10,
        shadowColor: "#333",
        borderRadius: 9,
        paddingHorizontal: 44,
        fontSize: 10,
        fontWeight: "400",
        marginVertical: 20,
    },
    proceedBtnStyle: {
        width: "100%", height: 56,
        backgroundColor: COLORS.pink,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: SIZES.height / 2.5
    }
});
