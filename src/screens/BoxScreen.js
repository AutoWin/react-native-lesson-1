import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        // justifyContent: 'space-around'
        // flexDirection: 'column',
        // alignItems: 'stretch'
    },
    textOneStyle: {
        height: 50,
        width:50,
        backgroundColor: 'red',
        marginLeft: 10
        // alignSelf: 'flex-start'
        // borderWidth: 3,
        // borderColor: 'red',
        // flex: 4,
        // alignSelf: 'flex-start'
    },
    textTwoStyle: {
        height: 50,
        width:50,
        backgroundColor: 'green',
        // margin: 'left'
        // borderWidth: 3,
        // borderColor: 'red',
        position: 'absolute',
        // fontSize: 18,
        marginTop: 50,
        marginLeft: 100
        // left: 0,
        // right:0,
        // bottom:0,
        // ...StyleSheet.absoluteFillObject
        // flex: 4,
        // alignSelf: 'flex-end'
    },
    textThreeStyle: {
        height: 50,
        width:50,
        backgroundColor: 'purple',
        marginLeft: 200
        // alignSelf: 'flex-end'
        // borderWidth: 3,
        // borderColor: 'red',
        // top:10.
        // flex: 4,
        // alignSelf: 'center'
    }

});

export default BoxScreen;