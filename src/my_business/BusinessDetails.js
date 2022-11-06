import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { commonStyles } from '../utils/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { dropdownStyles } from '../utils/dropdownStyles';
import RBSheet from 'react-native-raw-bottom-sheet';

const data = [
    { label: 'Registered Contact Number 1', value: 'Registered Contact Number 1' },
    { label: 'Registered Contact Number 2', value: 'Registered Contact Number 2' },
    { label: 'Registered Contact Number 3', value: 'Registered Contact Number 3' },
    { label: 'Registered Contact Number 4', value: 'Registered Contact Number 4' },
    { label: 'Registered Contact Number 5', value: 'Registered Contact Number 5' },
    { label: 'Registered Contact Number 6', value: 'Registered Contact Number 6' },
    { label: 'Registered Contact Number 7', value: 'Registered Contact Number 7' },
    { label: 'Registered Contact Number 8', value: 'Registered Contact Number 8' },
];

export default function BusinessDetails({ panGSTOnChange, panNumber, nameOnChange, businessName, categoryOnChange, category }) {

    const categoryRef = useRef(null);
    const [category2, setCategory2] = useState("");

    return (
        <View>
            <Text style={{ ...commonStyles.fs14_600 }}>Business Details</Text>

            <View style={{ marginTop: 18 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>GSTIN*/PAN</Text>
                <TextInput
                    placeholder="PAN Number"
                    placeholderTextColor="#85949F"
                    defaultValue={panNumber}
                    onChangeText={panGSTOnChange}
                    style={{ ...commonStyles.fs14_400, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0 }}
                />
                {panNumber.length !== 0
                    ? <Text style={{ ...commonStyles.fs14_400, color: "#057A10" }}>Name on pan card - VIKESH KUMAR</Text>
                    : <></>}
            </View>

            <View style={{ marginTop: 18 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>Enter your business name</Text>
                <TextInput
                    placeholder="Enter Business Bank  Account"
                    placeholderTextColor="#85949F"
                    defaultValue={businessName}
                    onChangeText={nameOnChange}
                    style={{ ...commonStyles.fs14_400, borderBottomColor: "#85949F", borderBottomWidth: 1, paddingBottom: 5, padding: 0 }}
                />
            </View>

            <View style={{ marginTop: 18 }}>
                <Text style={{ ...commonStyles.fs14_400 }}>Category</Text>
                <TouchableOpacity style={{ ...commonStyles.row }} activeOpacity={0.7}
                    onPress={() => { categoryRef.current.open() }}
                >
                    <View style={[dropdownStyles.dropdown, { width: "100%", paddingHorizontal: 0, marginTop: 5 }]}>
                        <Text style={{ fontSize: 14, color: category2.length !== 0 ? "#000" : '#555' }}>
                            {category2.length !== 0 ? category2 : "Choose category"}
                        </Text>
                    </View>
                    <View style={{ position: "absolute", right: -8 }}>
                        <MaterialIcons name='arrow-drop-down' size={32} color="#85949F" />
                    </View>
                </TouchableOpacity>
            </View>

            <RBSheet
                ref={categoryRef}
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
                            {'Choose Category'}
                        </Text>
                        <TouchableOpacity onPress={() => { categoryRef.current.close() }}>
                            <Entypo name="cross" size={18} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 8, marginBottom: 16 }} />

                    <View style={{ paddingHorizontal: 0 }}>
                        {[
                            'Cat 1',
                            'Cat 2',
                            'Cat 3',
                            'Cat 4',
                        ].map((data, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    categoryRef.current.close(); setCategory2(data); categoryOnChange(data);
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
        </View>
    )
}

const styles = StyleSheet.create({
    suggestedTextStyle: {
        fontSize: 14,
        color: '#000',
        marginTop: 16,
        fontWeight: "400",
        lineHeight: 16.94,
    },
})


{/* <View style={{ marginTop: 18 }}>
    <Text style={{ ...commonStyles.fs14_400 }}>Category</Text>
    <View>
        <Dropdown
            style={[dropdownStyles.dropdown]}
            placeholderStyle={dropdownStyles.placeholderStyle}
            iconStyle={dropdownStyles.iconStyle}
            data={data}
            maxHeight={200}
            placeholder={category.length !== 0 ? '' : 'Registered Contact Number'}
            value={category.length !== 0 ? '' : category}
            renderItem={item => {
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 42,
                            justifyContent: 'center',
                            paddingHorizontal: 16
                        }}>
                        <Text style={{ fontSize: 14, color: '#555' }}>
                            {item.label}
                        </Text>
                    </View>
                );
            }}
            renderRightIcon={() => { }}
            onChange={categoryOnChange}
        />
        <View style={{ position: "absolute", right: -8 }}>
            <MaterialIcons name='arrow-drop-down' size={32} color="#85949F" />
        </View>
    </View>

    {category.length !== 0 ? (
        <View style={{ position: 'absolute', bottom: 4, left: 0 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#555' }}>
                {category}
            </Text>
        </View>
    ) : (
        <></>
    )}
</View> */}