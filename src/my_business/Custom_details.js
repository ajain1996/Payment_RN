import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/styles'
import { COLORS } from '../utils/theme'

export default function Custom_details({ businessDetails, address }) {
    return (
        <View style={{ backgroundColor: "#5B2D8F4D", width: "98%", height: 166, borderRadius: 9, alignSelf: "center", padding: 14 }}>
            <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                <View style={{ width: 48, height: 48, borderRadius: 100, backgroundColor: "#E2CDFAF0", ...commonStyles.centerStyles }}>
                    <Text style={{ fontSize: 26, fontWeight: "600", color: "#5B2D8F" }}>N</Text>
                </View>

                <View style={{ marginLeft: 8, width: "80%" }}>
                    <Text style={{ ...commonStyles.fs14_600, color: "#5B2D8F" }} numberOfLines={1}>
                        {businessDetails[0].name}
                    </Text>
                    <Text style={{ ...commonStyles.fs10_400, color: "#5B2D8F", marginTop: 3 }}>
                        {businessDetails[0].pan}
                    </Text>
                </View>
            </View>
            <View style={{ alignSelf: "flex-end", width: "60%" }}>
                <Text style={{ ...commonStyles.fs14_400, color: "#5B2D8F", textAlign: "right", lineHeight: 20 }}>
                    {address}
                </Text>
            </View>
            <Image
                source={require("../assets/images/my_business/business_details_bg1.png")}
                resizeMode="contain"
                style={{ width: 130, height: 80, position: "absolute", top: 45, left: "22%" }}
            />
            <Image
                source={require("../assets/images/my_business/business_details_bg2.png")}
                resizeMode="contain"
                style={{ width: 100, height: 80, position: "absolute", top: 45, right: "14%" }}
            />
        </View>
    )
}


export function Filled_bank_details({ bankDetails, address }) {

    const renderRichText = (label, textData) => {
        return (
            <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ ...commonStyles.fs10_400, color: "#fff" }}>
                        {label}
                    </Text>
                    <Text style={{ ...commonStyles.fs14_600, color: "#fff", marginTop: 3 }}>
                        {textData}
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: COLORS.pink, width: "98%", height: 166, borderRadius: 9, alignSelf: "center", padding: 14, justifyContent: "space-between" }}>
            {renderRichText("Name", "Nextomart Private Limited")}

            <View style={{ ...commonStyles.row, alignItems: 'center' }}>
                {renderRichText(`Bank (IFSC: ${bankDetails.IFSC})`, bankDetails[0].NAME)}
                {renderRichText("Account Number", bankDetails[0].ACCOUNTNUMBER)}
            </View>
            <Image
                source={require("../assets/images/my_business/business_details_bg1.png")}
                resizeMode="contain"
                style={{ width: 130, height: 80, position: "absolute", top: 45, left: "22%" }}
            />
            <Image
                source={require("../assets/images/my_business/business_details_bg2.png")}
                resizeMode="contain"
                style={{ width: 100, height: 80, position: "absolute", top: 45, right: "14%" }}
            />
        </View>
    )
}


export function Filled_nextopay_account_details({ bankDetails, address }) {

    const renderRichText = (label, textData) => {
        return (
            <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ ...commonStyles.fs10_400, color: COLORS.pink }}>
                        {label}
                    </Text>
                    <Text style={{ ...commonStyles.fs14_600, color: COLORS.pink, marginTop: 3 }}>
                        {textData}
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: "#CEC0DD", width: "98%", height: 140, borderRadius: 9, alignSelf: "center", padding: 10, justifyContent: "space-between" }}>
            {renderRichText("Name", bankDetails[0].NAME)}

            <View style={{ ...commonStyles.row, alignItems: 'center' }}>
                {renderRichText(`Account Number`, bankDetails[0].ACCOUNTNUMBER)}
                {renderRichText("IFSC", bankDetails[0].IFSC)}
            </View>
            <Image
                source={require("../assets/images/UBI.jpg")}
                resizeMode="contain"
                style={{ width: 24, height: 24, position: "absolute", top: 10, right: 10 }}
            />
        </View>
    )
}
