import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Custom_details from './Custom_details'

export default function BankDetails({ IFSCCode, setIFSCCode, accountNumber, setAccountNumber, onSubmit, businessDetails }) {
    console.log("businessDetails", businessDetails)
    return (
        <View>
            <View style={{ ...commonStyles.row, paddingHorizontal: 14, marginBottom: 20 }}>
                <Text style={{ ...commonStyles.fs14_600 }}>Business Details</Text>

                <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                    <AntDesign name='checkcircle' size={20} color="#057A10" />
                    <Text style={{ ...commonStyles.fs10_400, marginLeft: 4 }}>Verified</Text>
                </View>
            </View>

            <Custom_details
                businessDetails={businessDetails}
                address="P N F-807, G-1, Rani Sathi Nagar, Nirman Nagar Ajmer Road, Jaipur , Rajashan, 302019"
            />

            <Text style={{ ...commonStyles.fs14_600, marginLeft: 8, marginTop: 36 }}>Bank Details</Text>

            <View style={{ marginTop: 18, paddingHorizontal: 8 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>IFSC Code*</Text>
                <TextInput
                    placeholder="e.g.: SBIN0001111"
                    placeholderTextColor="#85949F"
                    defaultValue={IFSCCode}
                    onChangeText={(val) => { setIFSCCode(val) }}
                    style={{ ...commonStyles.fs14_400, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0, marginBottom: 5 }}
                />
                {IFSCCode.length !== 0
                    ? <Text style={{ ...commonStyles.fs14_400, color: "#057A10", alignSelf: 'flex-end' }}>
                        BRANCH- JAIPUR YPS MANSAROVER
                    </Text>
                    : <></>}
            </View>

            <View style={{ marginTop: 18, paddingHorizontal: 8 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>Bank Account Number</Text>
                <TextInput
                    placeholder="Enter Business Bank Account Number"
                    placeholderTextColor="#85949F"
                    defaultValue={accountNumber}
                    onChangeText={(val) => { setAccountNumber(val); onSubmit() }}
                    style={{ ...commonStyles.fs14_400, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0, marginBottom: 5 }}
                />
            </View>
        </View>
    )
}