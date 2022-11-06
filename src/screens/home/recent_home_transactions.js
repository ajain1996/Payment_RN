import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../utils/theme'

export default function Recent_home_transactions({ navigation }) {
    const [recentTransactions, setRecentTransactions] = useState([]);

    const getRecentTransactions = () => {
        if (recentTransactions?.length === 0) {
            return (
                <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}>
                    <Text style={{ fontSize: 14, color: "#000" }}>No Transactions</Text>
                </View>
            );
        } else {
            recentTransactions?.map((item, index) => {
                return (
                    <ItemBlock
                        title={"Wade Warren"}
                        phone={"(308) 555-0121"}
                        price={"30"}
                        expiry={"26 march"}
                        payNowOnPress={() => { navigation.navigate("RechargeSuccessfulScreen") }}
                    />
                );
            })
        }
    }


    return (
        <View style={styles.pageWrapper}>
            <View style={styles.pageWrapperTitle}>
                <Text style={styles.recentText}>Recent</Text>

                <TouchableOpacity onPress={() => { navigation.navigate("TransactionScreen") }}>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>

            {getRecentTransactions()}
        </View>
    )
}


const ItemBlock = ({ title, phone, price, expiry, payNowOnPress }) => {
    return (
        <View style={styles.itemWrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require("../../assets/images/user_profile.png")}
                    resizeMode="contain"
                    style={{ width: 60, height: 60, borderRadius: 100 }}
                />
                <View style={styles.itemWrapper2}>
                    <Text style={styles.itemWrapperTitle}>{title}</Text>
                    <Text style={{ fontSize: 9, color: "#999" }}>{phone}</Text>
                    <Text style={{ fontSize: 10, color: "#999", marginTop: 2 }}>
                        Expires on {expiry} ₹ {price}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.payNowBtn} onPress={payNowOnPress}>
                <Text style={styles.payNowBtnText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    pageWrapper: {
        backgroundColor: '#fff',
        marginTop: 18,
        elevation: 10,
        shadowColor: '#999',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    pageWrapperTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6
    },
    recentText: {
        fontSize: 14,
        color: "#000",
        marginTop: 10,
        fontWeight: '700',
    },
    viewAllText: {
        fontSize: 14,
        color: COLORS.pink,
        marginTop: 10,
        fontWeight: '700',
    },
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    itemWrapper2: {
        justifyContent: 'space-between',
        marginLeft: 6, marginTop: -4
    },
    itemWrapperTitle: {
        fontSize: 14,
        color: COLORS.pink,
        fontWeight: '600',
    },
    payNowBtn: {
        paddingHorizontal: 10,
        borderWidth: 1.4,
        borderColor: COLORS.pink,
        borderRadius: 50,
        paddingVertical: 3,
    },
    payNowBtnText: {
        fontSize: 14,
        color: COLORS.pink,
        fontWeight: '700',
    }
});
