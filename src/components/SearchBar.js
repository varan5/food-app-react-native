import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 22,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar