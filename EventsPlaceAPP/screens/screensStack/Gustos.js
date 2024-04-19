import React, { useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgLogo from "../../assets/LogoSVG";
import OpcionesSeleccion from "../../constants/OpcionesSeleccion";
import { Picker } from "react-native-web";

const Gustos = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5FE" }}>
      <SafeAreaView style={{ backgroundColor: "#F4F5FE" }}>
        <ScrollView style={style.PerfilContainer}>
          <View style={style.HeaderContainer}>
            <View style={{ flex: 2 }}>
              <Boton
                theme="BackCheckron"
                label="Atras"
                onPress={() => navigation.navigate("Crea tu cuenta")}
              />
            </View>
            <View style={{ width: 60, alignContent: "flex-end" }}>
              <Boton theme={"botonSubRay"} label={"Saltar"} />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <SvgLogo theme="ProgressBar" progress="15" />
          </View>
          <Text style={style.RegisterTex}>Gustos y servicios</Text>
          <Text style={style.ContainerTex}>
            Selecciona algunos eventos a los cuales te gusta ir o participar
          </Text>
          <View style={style.ContainerCategorias}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
              }}
            >
              {OpcionesSeleccion.map((Selec) => (
                <Seleccion key={Selec.name} label={Selec.label} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

//const selectedButton = ["0", "hola"];

const Seleccion = ({ key, label }) => {
  const [selectedeButton, setSelectedButton] = useState([]);
  function Escoger(id) {
    setSelectedButton(selectedeButton + id);
  }
  return (
    <View>
      <Boton
        id={key}
        theme={"Seleccionable"}
        label={label}
        onPress={() => Escoger(label)}
      />
      <Text>hola {selectedeButton}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  ScrollView: {
    backgroundColor: "#E9EAFE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
  },
  PerfilContainer: {
    backgroundColor: "#E9EAFE",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  HeaderContainer: {
    marginTop: 20,
    height: 25,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    //borderWidth: 1,
  },
  RegisterTex: {
    marginTop: 15,
    height: 29,
    //borderWidth: 1,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    color: "#515EC0",
    letterSpacing: 0.01,
  },
  ContainerTex: {
    marginTop: 10,
    //borderWidth: 1,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#0F172A",
    letterSpacing: 0.0044,
  },
  ContainerCategorias: {
    backgroundColor: "#FBFBFE",
    width: "100%",
    marginVertical: 10,
    borderRadius: 12,
  },
});

export default Gustos;
