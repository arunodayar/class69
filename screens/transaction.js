import React from "react";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
    };
  }

  getCameraPermissions = async (domState) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status === granted,
      domState: domState,
      scanned: false,
    });
  };

  handleBarcodeScanned = async ({ type, data }) => {
    this.setState({
      scannedData: data,
      domState: "normal",
      scanned: true,
    });
  };

  render() {
    const { domState, hasCameraPermissions, scannedData, scanned } = this.state;
    if (domState === "scanner") {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarcodeScanned}
          style={StyleSheet.absoluteFillObject}
        ></BarCodeScanner>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {hasCameraPermissions
            ? scannedData
            : "request for camera permissions"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.getCameraPermissions("scanner");
          }}
        >
          <Text style={styles.text}>scan QR code</Text>
        </TouchableOpacity>
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
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15,
  },
  buttonText: { fontSize: 24, color: "#FFFFFF" },
});
