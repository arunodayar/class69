import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./screens/transaction";
import TransactionScreen from "./screens/transaction";
import BottomTabNavigator from "./components/bottomTabNavigator";
import React from "react";

export default class App extends React.Component {
  render() {
    return <BottomTabNavigator />;
  }
}
