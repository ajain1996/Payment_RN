import { View, Text, ScrollView, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS, SIZES } from '../../utils/theme'
import { commonStyles } from '../../utils/styles'
import { Dropdown } from 'react-native-element-dropdown'
import { dropdownStyles } from '../../utils/dropdownStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ViewSample } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import Confirm_button from '../../components/Confirm_button'

export default function GasDetailScreen({ navigation }) {

    const [bookingValue, setBookingValue] = useState("");
    const [contextNo, setContextNo] = useState("7594983482");

    return (
        <>
            {custom_header("Indane Gas (Indian Oil)", navigation)}

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

                    <SelectBookingMethod
                        placeholder='Registered Contact Number'
                        subText="Please enter a valid Account No. or user"
                        inputValue={contextNo}
                        bookingValue={bookingValue}
                        onChange={(res) => { setBookingValue(res) }}
                        inputOnChange={(res) => { setContextNo(res) }}
                    />

                    <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                        <Text style={{ ...commonStyles.fs10_400, color: "#000", margin: 8, lineHeight: 15 }}>
                            Please Note:  Nextopay only handle the payment processing while booking a gas cylinder. Delivery of the cylinder and any Issues around it will be handled by your distributor or the agency.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Confirm_button
                onPress={() => { navigation.navigate("PayGasScreen") }}
            />
        </>
    )
}

const data = [
    { label: 'Registered Contact Number 1', value: 'Registered Contact Number 1' },
    { label: 'Registered Contact Number 2', value: 'Registered Contact Number 2' },
    { label: 'Registered Contact Number 3', value: 'Registered Contact Number 3' },
    { label: 'Registered Contact Number 4', value: 'Registered Contact Number 4' },
    { label: 'Registered Contact Number 5', value: 'Registered Contact Number 5' },
    { label: 'Registered Contact Number 6', value: 'Registered Contact Number 6' },
    { label: 'Registered Contact Number 7', value: 'Registered Contact Number 7' },
    { label: 'Registered Contact Number 8', value: 'Registered Contact Number 8' },
];

export const SelectBookingMethod = ({ placeholder, subText, inputValue, onChange, inputOnChange, bookingValue }) => {

    return (
        <View style={[commonStyles.customCard, { marginTop: 20 }]}>
            <Text style={{ ...commonStyles.fs14_600 }}>Select booking Method</Text>

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 10 }}>Booking using</Text>

            <View>
                <View>
                    <Dropdown
                        style={[dropdownStyles.dropdown]}
                        placeholderStyle={dropdownStyles.placeholderStyle}
                        iconStyle={dropdownStyles.iconStyle}
                        data={data}
                        maxHeight={200}
                        placeholder={bookingValue.length !== 0 ? '' : 'Registered Contact Number'}
                        value={bookingValue.length !== 0 ? '' : bookingValue}
                        renderItem={item => {
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: 42,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16
                                    }}>
                                    <Text style={{ fontSize: 14, color: '#555' }}>
                                        {item.label}
                                    </Text>
                                </View>
                            );
                        }}
                        renderRightIcon={() => { }}
                        onChange={item => {
                            onChange(item.value);
                        }}
                    />
                    <View style={{ position: "absolute", right: -8 }}>
                        <MaterialIcons name='arrow-drop-down' size={32} color="#85949F" />
                    </View>
                </View>

                {bookingValue.length !== 0 ? (
                    <View style={{ position: 'absolute', top: 4, left: 0 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#555' }}>
                            {bookingValue}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}
            </View>

            <View>
                <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 25 }}>Registered Contact Number</Text>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#85949F"
                    defaultValue={inputValue}
                    maxLength={10}
                    style={{
                        ...commonStyles.fs14_500, borderBottomColor: "#85949F", borderBottomWidth: 1,
                        paddingBottom: 4, paddingHorizontal: 0, paddingVertical: 0
                    }}
                    keyboardType="numeric"
                    onChange={item => {
                        inputOnChange(item.value);
                    }}
                />
                <View style={{ position: "absolute", right: 0, bottom: 8 }}>
                    <MaterialIcons name='perm-contact-cal' size={26} color="#85949F" />
                </View>
            </View>

            <Text style={{ ...commonStyles.fs10_400, color: "#85949F", marginTop: 8, marginBottom: 24 }}>
                {subText}
            </Text>
        </View>
    );
}

