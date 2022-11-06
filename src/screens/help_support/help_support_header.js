import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../utils/theme';

export default function Help_support_header({ navigation }) {
    return (
        <View style={styles.headerWrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableHighlight
                    style={styles.nextBtn}
                    underlayColor={COLORS.pink}
                    onPress={() => { navigation.goBack() }}>
                    <Entypo name="chevron-left" size={25} color={COLORS.pink} />
                </TouchableHighlight>
                <Text style={styles.headerTitle}>Help</Text>
            </View>

            <View>
                <Text style={{ fontSize: 16, fontWeight: "400", color: '#5B2D8F' }}>View Tickets</Text>
                <Text style={{ fontSize: 14, fontWeight: "600", color: '#5B2D8F' }}>Change Language</Text>
            </View>
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
