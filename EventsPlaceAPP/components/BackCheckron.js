import React from "react";
import { View, StyleSheet } from "react-native";
import Boton from "./Button";

const BackCheckron = ({ navigation }) => {
  return (
    <View style={style.HeaderContainer}>
      <Boton
        theme="BackCheckron"
        label="Atras"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  HeaderContainer: {
    marginTop: 20,
    height: 25,
    width: "100%",
    //borderWidth: 1,
  },
});
export default BackCheckron;
