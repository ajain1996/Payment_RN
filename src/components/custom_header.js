import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/theme'
import { BackBtn } from '../utils/imageManager'
import SvgUri from '../utils/Svg';
import Entypo from 'react-native-vector-icons/Entypo';

export default function custom_header(title, navigation, right_icon, svg) {
    return (
        <View style={styles.headerWrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableHighlight
                    style={styles.nextBtn}
                    underlayColor={COLORS.pink}
                    onPress={() => { navigation.goBack() }}>
                    <Entypo name="chevron-left" size={25} color={COLORS.pink} />
                </TouchableHighlight>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>

            {svg
                ? <SvgUri width="18" height="18" source={right_icon} />
                : <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={right_icon}
                />}
            {/*  */}
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        width: '100%', height: 60,
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
    nextBtn: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
})
