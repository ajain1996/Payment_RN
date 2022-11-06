import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { commonStyles } from '../../utils/styles'
import { COLORS } from '../../utils/theme'

export default function ElectricityScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: COLORS.lightPink }}>
            {see_all_screen_header('Electricity', navigation)}

            <ScrollView showsVerticalScrollIndicator={false} style={{ height: "100%" }}>
                <View style={{ padding: 16 }}>
                    <RenderNormalSearch placeholder='Search by biller' />

                    {["Biller in Rajasthan", "All Billers"].map((itemData, index) => {
                        return (
                            <View style={[commonStyles.customCard, { marginTop: 20 }]} key={index}>
                                <Text style={{ ...commonStyles.fs16_500, marginBottom: 8 }}>{itemData}</Text>

                                {[1, 2, 3, 4, 5].map((item, index) => {
                                    return (
                                        <View key={index} >
                                            <RenderElectricityFrame
                                                item={item}
                                                onPress={() => { navigation.navigate("ElectricityDetailScreen") }}
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

export const RenderNormalSearch = ({ placeholder }) => {
    return (
        <View style={{ ...commonStyles.commonElevation, height: 49, borderRadius: 9 }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#000"
                style={{ fontSize: 14, fontWeight: "400", paddingHorizontal: 24 }}
            />
        </View>
    );
}

export const RenderElectricityFrame = ({ item, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ ...commonStyles.rowStart, alignItems: "center", height: 60 }}
            onPress={onPress}
        >
            <Image
                source={require("../../assets/images/electricity/sun-direct.png")}
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
