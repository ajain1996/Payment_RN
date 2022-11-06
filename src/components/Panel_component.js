import React from 'react';
import { View } from "react-native";

export const Panel_Component = ({ loading }) => {
    return (
        loading
            ? <View style={{
                justifyContent: 'center',
                height: '100%',
                paddingBottom: 10,
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'absolute',
                top: 0, bottom: 0,
                right: 0, left: 0
            }} /> : <></>
    );
}