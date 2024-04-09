import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EditarPerfilScreen = () => {
  return (
    <View style={style.PerfilContainer}>
      <Text> Editar perfil </Text>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default EditarPerfilScreen;
