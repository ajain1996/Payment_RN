import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { setMPINPostRequest } from '../utils/API';
import { commonStyles } from '../utils/styles';
import { SIZES, COLORS } from '../utils/theme';
import Custom_Loader from './Custom_Loader';
import { NextopayContext } from '../context/NextopayContext';
import Error_Component from './Error_Component';

export default function CustomInputSecurity({ navigation }) {
    const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const [MPINList, setMPINList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const { phoneNumber, bearerToken, userToken } = useContext(NextopayContext);

    const renderAmountComponent = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {MPINList.map((data, index) => {
                    return (
                        <Text style={{ fontSize: 18, color: "#000", marginHorizontal: 10 }} key={index}>{data.item}</Text>
                    );
                })}
            </View>
        );
    };

    console.log("userToken, bearerToken: ", userToken, bearerToken)

    const handleSubmit = (finalMPIN) => {
        console.log("\n\n \n\n finalMPINNNNNNNNNNNNNNNNNNNNNNNNNNNNN: ", MPINList.length)
        if (MPINList?.length === 0) {
            setError('The MPIN field is required.');
            Toast.show({
                type: 'error',
                text1: 'Alert!',
                text2: "The MPIN field is required.",
            });
        } else if (MPINList?.length < 6) {
            setError('MPIN cannot be less then 6');
            Toast.show({
                type: 'error',
                text1: 'Alert!',
                text2: "MPIN cannot be less then 6",
            });
        } else {
            setLoading(true);
            setMPINPostRequest(userToken, bearerToken, finalMPIN, response => {
                setLoading(false);
                console.log('Main File setMPINPostRequest', response);
                if (response !== null) {
                    if (response.status === 'True') {
                        Toast.show({
                            type: 'success',
                            text1: 'Success',
                            text2: response.message,
                        });
                        navigation.navigate('EditProfileScreen');
                    } else if (response['status'] === 'failed') {
                        Toast.show({
                            type: 'error',
                            text1: 'Alert!',
                            text2: response.message,
                        });
                    }
                }
            });
        }
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ height: "14%" }} />
            <View style={{ ...styles.mpinText }}>
                {renderAmountComponent()}
            </View>
            <Error_Component text={error} />

            <View style={{ height: 30 }} />
            <FlatList
                data={numbersList}
                numColumns={3}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({ item, index, separators }) => {
                    return (
                        <TouchableHighlight
                            underlayColor={'#eee'}
                            key={item.key}
                            style={{
                                width: SIZES.width / 3.3,
                                height: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                            }}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}
                            onPress={() => {
                                if (MPINList.length < 6) {
                                    setMPINList(previousMovies => [...previousMovies, { item }]);
                                    // callBack(MPINList);
                                    setError("")
                                }
                            }}>
                            <Text style={{ fontSize: 20, color: "#000", fontWeight: "500" }}>{item}</Text>
                        </TouchableHighlight>
                    );
                }}
            />

            <View style={{ margin: 12, paddingHorizontal: 24, marginBottom: -40 }}>
                <TouchableOpacity style={{ ...styles.btnWrapper }} activeOpacity={0.9} onPress={() => {
                    var mpinValue = []
                    MPINList.map((dataVal) => {
                        mpinValue.push(dataVal.item)
                    })

                    var finalMPIN = "";
                    finalMPIN = `${mpinValue[0]}${mpinValue[1]}${mpinValue[2]}${mpinValue[3]}${mpinValue[4]}${mpinValue[5]}`
                    console.log('finalMPIN: ', finalMPIN)
                    handleSubmit(finalMPIN)
                }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>Reset</Text>
                </TouchableOpacity>
            </View>

            <Custom_Loader loading={loading} />
            {/* <Panel_Component loading={true} /> */}

        </View>
    );
}

const styles = StyleSheet.create({
    mpinText: {
        backgroundColor: "#f7f8f9",
        width: 220, height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9,
    },
    btnWrapper: {
        width: SIZES.width / 1.2, height: 54,
        backgroundColor: COLORS.pink,
        ...commonStyles.centerStyles,
        borderRadius: 8
    }
})