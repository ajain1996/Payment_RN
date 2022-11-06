import { View, Text, StatusBar, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Help_support_header from './help_support_header'
import { COLORS } from '../../utils/theme'
import Entypo from 'react-native-vector-icons/Entypo';

export default function HelpAndSupport({ navigation }) {
    return (
        <>
            <ScrollView>
                <StatusBar backgroundColor={COLORS.lightPink} barStyle="dark-content" />
                <Help_support_header navigation={navigation} />

                <View style={{ ...styles.rowEnd }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ elevation: 8, shadowColor: "#999", padding: 12, backgroundColor: "#fff", borderRadius: 9 }}>
                            <Text style={{ fontSize: 14, fontWeight: "300", color: "#5B2D8F" }}>Issue with the received plan benefits</Text>
                        </View>
                        <Text style={{ fontSize: 10, fontWeight: "300", color: "#000", marginTop: 8 }}>Delivered a few seconds ago</Text>
                    </View>

                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        style={{ width: 45, height: 45, borderRadius: 100, marginLeft: 12 }}
                    />
                </View>

                <View style={{ ...styles.rowEnd, alignItems: 'flex-end' }}>
                    <Image
                        source={require("../../assets/images/artboard.png")}
                        style={{ width: 52, height: 52, borderRadius: 100, marginRight: 12, marginBottom: 5 }}
                    />

                    <View style={{ alignItems: 'flex-start', width: "85%" }}>
                        <Text style={{ fontSize: 10, fontWeight: "300", color: "#000", marginBottom: 8 }}>
                            Nextopay a few seconds ago
                        </Text>
                        <View style={{ elevation: 8, shadowColor: "#999", padding: 12, backgroundColor: "#fff", borderRadius: 9 }}>
                            <Text style={{ fontSize: 14, fontWeight: "300", color: "#5B2D8F" }}>
                                Vikesh Kumar, I can surely help you with your concern.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View>
                <View style={styles.balance_check}>
                    <Text style={{ fontSize: 14, fontWeight: "300", color: "#000" }}>
                        How to check balance?
                    </Text>
                    <Entypo name="chevron-right" size={25} color={COLORS.pink} />
                </View>

                <View style={styles.balance_check}>
                    <Text style={{ fontSize: 14, fontWeight: "300", color: "#000" }}>
                        Issue with the received plan benefits
                    </Text>
                    <Entypo name="chevron-right" size={25} color={COLORS.pink} />
                </View>

                <View style={styles.balance_check}>
                    <Text style={{ fontSize: 14, fontWeight: "300", color: "#000" }}>
                        Plan benefits not applied
                    </Text>
                    <Entypo name="chevron-right" size={25} color={COLORS.pink} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    rowEnd: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: "100%", padding: 24
    },
    balance_check: {
        borderBottomColor: "#D9D9D9", borderBottomWidth: 1, width: "100%", height: 66, padding: 20, backgroundColor: "#fff",
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    }
})