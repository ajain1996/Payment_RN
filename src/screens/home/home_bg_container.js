import { View, Text, Image } from 'react-native'
import React from 'react'
import { HomeBg } from '../../utils/imageManager'
import SvgUri from '../../utils/Svg';

export default function Home_bg_container() {
    return (
        <View>
            <SvgUri width="100%" height="240" source={HomeBg} />
            <View style={{ flexDirection: 'row', position: 'absolute', top: 20, right: 20 }}>
                <Text style={{ fontSize: 16, color: "#000", fontWeight: '800' }}>₹ </Text>
                <View style={{ marginLeft: 0 }}>
                    <Text style={{ fontSize: 16, color: "#000", fontWeight: '800' }}>1000 Assure cashback</Text>
                    <Text style={{ fontSize: 9, color: "#000", fontWeight: '500', marginLeft: 3, marginTop: -3 }}>
                        Refer nextopay app to your friends
                    </Text>
                </View>
            </View>
        </View>
    )
}