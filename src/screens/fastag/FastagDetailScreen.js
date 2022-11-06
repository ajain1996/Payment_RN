import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import Confirm_button from '../../components/Confirm_button'

export default function FastagDetailScreen({ navigation }) {
    return (
        <>
            {custom_header("Airtel Payments Bank FASTag", navigation)}

            <ScrollView style={{ padding: 16 }}>
                <FastagInputComponent
                    placeholder='Vehicle Register Number'
                    value="Vehicle Register Number"
                    subText="Please enter valid Vehicle Register Number"
                />
            </ScrollView>
            <Confirm_button
                onPress={() => { }}
            />
        </>
    )
}

const FastagInputComponent = ({ placeholder, subText, value }) => {
    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
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