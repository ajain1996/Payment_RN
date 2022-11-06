import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES } from '../utils/theme'
import { commonStyles } from '../utils/styles'

export default function Custom_confirm_buttom({ onPress }) {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ width: "100%", height: 52, backgroundColor: "#000", ...commonStyles.centerStyles }}>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Confirm</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    confirmBtnStyle: {
        width: 400, height: 52,
        backgroundColor: COLORS.pink,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
})