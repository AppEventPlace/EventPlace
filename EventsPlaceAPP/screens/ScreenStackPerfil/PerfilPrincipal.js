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
        <View style={styles.PerfilContainer}>
          <View style={styles.HeaderContainer}>
            <Boton
              theme="BackCheckron"
              label="Atras"
              onPress={() => navigation.navigate("Wall")}
            />
          </View>
          <View style={styles.Titulo}>
            <Text style={styles.Titulo}> Mi perfil </Text>
          </View>
          {DatosClientePrueba.map((DCliente) => (
            <View style={styles.TarjetaPerfil} key={DCliente.UserName}>
              <View style={styles.CabeceraTarjeta}>
                <View style={styles.imagenPrincipal}>
                  <IconSVG theme={"FotoGenerica"} />
                </View>

                <View style={styles.NombrePerfil}>
                  <Text style={styles.Titulo}>{DCliente.UserName}</Text>
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
                <Text style={styles.Subtitulos}>Calificacion</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 5,
                    marginTop: 5,
                  }}
                >
                  <Estrellas califi={DCliente.Calificacion} />
                  <Text
                    style={{ color: "#626264", paddingLeft: 5, marginTop: -1 }}
                  >
                    &#40;{DCliente.Calificacion}&#41;
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//const FotoPerfil = [require("../assets/Icon_profile.png")];

const Estrellas = ({ califi }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", width: 75 }}>
      <IconSVG
        theme={"Calificación"}
        colEstrella={califi >= 1 ? "#141416" : "#BDBDBD"}
      />
      <IconSVG
        theme={"Calificación"}
        colEstrella={califi >= 2 ? "#141416" : "#BDBDBD"}
      />
      <IconSVG
        theme={"Calificación"}
        colEstrella={califi >= 3 ? "#141416" : "#BDBDBD"}
      />
      <IconSVG
        theme={"Calificación"}
        colEstrella={califi >= 4 ? "#141416" : "#BDBDBD"}
      />
      <IconSVG
        theme={"Calificación"}
        colEstrella={califi >= 5 ? "#141416" : "#BDBDBD"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
