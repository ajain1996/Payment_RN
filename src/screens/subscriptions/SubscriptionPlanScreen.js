import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import Confirm_button from '../../components/Confirm_button'

export default function SubscriptionPlanScreen({ navigation }) {
    return (
        <>
            {custom_header("MX Player", navigation)}

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <FastagInputComponent
                    placeholder='Phone Number'
                    value="8875468392"
                    subText="Please enter your Phone Number"
                />

                <PleaseNotePart />
            </ScrollView>

            <Confirm_button
                onPress={() => { navigation.navigate("PayDTHScreen") }}
            />
        </>
    )
}

const FastagInputComponent = ({ placeholder, subText, value }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>

            <Text style={{ ...commonStyles.fs16_700, marginBottom: 8 }}>Plan Description</Text>

            <Text style={{ ...commonStyles.fs14_400, marginBottom: 8 }}>Phone Number</Text>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#85949F"
                defaultValue={value}
                style={{ ...commonStyles.fs14_500, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 4, padding: 0 }}
            />

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8, marginBottom: 9 }}>
                {subText}
            </Text>
        </View>
    );
}

export const PleaseNotePart = ({ }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <Text style={{ ...commonStyles.fs10_500, color: "#000", margin: 8, lineHeight: 15 }}>
                Please Note: your Subscription pack will be activated on the mobile number you’ve entered. After you make the payment, you use this mobile number to log in and enjoy the services on the MX player app/ website.
            </Text>
        </View>
    );
}
