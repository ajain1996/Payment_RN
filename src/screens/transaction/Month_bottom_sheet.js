import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import { commonStyles } from '../../utils/styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { CustomCheckTickbox2 } from '../../components/CustomCheckbox';


export default function Month_bottom_sheet({ onChange, rbSheetref, title, data }) {
    return (
        <RBSheet
            ref={rbSheetref}
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
                    <Text style={{ ...commonStyles.fs14_700, color: '#000' }}>
                        {title}
                    </Text>
                    <TouchableOpacity onPress={() => { rbSheetref.current.close() }}>
                        <Entypo name="cross" size={18} color="#000000" />
                    </TouchableOpacity>
                </View>

                <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 8, marginBottom: 16 }} />

                <View style={{ paddingHorizontal: 0 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ marginVertical: 6 }} onPress={() => {
                                    onChange(item.value); rbSheetref.current.close();
                                }}>
                                    <View style={{ ...commonStyles.rowStart, alignItems: 'center' }}>
                                        <CustomCheckTickbox2
                                            callback={() => { }}
                                        />
                                        <Text style={styles.suggestedTextStyle}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginTop: 4, marginBottom: 6 }} />
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.value}
                        ListFooterComponent={
                            <View style={{ height: 80 }} />
                        }
                    />
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
        fontWeight: "400",
        marginLeft: 8
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

