import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

//const navigation = useNavigation();
const CreaConstrasena = ({ navigation }) => {
  return (
    <View style={style.PerfilContainer}>
      <Text> crea constraseña </Text>
      <Button
        title="Atrás"
        onPress={() => navigation.navigate("Crea tu cuenta")}
      />
      <Button title="Siguiente" onPress={() => navigation.navigate("Gustos")} />
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default CreaConstrasena;
