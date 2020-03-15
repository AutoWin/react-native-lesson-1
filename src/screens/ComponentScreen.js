import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () =>{
    const age = 23;
    return (
    <View>
        <Text style={styles.header}>Hello Soc Nau</Text>
        <Text style={styles.subTitle}>Age: {age}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    subTitle: {
        fontSize: 15
    }
});

export default ComponentScreen;