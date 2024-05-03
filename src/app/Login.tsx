import React from "react";
import { Image, StyleSheet, View } from "react-native";
import InputLogin from "../components/ComponentLogin";

export default function Login() {


  return (
    <View style={styles.component}>
      <Image style={styles.logo}
        source={require("../../assets/img/logo.png")} />

      <InputLogin></InputLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "#FFFFFF",
  },
  input: {
    marginLeft: 50,
    marginRight: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 70,
  },
});
