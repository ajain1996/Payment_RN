import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme';
import RBSheet from 'react-native-raw-bottom-sheet'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { commonStyles } from '../../utils/styles';
import { rechargeBtns } from './RechargeplanpayScreen';
import { useEffect } from 'react';
import { getCircleAPI } from '../../utils/API';
import { useCallback } from 'react';

export default function RechargePlanScreen({ navigation }) {

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

    const getCircleCallback = useCallback((response) => {
        var operatorList2 = [];
        var stateList2 = [];
        if (response !== null) {
            if (response?.status.toString() === "True") {
                console.log("getCircleAPI response: ", response?.Data)
                operatorList2.push(response?.Data?.circle)
                setOperatorList(operatorList2)
                stateList2.push(response?.Data?.operator)
                setStateList(stateList2)
            }
        }
    }, [operatorList, stateList])

    useEffect(() => {
        getCircleAPI(getCircleCallback)
    }, [])


    return (
        <>
            {custom_header("Select a recharge plan", navigation)}
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollViewRef}
                nestedScrollEnabled={true}
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
                            {rechargeBtns('Airtel Prepaid', () => { actionSheetRef2.current.open() })}
                            {rechargeBtns('Rajhasthan', () => { actionSheetRef.current.open() })}
                        </View>
                    </View>

                    <View>
                        <AntDesign name='search1' color="#000" size={20}
                            style={{ position: "absolute", left: 14, zIndex: 1, bottom: 35 }}
                        />
                        <TextInput
                            placeholder='Search for a plan, e.g. 178 or 28 days'
                            placeholderTextColor="#000"
                            style={styles.textInputStyle}
                        />
                    </View>

                    <View style={[styles.planBlock1]}>
                        <ScrollView contentContainerStyle={{ alignItems: 'center' }} horizontal showsHorizontalScrollIndicator={false}>
                            <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.pink, marginRight: 28 }}>Recommended Packs</Text>
                            <Text style={{ fontSize: 12, fontWeight: "500", color: "#323F4B", marginRight: 28 }}>Truly Unlimited</Text>
                            <Text style={{ fontSize: 12, fontWeight: "500", color: "#323F4B", marginRight: 28 }}>Cricket Packs</Text>
                            <Text style={{ fontSize: 12, fontWeight: "500", color: "#323F4B", marginRight: 28 }}>Recommended Packs</Text>
                            <Text style={{ fontSize: 12, fontWeight: "500", color: "#323F4B", marginRight: 28 }}>Recommended Packs</Text>
                        </ScrollView>
                    </View>

                    {renderRechargeHistory()}

                    {renderRechargeHistory()}

                    <RBSheet
                        ref={actionSheetRef}
                        height={380}
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
                                <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>Select Operator</Text>
                                <TouchableOpacity onPress={() => { actionSheetRef.current.close() }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Entypo name='cross' size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            {stateList.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={{
                                        borderBottomWidth: 1, borderColor: "#dcdcdc", marginTop: 24, paddingBottom: 4,
                                        marginHorizontal: 14
                                    }} onPress={() => { }}>
                                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>{item}</Text>
                                    </TouchableOpacity>
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
                                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#000" }}>{item}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </RBSheet>
                </View>
            </ScrollView>

            <View style={{ backgroundColor: "#fff", paddingHorizontal: 18, paddingVertical: 10 }}>
                <Text style={{ ...commonStyles.fs12_400, lineHeight: 16 }}>
                    Declearation- We support most types of recharge, but please check with your operator before you proceed.
                </Text>
            </View>
        </>
    )
}


const renderRechargeHistory = () => {
    return (
        <View style={[styles.planBlock1, { marginTop: 20 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: "30%", borderRightWidth: 1, borderColor: "#dcdcdc", marginRight: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
                        ₹ 239
                    </Text>
                </View>
                <View style={{ width: "30%", borderRightWidth: 1, borderColor: "#dcdcdc", marginRight: 16 }}>
                    <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F" }}>Data:</Text>
                    <Text style={{ fontSize: 10, fontWeight: "400", color: "#000" }}>1.5 GB per day</Text>
                </View>
                <View style={{ width: "30%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F" }}>Validity:</Text>
                        <Text style={{ fontSize: 10, fontWeight: "400", color: "#000" }}>20 days</Text>
                    </View>
                    <Entypo name="chevron-right" size={25} color="#000" />
                </View>
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
                <Text style={{ fontSize: 10, fontWeight: "400", color: "#000", marginTop: 10 }}>
                    Additional Benefits
                </Text>
                <View style={{ height: 8 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require("../../assets/images/hotstar.png")}
                            style={{ width: 28, height: 28, borderRadius: 100 }}
                        />
                        <Text style={{ fontSize: 10, fontWeight: "400", color: "#85949F", marginLeft: 8 }}>
                            Disney+ Hotstar Mobile for 1 year
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: COLORS.pink }}>
                            MORE
                        </Text>
                    </TouchableOpacity>
                </View>
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
        fontSize: 14,
        fontWeight: "400",
        marginVertical: 20,
        color: "#000"
    },
});
