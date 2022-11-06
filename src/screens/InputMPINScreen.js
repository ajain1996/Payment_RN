import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomInputSecurity from '../components/CustomInputSecurity';
import custom_header from '../components/custom_header';
import { commonStyles } from '../utils/styles';
import { COLORS, SIZES } from '../utils/theme';

export default function InputMPINScreen({ navigation }) {

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>

      <StatusBar backgroundColor={COLORS.lightPink} barStyle="dark-content" />
      {custom_header("Set MPIN", navigation)}

      <View style={{ backgroundColor: '#fff', paddingVertical: 15 }}>
        <View style={{ alignItems: 'center', height: SIZES.height / 1.34 }}>
          <CustomInputSecurity navigation={navigation} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

})
