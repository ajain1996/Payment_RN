import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import transaction_header from './transaction_header'
import { commonStyles } from '../../utils/styles'
import { COLORS, SIZES } from '../../utils/theme'
import Month_bottom_sheet from './Month_bottom_sheet'
import { ChevronDown } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';
import custom_header from '../../components/custom_header'


const monthData = [
    { name: "January", value: "jan" },
    { name: "February", value: "feb" },
    { name: "March", value: "mar" },
    { name: "April", value: "apr" },
    { name: "May", value: "may" },
    { name: "June", value: "jun" },
    { name: "July", value: "jul" },
    { name: "August", value: "aug" },
]

const categoriesData = [
    { name: "All", value: "jan" },
    { name: "Recharge & Bill Payments", value: "feb" },
    { name: "UPI Transfer & Mpay", value: "mar" },
    { name: "Merchant Payments", value: "apr" },
    { name: "Money Added to Wallet", value: "may" },
    { name: "UPI Transfer & Mpay", value: "mar2" },
]

const filtersData = [
    { name: "All", value: "jan" },
    { name: "Recharge & Bill Payments", value: "feb" },
    { name: "UPI Transfer & Mpay", value: "mar" },
    { name: "Merchant Payments", value: "apr" },
    { name: "Money Added to Wallet", value: "may" },
    { name: "UPI Transfer & Mpay", value: "mar2" },
]

export default function TransactionScreen({ navigation }) {

    const monthRef = useRef(null);
    const categoriesRef = useRef(null);
    const filtersRef = useRef(null);

    return (
        <View>
            {custom_header('History', navigation)}

            <View style={{ padding: 16, paddingBottom: "48%" }}>
                <View style={[commonStyles.customCard, { paddingHorizontal: 14, height: "100%" }]}>
                    <RenderFilters
                        monthCallback={() => { monthRef.current.open(); }}
                        categoriesCallback={() => { categoriesRef.current.open(); }}
                        filtersCallback={() => { filtersRef.current.open(); }}
                    />

                    <Month_bottom_sheet
                        rbSheetref={monthRef}
                        title="Select Month"
                        data={monthData}
                        onChange={(res) => { }}
                    />

                    <Month_bottom_sheet
                        rbSheetref={categoriesRef}
                        title="Select Categories"
                        data={filtersData}
                        onChange={(res) => { }}
                    />

                    <Month_bottom_sheet
                        rbSheetref={filtersRef}
                        title="Select Filters"
                        data={filtersData}
                        onChange={(res) => { }}
                    />

                    <Text />

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                                return (
                                    <View key={index}>
                                        <RenderSingleTransaction item={item} />
                                    </View>
                                );
                            })
                        }

                        <View style={{ height: 180 }} />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const RenderFilters = ({ monthCallback, categoriesCallback, filtersCallback }) => {

    const transaction_btn = (text, callback) => {
        return (
            <TouchableOpacity style={{ ...styles.button }} onPress={callback}>
                <View style={{ ...commonStyles.row }}>
                    <Text style={{ ...commonStyles.fs12_400 }}>{text}</Text>
                    <View style={{ marginLeft: 6 }} />
                    <SvgUri width="14" height="14" source={ChevronDown} />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ ...commonStyles.row }}>
            <View style={{ ...commonStyles.rowStart }}>
                {transaction_btn("Month", monthCallback)}
                <View style={{ width: 5 }} />
                {transaction_btn("Categories", categoriesCallback)}
            </View>
            {transaction_btn("Filters", filtersCallback)}
        </View>
    );
}

export const RenderSingleTransaction = ({ item }) => {
    return (
        <View style={{ marginTop: 12, marginBottom: 8 }}>
            <View style={{ ...commonStyles.row }}>
                <View style={{ ...commonStyles.rowStart }}>
                    <Image
                        source={require("../../assets/images/user_profile.png")}
                        resizeMode="contain"
                        style={{ width: 45, height: 45, borderRadius: 100 }}
                    />
                    <View style={{ marginLeft: 6 }}>
                        <Text style={{ ...commonStyles.fs14_400 }}>Paid To</Text>
                        <Text style={{ ...commonStyles.fs10_400 }}>Arlene McCoy</Text>
                    </View>
                </View>
                <Text style={{ ...commonStyles.fs14_600 }}>₹ 10,000</Text>
            </View>
            <View style={{ ...commonStyles.row }}>
                <Text style={{ ...commonStyles.fs10_400, color: COLORS.lightGray }}>3 days ago</Text>
                <View style={{ ...commonStyles.rowStart, alignItems: "center" }}>
                    <Text style={{ ...commonStyles.fs10_400 }}>Debited From</Text>
                    <Image
                        source={require("../../assets/images/UBI.jpg")}
                        resizeMode="contain"
                        style={{ width: 45, height: 45, borderRadius: 100 }}
                    />
                </View>
            </View>
            <View style={{ width: "86%", height: 1, backgroundColor: "#dcdcdc", alignSelf: "flex-end" }} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10, height: 33, borderWidth: 1,
        borderColor: COLORS.pink,
        ...commonStyles.centerStyles, borderRadius: 9
    }
})