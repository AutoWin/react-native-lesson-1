import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>Your name is {password}</Text>
            {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;