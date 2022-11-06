import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import SvgUri from '../../utils/Svg';
import { COLORS } from '../../utils/theme';

import {
  Mobile,
  DTH,
  Electricity
} from '../../utils/imageManager';

export default function Recommended_services({ navigation }) {
  return (
    <View style={styles.servicesWrapper}>
      <Text
        style={{ fontSize: 16, color: '#000', fontWeight: '800', marginTop: 8, marginLeft: 9 }}>
        Recommended Services
      </Text>

      <View style={styles.servicesWrapper2}>

        {
          [{
            icon: "https://firebasestorage.googleapis.com/v0/b/nextopay.appspot.com/o/dashboard.png?alt=media&token=20b2ddc9-465e-446c-b459-1432667e27dd",
            svg: false,
            text: 'See All',
            navigateScreen: 'SeeallScreen',
          }, {
            icon: Mobile,
            svg: true,
            text: 'Mobile',
            navigateScreen: 'RechargeScreen',
          },
          {
            icon: DTH,
            svg: true,
            text: 'DTH',
            navigateScreen: 'DTHProviderScreen',
          },
          {
            icon: Electricity,
            svg: true,
            text: 'Electricity',
            navigateScreen: 'ElectricityScreen',
          }].map((item, index) => {
            return (
              <View key={index}>
                <SingleService
                  svg={item.svg}
                  imgUrl={item.icon}
                  text={item.text}
                  onPress={() => { navigation.navigate(item?.navigateScreen) }}
                />
              </View>
            )
          })
        }
      </View>
    </View>
  );
}

export const SingleService = ({ text, imgUrl, onPress, svg }) => {
  return svg ? (
    <TouchableHighlight
      onPress={onPress} activeOpacity={0.9} underlayColor="#f7f8f9"
      style={{ paddingHorizontal: 12, paddingVertical: 5, marginTop: -12 }}
    >
      <View style={{ alignItems: "center" }}>
        <View style={styles.singleServiceWrapper}>
          <SvgUri width="100%" height="35" source={imgUrl} />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: '#85949F',
            marginTop: 10,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight
      onPress={onPress} activeOpacity={0.9} underlayColor="#f7f8f9"
      style={{ paddingHorizontal: 10, paddingVertical: 5, marginTop: -12 }}
    >
      <View style={{ alignItems: 'center' }}>
        <View style={styles.singleServiceWrapper}>
          <Image
            source={{ uri: imgUrl }}
            resizeMode="contain"
            style={{ width: 35, height: 35, tintColor: '#fff' }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: '#85949F',
            marginTop: 10,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  servicesWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 18,
    borderRadius: 8,
    elevation: 8,
    shadowColor: '#999',
    backgroundColor: '#fff',
  },
  servicesWrapper2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  singleServiceWrapper: {
    width: 66,
    height: 66,
    backgroundColor: COLORS.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
