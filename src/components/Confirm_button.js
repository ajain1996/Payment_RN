import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/styles'
import { COLORS } from '../utils/theme'

export default function Confirm_button({ onPress }) {
    return (
        <View style={{ margin: 12 }}>
            <TouchableOpacity style={{ ...styles.btnWrapper }}
                onPress={onPress} activeOpacity={0.9}
            >
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnWrapper: {
        width: "100%", height: 54,
        backgroundColor: COLORS.pink,
        ...commonStyles.centerStyles,
        borderRadius: 8
    }
})