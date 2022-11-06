import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme'
import { commonStyles } from '../../utils/styles'
import { BackBtn } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function Rechange_success_header({ navigation, title, time }) {
    return (
        <View style={styles.headerWrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <SvgUri width="18" height="18" source={BackBtn} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <Text style={styles.headerTime}>{time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        width: '100%', height: 80,
        backgroundColor: COLORS.lightPink,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: COLORS.pink
    },
    headerTitle: {
        fontSize: 21,
        color: COLORS.pink,
        fontWeight: '600',
        marginLeft: 20,
        lineHeight: 31.5
    },
    headerTime: {
        ...commonStyles.fs14_400,
        color: COLORS.pink,
        marginLeft: 20,
    }
})
