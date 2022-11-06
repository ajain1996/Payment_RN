import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { RenderElectricityFrame, RenderNormalSearch } from '../electricity/ElectricityScreen'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { commonStyles } from '../../utils/styles'

export default function BroadBandScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header("Broadband", navigation)}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <RenderNormalSearch placeholder="Search by Provider" />

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        {[
                            "ACT Broadband",
                            "Airtel Broadband",
                            "Airtel Landline",
                            "4", "Alliance Broadband Services Pvt. Ltd.",
                            "Asianet Broadband",
                            "BSNL Broadband/Landline - Corporate",
                            "BSNL Broadband/Landline -Individual",
                            "Connect Broadband",
                            "Excell Broadband",
                            "Hathway Broadband",
                            "ACT Broadband",
                            "Airtel Broadband",
                            "Airtel Landline",
                            "4", "Alliance Broadband Services Pvt. Ltd.",
                            "Asianet Broadband",
                            "BSNL Broadband/Landline - Corporate",
                            "BSNL Broadband/Landline -Individual",
                            "Connect Broadband",
                            "Excell Broadband",
                            "Hathway Broadband"].map((item, index) => {
                                return (
                                    <View key={index} >
                                        <RenderBroadbandFrame
                                            item={item}
                                            onPress={() => { navigation.navigate("SelectedBroadbandScreen2") }}
                                        />
                                    </View>
                                );
                            })}
                    </View>
                </View>

                <View style={{ height: 62 }} />
            </ScrollView>
        </View>
    )
}

export const RenderBroadbandFrame = ({ item, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ ...commonStyles.rowStart, alignItems: "center", height: 60 }}
            onPress={onPress}
        >
            <Image
                source={require("../../assets/images/airtel_logo2.png")}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
            />
            <View style={{ ...styles.textBlockStyle }}>
                <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textBlockStyle: {
        marginLeft: 8,
        borderBottomColor: "#dcdcdc",
        borderBottomWidth: 1,
        width: "85%", height: 42
    }
})
