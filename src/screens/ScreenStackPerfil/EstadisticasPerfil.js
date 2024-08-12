import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EstadisticasScreen = () => {
  return (
    <View style={style.PerfilContainer}>
      <Text> Estadisticas perfil </Text>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default EstadisticasScreen;
