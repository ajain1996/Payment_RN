import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Custom_details, { Filled_bank_details } from './Custom_details'
import { commonStyles } from '../utils/styles'

export default function PersonalDetails({
    businessName,
    panNumber,
    IFSCCode,
    accountNumber,
    adharCardName,
    setAdharCardName,
    adharCardNumber,
    setAdharCardNumber,
    handleSubmit
}) {
    return (
        <View>
            <Text style={{ ...commonStyles.fs14_600, marginLeft: 5 }}>Business Details</Text>
            <View style={{ marginTop: 5 }} />
            <Custom_details
                businessDetails={
                    [
                        { name: businessName, pan: panNumber },
                    ]
                }
                address="P N F-807, G-1, Rani Sathi Nagar, Nirman Nagar Ajmer Road, Jaipur , Rajashan, 302019"
            />
            <View style={{ marginTop: 16 }} />

            <Text style={{ ...commonStyles.fs14_600, marginLeft: 5 }}>Bank Details</Text>
            <View style={{ marginTop: 5 }} />
            <Filled_bank_details
                bankDetails={
                    [
                        { IFSC: IFSCCode, NAME: "State bank of india", ACCOUNTNUMBER: accountNumber },
                    ]
                }
            />
            <View style={{ marginTop: 18, paddingHorizontal: 8 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>Name*</Text>
                <TextInput
                    placeholder="Enter your name as on your aadhar card"
                    placeholderTextColor="#85949F"
                    defaultValue={adharCardName}
                    onChangeText={(val) => { setAdharCardName(val) }}
                    style={{ ...commonStyles.fs14_400, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0, marginBottom: 5 }}
                />
            </View>

            <View style={{ marginTop: 18, paddingHorizontal: 8 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>Adhar No*</Text>
                <TextInput
                    placeholder="e.g: 1212-1212-1212"
                    placeholderTextColor="#85949F"
                    defaultValue={adharCardNumber}
                    onChangeText={(val) => { setAdharCardNumber(val); handleSubmit() }}
                    style={{ ...commonStyles.fs14_400, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0, marginBottom: 5 }}
                />
            </View>
        </View>
    )
}