import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import custom_header from '../../components/custom_header'
import { COLORS } from '../../utils/theme'
import { User, Mail } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import Error_Component from '../../components/Error_Component'
import { updateUserPostRequest } from '../../utils/API'
import { NextopayContext } from '../../context/NextopayContext'

export default function EditProfileScreen({ navigation }) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const { phoneNumber, userToken, bearerToken } = useContext(NextopayContext);

    const handleSubmit = () => {
        console.log("Fullname: ", fullName, "\n Email: ", email)
        if (fullName.length === 0) {
            setFullNameError("Full name is the required field")
        } else if (email.length === 0) {
            setEmailError("Email is the required field")
        } else {
            updateUserPostRequest(
                phoneNumber,
                fullName,
                email,
                "", //qrcode
                "", //profile_img
                userToken,
                bearerToken,
                (response) => {
                    console.log('User Profile Edit: ', response)
                    navigation.navigate("Root")
                }
            );
        }
    }

    return (
        <View>
            {custom_header("Edit Profile", navigation)}
            <ImageBackground
                source={require("../../assets/images/home-bg2.png")}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={{ padding: 15, justifyContent: 'space-between', height: '80%', alignItems: 'center' }}>
                    <View>
                        {renderInputBox(
                            User,
                            "Full name",
                            "default",
                            (val) => {
                                setFullName(val)
                                setFullNameError("")
                            }
                        )}
                        <View style={{ marginLeft: 30 }}>
                            <Error_Component text={fullNameError} />
                        </View>
                        <Text />

                        {renderInputBox(
                            Mail,
                            "E-mail address",
                            "email-address",
                            (val) => {
                                setEmail(val)
                                setEmailError("")
                            }
                        )}
                        <View style={{ marginLeft: 30 }}>
                            <Error_Component text={emailError} />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                        <Text style={{ fontSize: 15, color: "#fff", fontWeight: '600' }}>update Changes</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const renderInputBox = (icon, placeholder, kType, onChange) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginBottom: -9 }}>
                <SvgUri width="22" height="22" source={icon} />
            </View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#999"}
                style={styles.inputStyle}
                keyboardType={kType}
                onChangeText={onChange}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: COLORS.pink,
        width: "65%", height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        width: '90%', padding: 0,
        fontSize: 14, marginLeft: 8,
        color: "#000", fontWeight: "500"
    }
})
