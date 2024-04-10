import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import IconSVG from "../../assets/LogoSVG";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const PerfilPrincipalScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.PerfilContainer}>
          <View style={style.HeaderContainer}>
            <Boton
              theme="BackCheckron"
              label="Atras"
              onPress={() => navigation.navigate("Wall")}
            />
          </View>
          <View style={style.Titulo}>
            <Text style={style.Titulo}> Mi perfil </Text>
          </View>
          {DatosClientePrueba.map((DCliente) => (
            <View style={style.TarjetaPerfil} key={DCliente.UserName}>
              <View style={style.CabeceraTarjeta}>
                <View style={style.imagenPrincipal}>
                  <IconSVG theme={"FotoGenerica"} />
                </View>

                <View style={style.NombrePerfil}>
                  <Text style={style.Titulo}>{DCliente.UserName}</Text>
                </View>
                <View style={{ marginTop: 40, paddingEnd: 1 }}>
                  <Boton
                    theme="EditarPerfil"
                    style={{ width: 24, height: 24 }}
                    onPress={() => navigation.navigate("Editar perfil")}
                  />
                </View>
              </View>
              <View>
                <Text style={style.Subtitulos}>Calificacion</Text>
                <Text style={{ marginLeft: 5, marginTop: 5, color: "#626264" }}>
                  Estrellas {DCliente.Calificacion}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//const FotoPerfil = [require("../assets/Icon_profile.png")];

const style = StyleSheet.create({
  PerfilContainer: {
    marginTop: 0,
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
    alignItems: "center",
  },
  HeaderContainer: {
    marginTop: 20,
    width: "100%",
    height: 25,
    ////borderWidth: 1,
    //position: 'absolute',
  },
  TarjetaPerfil: {
    backgroundColor: "white",
    width: "95%",
    marginTop: 50,
    height: 200,
    display: "flex",
    flexDirection: "column",
  },
  Titulo: {
    alignContent: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#333333",
  },
  CabeceraTarjeta: {
    display: "flex",
    flexDirection: "row",
    width: "110%",
  },
  imagenPrincipal: {
    display: "flex",
    alignItems: "start",
    marginLeft: 5,
    marginTop: 15,
    width: 80,
  },
  NombrePerfil: {
    marginTop: 30,
    width: "60%",
  },
  Subtitulos: {
    marginTop: 5,
    paddingLeft: 5,
    color: "grey",
  },
});

export default PerfilPrincipalScreen;
