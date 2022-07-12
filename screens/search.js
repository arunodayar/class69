import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SearchScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653d4",
  },

  text: {
    color: "#fff",
    fontSize: 30,
  },
});
