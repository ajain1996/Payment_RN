import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../utils/theme'
import { commonStyles } from '../utils/styles'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CustomCheckbox({ title, callback, width, height, alreadyChecked }) {
    const [isChecked, setIsChecked] = useState(alreadyChecked ? true : false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback(!isChecked)
    }

    return (
        <View style={{ ...commonStyles.rowStart }}>
            <TouchableOpacity
                style={{
                    ...styles.checkBox,
                    width: width ? width : 24,
                    height: height ? height : 24
                }}
                onPress={checkBoxOnPress}
            >
                {isChecked ? <View style={{
                    ...styles.isCheckedStyle,
                    width: width ? width - 11 : 14,
                    height: height ? height - 11 : 14
                }} /> : <></>}
            </TouchableOpacity>
        </View>
    )
}


export function CustomCheckTickbox({ title, callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    return (
        <View style={{ ...commonStyles.rowStart }}>
            <TouchableOpacity onPress={checkBoxOnPress} style={{
                ...styles.checkBox,
                backgroundColor: isChecked ? "#057A10" : "#fff",
                borderWidth: isChecked ? 0 : 1.6
            }}>
                {isChecked ? <AntDesign name='check' color="#fff" size={16} /> : <></>}
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
}



export function CustomCheckTickbox2({ title, color, callback, alreadyChecked }) {
    const [isChecked, setIsChecked] = useState(alreadyChecked ? true : false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    return (
        <View style={{ ...commonStyles.rowStart }}>
            <TouchableOpacity onPress={checkBoxOnPress} style={{
                ...styles.checkBox2,
                backgroundColor: isChecked ? color ? color : "#057A10" : "#fff",
                borderWidth: isChecked ? 0 : 1.6
            }}>
                {isChecked ? <AntDesign name='check' color="#fff" size={16} /> : <></>}
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
}


export function SelectedCustomCheckbox({ isChecked, callback, width, height }) {

    const checkBoxOnPress = () => {
        callback(!isChecked)
    }

    return (
        <View style={{ ...commonStyles.rowStart }}>
            <TouchableOpacity
                style={{
                    ...styles.checkBox,
                    width: width ? width : 24,
                    height: height ? height : 24
                }}
                onPress={checkBoxOnPress}
            >
                {isChecked ? <View style={{
                    ...styles.isCheckedStyle,
                    width: width ? width - 11 : 14,
                    height: height ? height - 11 : 14
                }} /> : <></>}
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    checkBox: {
        width: 24, height: 24,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    checkBox2: {
        width: 20, height: 20,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    isCheckedStyle: {
        width: 14, height: 14,
        backgroundColor: COLORS.pink,
        borderRadius: 100,
    }
})