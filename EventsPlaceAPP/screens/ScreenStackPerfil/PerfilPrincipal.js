import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PerfilPrincipalScreen = () => {
  return (
    <View style={style.PerfilContainer}>
      <Text> Mi perfil </Text>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default PerfilPrincipalScreen;
