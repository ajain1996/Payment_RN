import { View, Text, TextInput, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { commonStyles } from '../../utils/styles';

export default function RechargeScreen({ navigation }) {

    const [recentContacts, setRecentContacts] = useState([
        // {
        //     userName: "Esther Howard",
        //     phone: "(808) 555-0111",
        //     lastRecharge: "666",
        //     date: "1 May 2022"
        // },
        // {
        //     userName: "Theresa Webb",
        //     phone: "(808) 555-0122",
        //     lastRecharge: "666",
        //     date: "1 May 2022"
        // },
    ]);

    const [allContactsList, setAllContactsList] = useState([
        {
            userName: "Esther Howard",
            phone: "(808) 555-0111",
        },
        {
            userName: "Theresa Webb",
            phone: "(808) 555-0122",
        },
        // {
        //     userName: "Esther Howard",
        //     phone: "(808) 555-0111",
        // },
        // {
        //     userName: "Theresa Webb",
        //     phone: "(808) 555-0122",
        // },
        // {
        //     userName: "Esther Howard",
        //     phone: "(808) 555-0111",
        // },
        // {
        //     userName: "Theresa Webb",
        //     phone: "(808) 555-0122",
        // },
        // {
        //     userName: "Esther Howard",
        //     phone: "(808) 555-0111",
        // },
        // {
        //     userName: "Theresa Webb",
        //     phone: "(808) 555-0122",
        // },
        // {
        //     userName: "Esther Howard",
        //     phone: "(808) 555-0111",
        // },
        // {
        //     userName: "Theresa Webb",
        //     phone: "(808) 555-0122",
        // },
    ]);

    const getAllContactsList = () => {
        if (allContactsList.length === 0) {
            return (
                <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}>
                    <Text style={{ fontSize: 14, color: "#000" }}>No Contacts</Text>
                </View>
            );
        } else {
            return (
                allContactsList.map((item, index) => {
                    return (
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                            key={index} activeOpacity={0.8}
                            onPress={() => { navigation.navigate("RechargePlanScreen") }}
                        >
                            <Image
                                source={require("../../assets/images/user_profile.png")}
                                style={{ width: 45, height: 45, borderRadius: 100 }}
                            />
                            <View style={{ marginLeft: 8, width: "85%" }}>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: "#000" }}>Esther Howard</Text>
                                <Text style={{ fontSize: 10, fontWeight: '400', color: "#85949F" }}>
                                    (808) 555-0111
                                </Text>
                                {allContactsList.length === (index + 1)
                                    ? <></>
                                    : <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 10 }} />}
                            </View>
                        </TouchableOpacity>
                    );
                })
            );
        }
    }

    const getRecentContactsList = () => {
        if (recentContacts.length === 0) {
            return (
                <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}>
                    <Text style={{ fontSize: 14, color: "#000" }}>No recent contacts</Text>
                </View>
            );
        } else {
            return (
                recentContacts.map((item, index) => {
                    return (
                        <AccountBlock item={item} index={index} recentContacts={recentContacts} />
                    );
                })
            );
        }
    }

    return (
        <>
            {custom_header("Recharge", navigation)}
            <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
                <AntDesign name='search1' color="#000" size={20}
                    style={{ position: "absolute", left: 30, zIndex: 1, top: 15 }}
                />
                <TextInput
                    placeholder='Search by Number or Name'
                    placeholderTextColor="#000"
                    style={styles.textInputStyle}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={[styles.recentAccount]}>
                        <Text style={styles.recentAccountText}>Recent Account</Text>

                        {getRecentContactsList()}

                    </View>

                    <View style={[styles.recentAccount, { marginTop: 20 }]}>
                        <Text style={styles.recentAccountText}>All Contacts</Text>

                        {getAllContactsList()}

                    </View>
                </View>

                <View style={{ height: 20 }} />
            </ScrollView>

            <View style={{ backgroundColor: "#fff", paddingHorizontal: 18, paddingVertical: 10 }}>
                <Text style={{ ...commonStyles.fs12_400, lineHeight: 16 }}>
                    Recharge your mobile on Nextopay and we'll send you a reminder before your pack expires on whatsup.
                </Text>
            </View>
        </>
    )
}


const AccountBlock = ({ item, index, recentContacts }) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} key={index} activeOpacity={0.8}>
            <Image
                source={require("../../assets/images/user_profile.png")}
                style={{ width: 45, height: 45, borderRadius: 100 }}
            />
            <View style={{ marginLeft: 8, width: "85%" }}>
                <Text style={{ fontSize: 14, fontWeight: '400', color: "#000" }}>{item?.userName}</Text>
                <Text style={{ fontSize: 10, fontWeight: '400', color: "#85949F" }}>
                    {item?.phone}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '400', color: "#85949F" }}>
                    Last Recharge:  ₹ {item?.lastRecharge} on {item?.date}
                </Text>

                {recentContacts.length === (index + 1)
                    ? <></>
                    : <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 10 }} />}
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    recentAccount: {
        width: "100%",
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#333",
        padding: 16,
        borderRadius: 9,
    },
    textInputStyle: {
        backgroundColor: "#fff",
        width: "100%", height: 50,
        elevation: 10,
        shadowColor: "#999",
        borderRadius: 9,
        paddingHorizontal: 44,
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 16,
        color: "#000"
    },
    recentAccountText: {
        fontSize: 16, fontWeight: "500", color: "#000"
    },
});