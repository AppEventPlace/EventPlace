import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
const Gustos = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5FE" }}>
      <SafeAreaView style={{ backgroundColor: "#F4F5FE" }}>
        <ScrollView style={style.PerfilContainer}>
          <View style={style.HeaderContainer}>
            <Boton
              theme="BackCheckron"
              label="Atras"
              onPress={() => navigation.navigate("Crea tu cuenta")}
            />
            <Boton theme={"primary"} label={"Omitir"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  ScrollView: {
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
  },
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  HeaderContainer: {
    marginTop: 20,
    height: 25,
    display: "flex",
    flexDirection: "row",
    //borderWidth: 1,
  },
});

export default Gustos;
