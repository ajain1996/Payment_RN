import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme'

export default function profile_header() {
    return (
        <View style={{ width: '100%', height: 54, backgroundColor: COLORS.lightPink, justifyContent: "center", paddingHorizontal: 20 }} />
    )
}