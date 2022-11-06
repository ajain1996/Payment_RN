import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { RenderElectricityFrame, RenderNormalSearch } from '../electricity/ElectricityScreen'
import { commonStyles } from '../../utils/styles'

export default function WaterScreen({ navigation }) {
    return (
        <View>
            {custom_header("", navigation)}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <RenderNormalSearch placeholder="Search by Biler" />

                    {["Billers in Rajasthan", "All Billers"].map((itemData, index) => {
                        return (
                            <View style={[commonStyles.customCard, { marginTop: 20 }]} key={index}>
                                <Text style={{ ...commonStyles.fs16_500, marginBottom: 8 }}>{itemData}</Text>

                                {[1, 2, 3, 4, 5].map((item, index) => {
                                    return (
                                        <View key={index} >
                                            <RenderWaterFrame
                                                item={item}
                                                onPress={() => { navigation.navigate("WaterPHEDScreen") }}
                                            />
                                        </View>
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>

                <View style={{ height: 66 }} />
            </ScrollView>
        </View>
    )
}

export const RenderWaterFrame = ({ item, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ ...commonStyles.rowStart, alignItems: "center", height: 60 }}
            onPress={onPress}
        >
            <Image
                source={require("../../assets/images/water-logo.png")}
                resizeMode="contain"
                style={{ width: 45, height: 45 }}
            />
            <View style={{ ...styles.textBlockStyle }}>
                <Text style={{ ...commonStyles.fs14_400 }}>Ajmer Vidyut Vitran Nigam Ltd.</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textBlockStyle: {
        marginLeft: 8, borderBottomColor: "#dcdcdc", borderBottomWidth: 1, width: "85%", height: 40
    }
})
