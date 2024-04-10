import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import IconSVG from "../../assets/LogoSVG";

const PerfilPrincipalScreen = () => {
  return (
    <View style={style.PerfilContainer}>
      <View style={style.Titulo}>
        <Text style={style.Titulo}> Mi perfil </Text>
      </View>
      <View style={style.TarjetaPerfil}>
        <View style={style.imagenPrincipal}>
          <IconSVG theme={"FotoGenerica"} />
        </View>
      </View>
    </View>
  );
};
//const FotoPerfil = [require("../assets/Icon_profile.png")];

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
    alignItems: "center",
  },
  TarjetaPerfil: {
    backgroundColor: "white",
    width: "95%",
    marginTop: 50,
    height: 200,
  },
  Titulo: {
    alignContent: "center",

    marginTop: 10,
    fontWeight: "bold",
  },
  imagenPrincipal: {
    marginLeft: 5,
    marginTop: 15,
  },
});

export default PerfilPrincipalScreen;
