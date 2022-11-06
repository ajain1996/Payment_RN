import { View, StatusBar, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Home_screen_header from './home_screen_header'
import { COLORS, SIZES } from '../../utils/theme'
import Home_bg_container from './home_bg_container'
import Recommended_services from './recommended_services'
import Recent_home_transactions from './recent_home_transactions'
import { commonStyles } from '../../utils/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HomeBG4 } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';


export default function HomeScreen({ navigation }) {

    return (
        <>
            <Home_screen_header navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%', height: SIZES.height, backgroundColor: "#fff", flexGrow: 1 }}
            >
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightPink} />
                <Home_bg_container />
                <Image
                    source={require("../../assets/images/home-bg3.png")}
                    resizeMode="cover"
                    style={{ width: "100%", height: 100, marginTop: -44 }}
                />

                <View style={{ paddingHorizontal: 16, marginTop: -56 }}>
                    <View style={{ alignItems: 'center', marginBottom: 8 }}>
                        <View style={{ width: 40, height: 4, backgroundColor: '#999', borderRadius: 100 }} />
                    </View>
                    <Recommended_services navigation={navigation} />

                    <Recent_home_transactions navigation={navigation} />

                    <View style={{ marginTop: 16 }} />
                    <SvgUri width="100%" height="163" source={HomeBG4} />

                    <View style={{ marginTop: 16 }} />
                    <View style={commonStyles.customCard}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ ...commonStyles.fs14_700 }}>Best Selling Brands</Text>

                            <TouchableOpacity>
                                <Text style={{ ...commonStyles.fs14_500, color: COLORS.pink }}>View All</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 28 }}>
                            <BestSellingBrandsBox
                                image={require("../../assets/images/google-service.png")}
                                text="Get 10% cashback"
                            />
                            <View style={{ width: 16 }} />
                            <BestSellingBrandsBox
                                image={require("../../assets/images/dominos-pizza.png")}
                                text="Flat 12% cashback"
                            />
                        </View>
                    </View>

                    <View style={[commonStyles.customCard, { marginTop: 16 }]}>
                        <View style={{ width: SIZES.width / 1.6 }}>
                            <Text style={{ ...commonStyles.fs14_700, marginBottom: 5 }}>Invite your friends to Nextopay</Text>
                            <Text style={{ ...commonStyles.fs10_400, color: COLORS.lightGray2 }}>
                                Invite your friends to Nextopay and get Rs. 100. when your friends do there frist transaction till total 10 referal.
                            </Text>

                            <View style={{ ...commonStyles.rowStart, marginTop: 9 }}>
                                <Text style={{ ...commonStyles.fs10_400, color: COLORS.lightGray2, marginRight: 4 }}>
                                    Copy your code Nq5tl
                                </Text>
                                <TouchableOpacity onPress={() => { }} style={{ width: 40, height: 40, paddingLeft: 4 }}>
                                    <MaterialCommunityIcons name="content-copy" size={15} color={COLORS.pink} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ ...commonStyles.commonBorderedRoundBtnStyle, marginTop: -8, width: 72, height: 26 }}>
                                <Text style={{ ...commonStyles.fs14_500, color: COLORS.pink, fontSize: 12 }}>Invite</Text>
                            </TouchableOpacity>
                        </View>

                        <Image
                            source={require("../../assets/images/invite_friends.png")}
                            resizeMode="contain"
                            style={{ width: 120, height: 120, position: "absolute", right: 0, bottom: 10, zIndex: -1 }}
                        />
                    </View>
                </View>

                <View style={{ height: 80 }} />
            </ScrollView>
        </>
    )
}


const BestSellingBrandsBox = ({ image, text }) => {
    return (
        <View style={[commonStyles.customCard, {
            width: SIZES.width / 2.5 - 4, paddingBottom: 4, paddingHorizontal: 8, alignItems: "center",
            elevation: 6
        }]}>
            <Image
                source={image}
                resizeMode="contain"
                style={{ width: SIZES.width / 3.6, height: SIZES.width / 3.6 }}
            />
            <View style={{ height: 12 }} />
            <Text style={{ ...commonStyles.fs14_500 }}>{text}</Text>
        </View>
    );
}