import { View, Text, TextInput, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function PostpaidBill({ navigation }) {

    const [allRechargedAccount, setAllRechargedAccount] = useState([
        {
            userName: "Esther Howard",
            phone: "(808) 555-0111",
        },
        {
            userName: "Theresa Webb",
            phone: "(808) 555-0122",
        },
        {
            userName: "Esther Howard",
            phone: "(808) 555-0111",
        },
        {
            userName: "Theresa Webb",
            phone: "(808) 555-0122",
        },
        {
            userName: "Esther Howard",
            phone: "(808) 555-0111",
        },
        {
            userName: "Theresa Webb",
            phone: "(808) 555-0122",
        },
        {
            userName: "Esther Howard",
            phone: "(808) 555-0111",
        },
        {
            userName: "Theresa Webb",
            phone: "(808) 555-0122",
        },
        {
            userName: "Esther Howard",
            phone: "(808) 555-0111",
        },
        {
            userName: "Theresa Webb",
            phone: "(808) 555-0122",
        },
    ]);

    return (
        <>
            {custom_header("Postpaid Bill", navigation)}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text />
                <View style={{ paddingHorizontal: 16 }}>
                    <AntDesign name='search1' size={18} color="#000" style={{ position: "absolute", left: 30, zIndex: 1, top: 15 }} />
                    <TextInput
                        placeholder='Search by Number or Name'
                        placeholderTextColor="#000"
                        style={styles.textInputStyle}
                    />


                    <View style={[styles.recentAccount, { marginTop: 0 }]}>
                        <Text style={styles.recentAccountText}>All Contacts</Text>

                        {
                            allRechargedAccount.map((item, index) => {
                                return (
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                                        key={index} activeOpacity={0.8}
                                        onPress={() => { navigation.navigate("PostpaidBill2") }}
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
                                            {allRechargedAccount.length === (index + 1)
                                                ? <></>
                                                : <View style={{ width: "100%", height: 1, backgroundColor: "#eee", marginTop: 10 }} />}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }

                    </View>
                </View>

                <View style={{ height: 20 }} />
            </ScrollView>
        </>
    )
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