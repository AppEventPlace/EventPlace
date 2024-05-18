import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackCheckron from "../../components/BackCheckron";
import ProgressBar from "./Components/ProgressStep";
import Direccionador from "../../components/Direccionador";

const Opciones = [
  {
    logo: "Key",
    label: "Información principal",
  },
  {
    logo: "Key",
    label: "Boleteria",
  },
  // Agrega más preguntas según sea necesario
];

const Resumen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F4F5FE", flex: 1 }}>
      <ScrollView style={style.PerfilContainer}>
        <BackCheckron navigation={navigation} />
        <ProgressBar step={3} />
        <View style={style.FullContainer}>
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            {Opciones.map((Opciones, index) => (
              <Direccionador
                key={index}
                logo={Opciones.logo}
                label={Opciones.label}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%", //Asegura el ancho total en el dispositivo
    height: "100%",
    paddingHorizontal: 16,
    paddingBottom: 55,
  },
  FullContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%",
    maxWidth: 800, //Esto evita que tome toda la pantalla
    alignSelf: "center",
    justifyContent: "center",
    rowGap: 32,
    paddingBottom: 20,
  },
  Info: {
    marginTop: 32,
    marginBottom: -16,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.005,
    color: "#515EC0",
  },
});

export default Resumen;
