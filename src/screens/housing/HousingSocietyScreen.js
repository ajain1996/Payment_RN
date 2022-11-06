import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import see_all_screen_header from '../see_all/see_all_screen_header'
import { commonStyles } from '../../utils/styles'
import { dropdownStyles } from '../../utils/dropdownStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RBSheet from 'react-native-raw-bottom-sheet'
import Entypo from 'react-native-vector-icons/Entypo'

const data = [];

export default function HousingSocietyScreen({ navigation }) {

    const [state, setState] = useState("Rajhasthan");
    const stateRBRef = useRef(null);

    const [city, setCity] = useState("Select City");
    const cityRBRef = useRef(null);

    return (
        <View>
            {see_all_screen_header("Housing Society", navigation)}

            <View style={{ paddingHorizontal: 16 }}>
                <View style={[commonStyles.customCard, { marginTop: 20 }]}>
                    <Text style={{ ...commonStyles.fs14_400, color: "#000" }}>Select State and City</Text>

                    <RenderDropdownComponent
                        value={state}
                        heading="State"
                        onPress={() => { stateRBRef.current.open(); }}
                    />
                    <StateBottomSheet
                        stateRBRef={stateRBRef}
                        onChange={text => {
                            setState(text);
                        }}
                    />

                    <RenderDropdownComponent
                        value={city}
                        heading=""
                        onPress={() => { cityRBRef.current.open(); }}
                    />
                    <CityBottomSheet
                        cityRBRef={cityRBRef}
                        onChange={text => {
                            setCity(text);
                        }}
                    />

                    <View style={{ alignItems: "center", marginTop: 24 }}>
                        <TouchableOpacity
                            style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                            onPress={() => { navigation.navigate("HousingSocietyProvider") }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const RenderDropdownComponent = ({ heading, value, onPress }) => {
    return (
        <View style={{ marginTop: 12 }}>
            {heading.length !== 0
                ? <Text style={{ ...commonStyles.fs10_400, color: "#000", marginTop: 8 }}>{heading}</Text>
                : <View style={{ marginTop: 8 }} />}
            <TouchableOpacity style={{ marginTop: 0, ...dropdownStyles.dropdown }} onPress={onPress} activeOpacity={0.8}>
                {value.length !== 0 ? (
                    <View style={{ position: 'absolute', top: 4, left: 0 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#555' }}>
                            {value}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}
                <View style={{ position: "absolute", right: -8 }}>
                    <MaterialIcons name='arrow-drop-down' size={32} color="#85949F" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const StateBottomSheet = ({ onChange, stateRBRef }) => {
    return (
        <RBSheet
            ref={stateRBRef}
            height={350}
            openDuration={250}
            closeOnDragDown={true}
            animationType="fade"
            customStyles={{
                container: {
                    padding: 20,
                    borderRadius: 20
                },
                draggableIcon: {
                    backgroundColor: "#555",
                    width: 0
                }
            }}>
            <View>
                <View style={{ ...commonStyles.row, marginTop: -20 }}>
                    <Text style={{ ...commonStyles.fs16_700, color: '#000' }}>
                        {'Select State'}
                    </Text>
                    <TouchableOpacity onPress={() => { stateRBRef.current.close() }}>
                        <Entypo name="cross" size={18} color="#000000" />
                    </TouchableOpacity>
                </View>

                <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 8, marginBottom: 16 }} />

                <View style={{ paddingHorizontal: 0 }}>
                    {[
                        'M.P',
                        'U.P',
                        'J&K',
                        'A.P',
                    ].map((data, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => {
                                onChange(data); stateRBRef.current.close();
                            }}>
                                <Text style={styles.suggestedTextStyle}>
                                    {data}
                                </Text>
                                <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 4, marginBottom: 6 }} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </RBSheet>
    );
}

const CityBottomSheet = ({ onChange, cityRBRef }) => {
    return (
        <RBSheet
            ref={cityRBRef}
            height={350}
            openDuration={250}
            closeOnDragDown={true}
            animationType="fade"
            customStyles={{
                container: {
                    padding: 20,
                    borderRadius: 20
                },
                draggableIcon: {
                    backgroundColor: "#555",
                    width: 0
                }
            }}>
            <View>
                <View style={{ ...commonStyles.row, marginTop: -20 }}>
                    <Text style={{ ...commonStyles.fs14_400, color: '#000' }}>
                        {'Select City'}
                    </Text>
                    <TouchableOpacity onPress={() => { cityRBRef.current.close() }}>
                        <Entypo name="cross" size={18} color="#000000" />
                    </TouchableOpacity>
                </View>

                <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 8, marginBottom: 16 }} />

                <View style={{ paddingHorizontal: 0 }}>
                    {[
                        'City one',
                        'City two',
                        'City three',
                        'City four',
                    ].map((data, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => {
                                onChange(data); cityRBRef.current.close();
                            }}>
                                <Text style={styles.suggestedTextStyle}>
                                    {data}
                                </Text>
                                <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 4, marginBottom: 6 }} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </RBSheet>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        height: 52,
        elevation: 8,
        shadowColor: '#999',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerWrapper2: {
        width: 17,
        height: 17,
        borderWidth: 2,
        borderColor: '#5B2D8F',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    container: {
        backgroundColor: 'white',
        marginTop: 25,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 22,
        top: -11,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#999',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#999',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 0,
    },
    genderBtnStyle: {
        width: '32%',
        height: 44,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityWrapper: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        marginTop: 10,
    },
    searchInputStyle: {
        height: 38,
        fontSize: 14,
        color: '#999',
        marginLeft: 6,
        marginTop: 2,
        width: '88%',
        fontWeight: "400",
        lineHeight: 20
    },
    suggestedTextStyle: {
        fontSize: 14,
        color: '#000',
        marginTop: 16,
        fontWeight: "400",
        lineHeight: 16.94,
    },
    mumbaiTextStyle: {
        fontSize: 14,
        color: '#700CB3',
        lineHeight: 16.94,
        fontWeight: "500",
    },
    suggestedText: {
        fontSize: 16,
        color: '#222222',
        fontWeight: "400",
        lineHeight: 19.36,
    },
    nextBtnStyle: {
        width: "100%", height: 46,
        backgroundColor: "#700CB3",
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    }
});

