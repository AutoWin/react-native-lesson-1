import React from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => console.log("aaa")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },

    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex :1
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }

});

export default SearchBar;