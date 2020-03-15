import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
    {'name': "My best friend 1", age: 20},
    {'name': "My best friend 2", age: 25},
    {'name': "My best friend 3", age: 24},
    {'name': "My best friend 4", age: 19},
    {'name': "My best friend 5", age: 22},
    {'name': "My best friend 6", age: 25},
    {'name': "My best friend 7", age: 29},
    ];
    return (
    <FlatList
    // horizontal={true}
// showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem = {({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>;
        }
        }
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ListScreen;