import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconSVG from "../../assets/LogoSVG";
import Boton from "../../components/Button";
//import Autenticar from "../../App";

const VerifyIdentity = ({ navigation }) => {
  return (
    <SafeAreaView View style={style.PerfilContainer}>
      <View style={style.Container}>
        <View style={style.Style1Container}>
          <IconSVG theme="successful" />
          <Text style={style.Text1style}>¡Estupendo!</Text>
          <Text style={style.Text2style}>
            Has completado tu registro con éxito.
          </Text>
        </View>
        <Text style={style.Text3style}>
          Ahora puedes buscar o crear eventos dentro de la plataforma
          ¡Bienvenido!
        </Text>
        <View style={style.BotonContainer}>
          <Boton
            theme="StyleBoton"
            label="Continuar"
            color="#6979F8"
            onPress={() => alert("iniciar sesion")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VerifyIdentity;

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    height: "100%",
    paddingHorizontal: 32,
    //borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    //borderWidth: 1,
    borderRadius: 16,
    elevation: 1,
    backgroundColor: "#FBFBFE",
    padding: 24,
    width: "100%",
    maxWidth: 800,
  },
  Style1Container: {
    gap: 24,
    alignItems: "center",
  },
  Text1style: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#000000",
  },
  Text2style: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    letterSpacing: 0.05,
    color: "#000000",
  },
  Text3style: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    color: "#333333",
  },
  BotonContainer: {
    width: "100%",
    height: 43,
    maxWidth: 326,
    //borderWidth: 1,
  },
});
