import { View, Text, ImageBackground, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { COLORS, SIZES } from '../../utils/theme'

export default function PoliciesScreen({ navigation }) {
    return (
        <View>
            {custom_header("Policies", navigation)}

            <View style={{ width: SIZES.width, height: SIZES.height }}>
                <ImageBackground
                    source={require("../../assets/images/home-bg2.png")}
                    resizeMode="cover"
                    style={{ width: SIZES.width, height: SIZES.height }}
                >
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        contentContainerStyle={{ backgroundColor: "transparent", paddingHorizontal: 12, paddingBottom: 20 }}
                        renderItem={({ item }) => {
                            return (
                                <SinglePolicyBlock
                                    isbg={true} navigation={navigation}
                                    icon={require("../../assets/images/policy_img.png")}
                                />
                            );
                        }}
                    />
                </ImageBackground>
            </View>
        </View>
    )
}


const SinglePolicyBlock = ({ title, icon, time, navigation }) => {
    return (
        <TouchableOpacity style={[styles.singlepolicyWrapper]}
            onPress={() => { navigation.navigate("QR_Screen") }}
        >
            <View style={[styles.policyImg]}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{ width: 12, height: 12, tintColor: "#fff" }}
                />

            </View>
            <Text style={styles.policyTitle}>About Nextopay</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    singlepolicyWrapper: {
        width: "100%",
        padding: 10,
        backgroundColor: "#fff",
        elevation: 12,
        shadowColor: "#999",
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 14,
        alignItems: "center"
    },
    notoficationIcon: {
        width: 54, height: 54,
        backgroundColor: COLORS.pink,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    policyTitle: {
        fontSize: 16,
        color: COLORS.greyText,
        fontWeight: '500',
        marginLeft: 10,
        lineHeight: 24
    },
    policyImg: {
        width: 25, height: 25,
        backgroundColor: COLORS.pink,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    }
})
