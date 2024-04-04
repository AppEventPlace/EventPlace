import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Gustos = ({ navigation }) => {
  return (
    <View style={style.PerfilContainer}>
      <Text> Gustos </Text>
      <Button
        title="Atrás"
        onPress={() => navigation.navigate("Crea tu contraseña")}
      />
      <Button title="Finalizar" />
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default Gustos;
