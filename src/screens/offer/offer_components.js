import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/theme";
import { UpDownArrow, ChevronDown, Filter } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export const preference_and_filter_box = () => {
    return (
        <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
            <View style={[styles.mainWrapper]}>
                <View style={[styles.preferenceWrapper]}>
                    <SvgUri width="35" height="35" source={UpDownArrow} />
                    <Text style={[styles.textStyle, { marginLeft: 10, marginTop: -4 }]}>Preference</Text>
                </View>
                <View style={[styles.filterWrapper]}>
                    <SvgUri width="26" height="26" source={Filter} />
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={[styles.textStyle, { marginRight: 6, marginTop: -2 }]}>Filter</Text>
                        <SvgUri width="16" height="16" source={ChevronDown} />
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: "100%",
        padding: 12,
        backgroundColor: "#fff",
        elevation: 14,
        shadowColor: "#333",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    preferenceWrapper: {
        width: "48%",
        elevation: 10,
        shadowColor: "#333",
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 46,
    },
    filterWrapper: {
        width: "48%",
        elevation: 10,
        shadowColor: "#333",
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 46,
    },
    textStyle: {
        fontSize: 14,
        fontWeight: "400",
        color: COLORS.lightGray2,
        marginLeft: 4,
    }
});