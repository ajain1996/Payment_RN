import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme'
import { commonStyles } from '../../utils/styles'
import { LastPayComponentPart } from './SelectedBroadbandScreen'
import { ViewSample } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import Confirm_button from '../../components/Confirm_button'

export default function SelectedBroadbandScreen2({ navigation }) {
    return (
        <>
            {custom_header("ACT Broadband", navigation)}

            <ScrollView showsVerticalScrollIndicator={false} style={{ height: "100%", width: "100%" }}>
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
                        placeholder='Account No./username'
                        subText="Please enter a valid Account No. or user"
                        value=""
                        onChangeText={() => { }}
                    />

                    <LastPayComponentPart text="" note={true} />

                </View>
            </ScrollView>
            <Confirm_button
                onPress={() => { navigation.navigate("PayDTHScreen") }}
            />
        </>
    )
}

export const ElectricityInputScreen = ({ placeholder, subText, value, rest }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#85949F"
                value={value}
                style={{ ...commonStyles.fs14_500, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 8 }}
                {...rest}
            />

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8 }}>
                {subText}
            </Text>
        </View>
    );
}
