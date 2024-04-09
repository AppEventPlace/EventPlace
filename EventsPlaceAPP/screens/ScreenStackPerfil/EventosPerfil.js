import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EventosPerfilScreen = () => {
  return (
    <View style={style.PerfilContainer}>
      <Text> Mis eventos </Text>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default EventosPerfilScreen;
