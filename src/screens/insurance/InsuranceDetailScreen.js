import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { LastPayComponentPart } from '../broadband/SelectedBroadbandScreen'
import { commonStyles } from '../../utils/styles'
import Confirm_button from '../../components/Confirm_button'

export default function InsuranceDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("Life insurance Corporation (LIC)", navigation)}

            <ScrollView>
                <View style={{ padding: 16 }}>
                    <InsuranceInputComponent
                        pNumberPlaceholder='Policy Number'
                        policyNumberVal="Policy Number"
                        pNumberText="Please enter valid Policy Number"
                        emailPlaceholder="Email ID"
                        emailValue="Email ID"
                        emailText="Please enter valid Email Id . You will receive the receipt there."
                    />

                    <LastPayComponentPart />
                </View>
            </ScrollView>

            <Confirm_button
                onPress={() => { }}
            />
        </>
    )
}

const InsuranceInputComponent = ({ pNumberPlaceholder, pNumberText, policyNumberVal, emailPlaceholder, emailValue, emailText }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <TextInput
                placeholder={pNumberPlaceholder}
                placeholderTextColor="#85949F"
                defaultValue={policyNumberVal}
                style={{ ...commonStyles.fs14_500, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 4, padding: 0 }}
            />

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8, marginBottom: 15 }}>
                {pNumberText}
            </Text>

            <TextInput
                placeholder={emailPlaceholder}
                placeholderTextColor="#85949F"
                defaultValue={emailValue}
                style={{ ...commonStyles.fs14_500, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 4, padding: 0 }}
            />

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8 }}>
                {emailText}
            </Text>
        </View>
    );
}