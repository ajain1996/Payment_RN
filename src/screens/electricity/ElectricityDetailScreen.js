import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme'
import { commonStyles } from '../../utils/styles'
import { ViewSample } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function ElectricityDetailScreen({ navigation }) {

    const [electricity, setElectricity] = useState("")

    return (
        <View style={{ backgroundColor: COLORS.lightPink, width: "100%", height: "100%" }}>
            {custom_header("Ajmer Vidyut Vitran Nigam....", navigation)}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <View style={[commonStyles.customCard]}>
                        <TouchableOpacity style={{ ...commonStyles.rowStart, alignItems: "center", padding: 8 }}
                            activeOpacity={0.8}
                            onPress={() => { navigation.navigate("ElectricityPayScreen") }}
                        >
                            <SvgUri width="26" height="26" source={ViewSample} />
                            <Text style={{ ...commonStyles.fs14_400, color: COLORS.pink, marginLeft: 8 }}>View Sample Bill</Text>
                        </TouchableOpacity>
                    </View>

                    <ElectricityInputScreen
                        placeholder='K Number'
                        subText="Please enter a valid 12 digit k number"
                        value={electricity}
                        onChange={(val) => { setElectricity(val) }}
                    />

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        <Text style={{ ...commonStyles.fs10_400, color: "#000", margin: 8 }}>
                            Paying this bill allows Nextopay to fetch your current and future bills so that you can view and pay them.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export const ElectricityInputScreen = ({ placeholder, subText, value, onChange }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#85949F"
                defaultValue={value}
                onChangeText={(val) => onChange(val)}
                style={{ ...commonStyles.fs14_500, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0 }}
            />

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8 }}>
                {subText}
            </Text>
        </View>
    );
}
