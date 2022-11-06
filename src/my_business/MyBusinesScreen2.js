import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import custom_header from '../components/custom_header'
import { commonStyles } from '../utils/styles'
import { SelectedCustomCheckbox } from '../components/CustomCheckbox'
import { SIZES } from '../utils/theme'
import BankDetails from './BankDetails'
import BusinessDetails from './BusinessDetails'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Custom_details, { Filled_bank_details } from './Custom_details'
import PersonalDetails from './PersonalDetails'
import { BackBtn } from '../utils/imageManager'
import SvgUri from '../utils/Svg';

export default function MyBusinesScreen2({ navigation }) {

    const [panNumber, setPanNumber] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [category, setCategory] = useState("");

    const [IFSCCode, setIFSCCode] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    const [adharCardName, setAdharCardName] = useState("");
    const [adharCardNumber, setAdharCardNumber] = useState("");

    const [isComplete, setIsComplete] = useState({
        businessDetails: true, bankDetails: false, personalDetails: false,
    });

    const [isGreen, setIsGreen] = useState({
        businessIsGreen: false, bankIsGreen: false, personalIsGreen: false,
    });

    return (
        <View>
            {custom_header("Introducing", navigation)}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <View style={{ ...commonStyles.customCard, height: SIZES.height - 90 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { }}>
                                <SvgUri width="14" height="14" source={BackBtn} />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>Register your business details</Text>
                        </View>

                        <View style={{ paddingHorizontal: 12 }}>
                            <View style={{ ...commonStyles.row, marginVertical: 16 }}>
                                <View>
                                    {!isGreen.businessIsGreen
                                        ? <SelectedCustomCheckbox
                                            isChecked={isComplete.businessDetails}
                                            width={40} height={40}
                                            callback={() => { }}
                                        />
                                        : <AntDesign name='checkcircleo' size={40} color="#057A10" />}
                                    <Text style={{ ...commonStyles.fs10_400, marginTop: 5 }}>{"Business\nDetails"}</Text>
                                </View>
                                <View>
                                    {!isGreen.bankIsGreen
                                        ? <SelectedCustomCheckbox
                                            isChecked={isComplete.bankDetails}
                                            width={40} height={40}
                                            callback={() => { }}
                                        />
                                        : <AntDesign name='checkcircleo' size={40} color="#057A10" />}
                                    <Text style={{ ...commonStyles.fs10_400, marginTop: 5 }}>{"Bank\nDetails"}</Text>
                                </View>
                                <View>
                                    {!isGreen.personalIsGreen
                                        ? <SelectedCustomCheckbox
                                            isChecked={isComplete.personalDetails}
                                            width={40} height={40}
                                            callback={() => { }}
                                        />
                                        : <AntDesign name='checkcircleo' size={40} color="#057A10" />}
                                    <Text style={{ ...commonStyles.fs10_400, marginTop: 5 }}>{"Personal\nDetails"}</Text>
                                </View>
                            </View>

                            {isComplete.businessDetails
                                ? <BusinessDetails
                                    panGSTOnChange={(val) => setPanNumber(val)}
                                    panNumber={panNumber}
                                    nameOnChange={(val) => setBusinessName(val)}
                                    businessName={businessName}
                                    categoryOnChange={item => {
                                        setCategory(item.value)
                                        setTimeout(() => {
                                            setIsComplete({
                                                ...isComplete,
                                                businessDetails: false, bankDetails: true, personalDetails: false,
                                            })
                                            setIsGreen({
                                                ...isGreen,
                                                businessIsGreen: true, bankIsGreen: false, personalIsGreen: false,
                                            })
                                        }, 600);
                                    }}
                                    category={category}
                                /> : <></>}
                        </View>

                        {isComplete.bankDetails
                            ? <BankDetails
                                IFSCCode={IFSCCode}
                                setIFSCCode={setIFSCCode}
                                accountNumber={accountNumber}
                                setAccountNumber={setAccountNumber}
                                businessDetails={
                                    [
                                        { name: businessName, pan: panNumber },
                                    ]
                                }
                                onSubmit={() => {
                                    setTimeout(() => {
                                        setIsComplete({
                                            ...isComplete,
                                            businessDetails: false, bankDetails: false, personalDetails: true,
                                        })
                                        setIsGreen({
                                            ...isGreen,
                                            businessIsGreen: true, bankIsGreen: true, personalIsGreen: false,
                                        })
                                    }, 600);
                                }}
                            />
                            : <></>}


                        {isComplete.personalDetails
                            ? <PersonalDetails
                                businessName={businessName}
                                panNumber={panNumber}
                                IFSCCode={IFSCCode}
                                accountNumber={accountNumber}
                                adharCardName={adharCardName}
                                setAdharCardName={setAdharCardName}
                                adharCardNumber={adharCardNumber}
                                setAdharCardNumber={setAdharCardNumber}
                                handleSubmit={() => {
                                    setTimeout(() => {
                                        setIsComplete({
                                            ...isComplete,
                                            businessDetails: false, bankDetails: false, personalDetails: false,
                                        })
                                        setIsGreen({
                                            ...isGreen,
                                            businessIsGreen: true, bankIsGreen: true, personalIsGreen: true,
                                        })
                                    }, 600);
                                }}
                            /> : <></>}

                        {!isComplete.businessDetails && !isComplete.bankDetails && !isComplete.personalDetails
                            ? <ScrollView>
                                <View style={{ marginTop: 16 }} />

                                {/* Business Details */}
                                <View style={{ ...commonStyles.row, paddingHorizontal: 14, marginBottom: 16 }}>
                                    <Text style={{ ...commonStyles.fs14_600 }}>Business Details</Text>

                                    <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                                        <AntDesign name='checkcircle' size={20} color="#057A10" />
                                        <Text style={{ ...commonStyles.fs10_400, marginLeft: 4 }}>Verified</Text>
                                    </View>
                                </View>
                                <Custom_details
                                    businessDetails={
                                        [
                                            { name: businessName, pan: panNumber },
                                        ]
                                    }
                                    address="P N F-807, G-1, Rani Sathi Nagar, Nirman Nagar Ajmer Road, Jaipur , Rajashan, 302019"
                                />
                                <View style={{ marginTop: 24 }} />

                                {/* Bank Details */}
                                <View style={{ ...commonStyles.row, paddingHorizontal: 14, marginBottom: 16 }}>
                                    <Text style={{ ...commonStyles.fs14_600 }}>Bank Details</Text>

                                    <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                                        <AntDesign name='checkcircle' size={20} color="#057A10" />
                                        <Text style={{ ...commonStyles.fs10_400, marginLeft: 4 }}>Verified</Text>
                                    </View>
                                </View>
                                <Filled_bank_details
                                    bankDetails={
                                        [
                                            { IFSC: IFSCCode, NAME: "State bank of india", ACCOUNTNUMBER: accountNumber },
                                        ]
                                    }
                                />
                                <View style={{ marginTop: 24 }} />

                                {/* Personal Details */}
                                <View style={{ ...commonStyles.row, paddingHorizontal: 14, marginBottom: 16 }}>
                                    <Text style={{ ...commonStyles.fs14_600 }}>Personal Details</Text>

                                    <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                                        <AntDesign name='checkcircle' size={20} color="#057A10" />
                                        <Text style={{ ...commonStyles.fs10_400, marginLeft: 4 }}>Verified</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 12 }} />
                                <Image
                                    source={require("../assets/images/my_business/aadhar.png")}
                                    resizeMode="contain"
                                    style={{ width: "100%", height: SIZES.width / 1.6 }}
                                />

                                <View style={{ alignItems: "center", marginVertical: 20 }}>
                                    <TouchableOpacity
                                        style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                                        onPress={() => { }}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Proceed</Text>
                                    </TouchableOpacity>
                                </View>

                            </ScrollView> : <></>}

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        ...commonStyles.fs16_700,
        marginLeft: 8,
    }
})
