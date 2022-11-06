import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import custom_header from '../../components/custom_header'
import { commonStyles } from '../../utils/styles'
import { COLORS, SIZES } from '../../utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function BillNotifications({ navigation }) {
    return (
        <View>
            {custom_header("Bill Notifications", navigation)}

            <View style={{ padding: 16 }}>
                <View style={[commonStyles.customCard, { paddingHorizontal: 14, height: SIZES.height - 150 }]}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginTop: 12, marginBottom: 8 }}>
                                    <View style={{ ...commonStyles.row }}>
                                        <View style={{ ...commonStyles.rowStart }}>
                                            <Image
                                                source={require("../../assets/images/user_profile.png")}
                                                resizeMode="contain"
                                                style={{ width: 45, height: 45, borderRadius: 100 }}
                                            />
                                            <View style={{ marginLeft: 6, width: SIZES.width / 1.6 }}>
                                                <Text style={{ ...commonStyles.fs14_400 }}>Ajmer Vidyut Vitran Nigam Ltd.</Text>
                                                <Text style={{ ...commonStyles.fs10_400 }}>Arlene McCoy</Text>
                                            </View>
                                        </View>
                                        <AntDesign name='delete' size={20} color="#000" style={{ marginRight: 12 }} />
                                    </View>
                                    <View style={{ width: "86%", height: 1, backgroundColor: "#dcdcdc", alignSelf: "flex-end" }} />
                                </View>
                            );
                        }}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
        </View>
    )
}