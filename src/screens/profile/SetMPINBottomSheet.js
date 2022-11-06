import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import Entypo from 'react-native-vector-icons/Entypo'
import { commonStyles } from '../../utils/styles'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS } from '../../utils/theme'

const CELL_COUNT = 6;

function SetMPINBottomSheet({ setMpinRbRef, optResetTimer }) {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [mpin, setMpin] = useState('');
    const ref2 = useBlurOnFulfill({ mpin, cellCount: CELL_COUNT });
    const [props2, getCellOnLayoutHandler2] = useClearByFocusCell({
        mpin,
        setMpin,
    });

    return (
        <RBSheet
            ref={setMpinRbRef}
            height={380}
            openDuration={250}
            closeOnDragDown={true}
            animationType="fade"
            customStyles={{
                container: {
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                draggableIcon: {
                    backgroundColor: "#555",
                    width: 0
                }
            }}>
            <View>
                <View style={{ ...commonStyles.row, marginTop: -20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: '#000' }}>
                        Set Mpin
                    </Text>
                    <TouchableOpacity onPress={() => { setMpinRbRef.current.close() }}>
                        <Entypo name="cross" size={24} color="#000000" />
                    </TouchableOpacity>
                </View>

                <View style={{ ...commonStyles.rowStart, marginBottom: 40 }}>
                    <Text style={{ ...commonStyles.fs10_400, color: '#85949F', lineHeight: 14, marginVertical: 6 }}>
                        use this Mpin for every transaction secure.
                    </Text>
                </View>

                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}
                        >
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />

                <View style={{ alignItems: "center", marginVertical: 50 }}>
                    <View style={{ width: 226, alignItems: "flex-start" }}>
                        <Text style={{ ...commonStyles.fs10_400, color: '#85949F', marginVertical: 6, textAlign: "left" }}>
                            Reset Mpin
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[commonStyles.commonBtnStyle]} activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>Set Mpin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        marginStart: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    subTitle: {
        textAlign: 'left',
        fontSize: 16,
        marginStart: 20,
        marginTop: 10,
        color: '#000',
    },
    codeFieldRoot: {
        marginTop: 16,
        width: '100%',
    },
    cellRoot: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#333',
        borderRadius: 12,
        backgroundColor: "#fff"
    },
    cellText: {
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },

    button: {
        marginTop: 20,
    },
    resendCode: {
        color: COLORS.primary,
    },
    resendCodeText: {
        color: '#000',
    },
    resendCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default React.memo(SetMPINBottomSheet)
