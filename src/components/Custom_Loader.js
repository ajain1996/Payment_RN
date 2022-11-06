import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/theme'

export default function Custom_Loader({ loading }) {
    return (
        loading
            ? <View style={{ ...styles.loaderStyle }}>
                <ActivityIndicator size={50} color={COLORS.pink} />
            </View>
            : <></>
    )
}


const styles = StyleSheet.create({
    loaderStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '110%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
