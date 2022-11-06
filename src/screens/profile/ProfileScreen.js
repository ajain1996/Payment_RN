import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground, Switch } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import profile_header from './profile_header'
import { COLORS, SIZES } from '../../utils/theme'
import { commonStyles } from '../../utils/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MPINChangeBottomSheet from './MPINChangeBottomSheet'
import SetMPINBottomSheet from './SetMPINBottomSheet'
import { Wallet, VirtualAccount } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import { getUserProfilePostAPI } from '../../utils/API'
import { NextopayContext } from '../../context/NextopayContext'

export default function ProfileScreen({ navigation }) {
    const { userToken } = useContext(NextopayContext);

    const mpinRbRef = useRef(null);
    const setMpinRbRef = useRef(null);
    const [optResetTimer, setOptResetTimer] = useState(false)
    const [userProfileData, setUserProfileData] = useState([]);

    useEffect(() => {
        getUserProfilePostAPI(userToken, (response) => {
            if (response !== null) {
                setUserProfileData(response.Data[0])
            }
            console.log("response: ", response.Data[0])
        })
    }, [])


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', height: '100%', backgroundColor: '#FBF8FF' }}
            contentContainerStyle={{ alignItems: 'center' }}
        >
            {profile_header()}

            {renderProfilePicBox(userProfileData)}

            {renderPersonalDetails(navigation, userProfileData)}

            {renderPaymentMethods()}

            {renderPaymentSettings()}

            <View style={{ paddingHorizontal: 16 }}>
                {renderSwitchSections("Notifications", "notifications-outline")}
                {renderProfileSections(
                    "Bill Notifications",
                    "receipt-outline",
                    () => {
                        setMpinRbRef.current.open();
                    }
                )}
                {renderProfileSections("About Nextopay", "pricetags-outline")}
                {renderProfileSections(
                    "Change MPIN",
                    "key-outline",
                    () => {
                        mpinRbRef.current.open();
                        setOptResetTimer(true)
                    }
                )}
                {renderProfileSections("Logout", "log-in-outline")}
            </View>

            <MPINChangeBottomSheet mpinRbRef={mpinRbRef} optResetTimer={optResetTimer} />
            <SetMPINBottomSheet setMpinRbRef={setMpinRbRef} mpinChangeSubmit={() => {
                mpinRbRef.current.close()
                setMpinRbRef.current.open()
            }} />

            <View style={{ height: 80 }} />
        </ScrollView>
    )
}


const renderProfilePicBox = (userProfileData) => {
    return (
        <View style={{ marginVertical: 12 }}>
            <View style={styles.profilePicWrapper}>
                {userProfileData?.profile_photo === null ? <Image
                    source={require("../../assets/images/user.png")}
                    resizeMode="contain"
                    style={{ width: 95, height: 95 }}
                /> : <Image
                    source={{ uri: userProfileData?.profile_photo }}
                    resizeMode="contain"
                    style={{ width: 95, height: 95 }}
                />}
            </View>
            <View style={styles.profileCameraWrapper}>
                <Feather name="camera" size={25} color="#000" />
            </View>
        </View>
    );
}


const renderPersonalDetails = (navigation, userProfileData) => {
    return (
        <View style={styles.personalDetailsWrapper}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: '#000', fontWeight: '700', marginRight: 8 }}>Personal Details</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("EditProfileScreen") }}>
                            <Feather name="edit-2" size={16} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 13, color: '#000', fontWeight: '600' }}>
                        {userProfileData?.name === null ? "User Name" : userProfileData?.name}
                    </Text>
                    <Text style={{ fontSize: 11, color: '#999' }}>
                        {userProfileData?.mobile === null ? "919876543210" : userProfileData?.mobile}
                    </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require("../../assets/images/qr_code.png")}
                        resizeMode="contain"
                        style={{ width: 65, height: 65 }}
                    />
                    <Text style={{ fontSize: 13, color: '#000', fontWeight: '600' }}>My QR</Text>
                </View>

            </View>

        </View>
    );
}


const renderPaymentMethods = () => {

    const renderDebitCard = (title, text) => {
        return (
            <View>
                <Image
                    source={require("../../assets/images/debit-card-bg.png")}
                    resizeMode="contain"
                    style={{ width: SIZES.width / 2.35, height: 140 }}
                />
                <View style={{ position: 'absolute', top: "22%", left: 10 }}>
                    <Text style={{ fontSize: 13, color: '#000' }}>{title}</Text>
                    <Text style={{ fontSize: 12, color: COLORS.pink, marginTop: 8 }}>{text}</Text>
                    <TouchableOpacity style={styles.cvvbtn}>
                        <Text style={{ fontSize: 11, color: '#000' }}>CVV</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.personalDetailsWrapper}>
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Payment Methods</Text>
            <Text style={{ fontSize: 11, color: '#999', marginTop: 4 }}>Bank Account</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {renderDebitCard("Debit Card", "XXX   XXX   3 8 4")}
                {renderDebitCard("UPI", "Gayandeep@ybl")}
            </View>
        </View>
    );
}


const renderPaymentSettings = () => {

    const renderPayment = (svg_img, title, amount) => {
        return (
            <ImageBackground
                source={require("../../assets/images/dashed-border-bg.png")} resizeMode="contain"
                style={{ width: SIZES.width / 2.35, height: 140, justifyContent: 'center', alignItems: 'center' }}
            >
                <SvgUri width="50" height="50" source={svg_img} />
                <Text style={{ fontSize: 13, color: '#999', marginTop: 6 }}>{title}</Text>
                <Text style={{ fontSize: 13, color: '#999', marginTop: 4 }}>₹  {amount}</Text>
            </ImageBackground>
        );
    }
    return (
        <View style={styles.personalDetailsWrapper}>
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Payment Settings</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                {renderPayment(
                    Wallet,
                    "Nextopay wallet",
                    "10"
                )}
                {renderPayment(
                    VirtualAccount,
                    "Virtual Account",
                    "50"
                )}
            </View>
        </View>
    );
}


const renderProfileSections = (title, icon, onPress) => {
    return (
        <TouchableOpacity style={[commonStyles.customCard, { width: SIZES.width - 20, marginTop: 16 }]}
            onPress={onPress} activeOpacity={0.9}
        >
            <View style={[commonStyles.row]}>
                <View style={commonStyles.rowStart}>
                    <Ionicons name={icon} size={25} color="#000" />
                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700', marginLeft: 8 }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const renderSwitchSections = (title, icon) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = async (val) => {
        setIsEnabled(previousState => !previousState)
    };

    return (
        <View style={[commonStyles.customCard, { width: SIZES.width - 20, marginTop: 16 }]}>
            <View style={[commonStyles.row]}>
                <View style={commonStyles.rowStart}>
                    <Ionicons name={icon} size={25} color="#000" />
                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700', marginLeft: 8 }}>{title}</Text>
                </View>
                <Switch
                    trackColor={{ false: COLORS.lightGray2, true: "#ECDBFF" }}
                    thumbColor={isEnabled ? COLORS.pink : COLORS.greyText}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    profilePicWrapper: {
        width: 140, height: 140,
        borderRadius: 100,
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileCameraWrapper: {
        width: 36, height: 36,
        borderRadius: 100,
        elevation: 8, shadowColor: '#999',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0, right: 5,
    },
    personalDetailsWrapper: {
        elevation: 4,
        shadowColor: '#999',
        borderRadius: 8,
        width: SIZES.width - 20,
        padding: 16,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 8,
    },
    cvvbtn: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 30,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})
