import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/styles'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Error_Component({ text }) {
    return (
        text.length === 0
            ? <></>
            : <View style={{ ...commonStyles.rowStart, alignItems: 'center', marginTop: 4 }}>
                <AntDesign name='exclamationcircleo' color="red" size={14} />
                <Text style={{ fontSize: 12, color: "red", marginLeft: 4 }}>{text}</Text>
            </View>
    )
}