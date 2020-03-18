import React from 'react';
import { View, Button, StyleSheet , Text} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ButtonGroup = ({name}) => {
    return(
        <View style={styles.groupStyle}>
            <Feather name=""/>
            <Text>{name}</Text>
            {/* <Button
                title="Plan"
            />
            <Button
                title="Tasks"
            />
            <Button
                title="Timesheet"
            />
            <Button
                title="Member"
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    groupStyle:{
        height:30,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // backgroundColor:'white'
    }
});

export default ButtonGroup;