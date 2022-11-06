import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme'
import { BackBtn } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function see_all_screen_header(title, navigation) {
    return (
        <View style={styles.headerWrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableHighlight
                    style={styles.nextBtn}
                    underlayColor={COLORS.pink}
                    onPress={() => { navigation.goBack() }}>
                    <SvgUri width="18" height="18" source={BackBtn} />
                </TouchableHighlight>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <Image
                source={require("../../assets/images/bbps.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50, borderRadius: 100 }}
            />
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
        fontSize: 18,
        color: COLORS.pink,
        fontWeight: '600',
        marginLeft: 20
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
