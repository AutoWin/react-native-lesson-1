import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      {/* <TouchableOpacity>
      <Text>Go to list Demo</Text>
    </TouchableOpacity> */}

      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Boxs')}
        title="Go to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
