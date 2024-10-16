import React from "react";
import { StyleSheet, View } from "react-native";

import Boton from "./Button";

const RenderBotonesLogin = () => {
  return (
    <View style={styles.AnotherLoginContainer}>
      <View style={styles.AnotherLoginSubContainer}>
        <Boton theme="IconPressable" Icon="Google" color="#FFFFFF" />
      </View>
      <View style={styles.AnotherLoginSubContainer}>
        <Boton theme="IconPressable" Icon="Facebook" color="#1877F2" />
      </View>
      <View style={styles.AnotherLoginSubContainer}>
        <Boton theme="IconPressable" Icon="IOS" color="#000000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AnotherLoginContainer: {
    marginTop: 20,
    justifyContent: "center",
    width: "100%",
    maxWidth: 800, //Esto evita que tome toda la pantalla
    //borderWidth: 1,
    flexDirection: "row",
    columnGap: 12,
  },
  AnotherLoginSubContainer: {
    flex: 1,
    height: 44,
  },
});

export default RenderBotonesLogin;
