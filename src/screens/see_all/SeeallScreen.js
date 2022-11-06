import { View, FlatList } from 'react-native'
import React from 'react'
import see_all_screen_header from './see_all_screen_header'
import { SingleService } from '../home/recommended_services';
import { seeAllList } from '../../utils/seeAllList';

export default function SeeallScreen({ navigation }) {
    return (
        <View>
            {see_all_screen_header('Recharge & Bill Payments', navigation)}

            <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                <FlatList
                    data={seeAllList}
                    numColumns={4}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{ width: '25%', marginTop: 30 }}>
                                <SingleService
                                    svg={true}
                                    imgUrl={item.icon}
                                    text={item.text}
                                    onPress={() => { navigation.navigate(item?.navigateScreen) }}
                                />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.icon}
                />
            </View>
            <View style={{ height: 280 }} />
        </View>
    )
}