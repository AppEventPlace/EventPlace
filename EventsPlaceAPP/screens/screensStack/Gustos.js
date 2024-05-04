import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
  Dimensions,
  FlatList,
} from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgLogo from "../../assets/LogoSVG";

import OpcionesSeleccion from "../../constants/OpcionesSeleccion";
import { Picker } from "react-native-web";
import { RadioButton } from "react-native-paper";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import ImageViewer from "../../components/ImageViewer";
import CalificacionEst from "../../components/CalificacionEst";
import CuadroEstado from "../../components/CuadroEstado";
import * as ImagePicker from "expo-image-picker";

const Gustos = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.PerfilContainer}>
            <View style={styles.HeaderContainer}>
              <View style={{ flex: 2 }}>
                <Boton
                  theme="BackCheckron"
                  label="Atras"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={{ width: 60, alignContent: "flex-end" }}>
                <Boton
                  theme={"botonSubRay"}
                  label={"Saltar"}
                  onPress={() => navigation.navigate("Successful")}
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <SvgLogo theme="ProgressBar" progress="15" />
            </View>
            <Text style={styles.RegisterTex}>Gustos y servicios</Text>
            <Text style={styles.ContainerTex}>
              Selecciona algunos eventos a los cuales te gusta ir o participar
            </Text>
            <View style={styles.ContainerSelecciones}>
              <Seleccion />
            </View>
            <View style={styles.ContainerSeleccionesRad}>
              <View>
                <SeleccionPreferencias />
              </View>
              <View>
                <ServicioEventos />
              </View>
              <View>
                <LugarEventos />
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                maxWidth: 330,
                minWidth: 320,
                alignSelf: "center",
              }}
            >
              <Boton
                theme={"Seleccionable"}
                label={"Continuar"}
                onPress={() => navigation.navigate("Successful")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

//const selectedButton = ["0", "hola"];
const PresionableSeleccion = ({ id, label }) => {
  const [Seleccionado, setSeleccionado] = useState(false);
  return (
    <View
      key={id}
      style={Seleccionado ? styles.Seleccionable2 : styles.Seleccionable1}
      //backgroundColor={Seleccionado ? "#6979F8" : "#E9EAFE"}
      //color={Seleccionado ? "#0F172A" : "#FBFBFE"}
    >
      <Pressable
        key={id}
        style={styles.button}
        //label={Selec.label}
        onPress={() => {
          //Escoger(label);
          //setSeleccionado(true);
          setSeleccionado((current) => !current);
        }}
      >
        <Text
          style={
            Seleccionado ? styles.StyleButtonLabel1 : styles.StyleButtonLabel2
          }
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

/*const Seleccionados = () => {
  const [selectedeButton, setSelectedButton] = useState([]);

  function Escoger() {
    setSelectedButton(selectedeButton.concat(id));
  }
};*/
const Seleccion = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {OpcionesSeleccion.map((Selec) => (
        <PresionableSeleccion
          key={Selec.name}
          id={Selec.name}
          label={Selec.label}
        />
      ))}
    </View>
  );
};

const SeleccionPreferencias = () => {
  const [checked, setChecked] = React.useState("Si");

  return (
    <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
      <Text style={{ color: "#0F172A", marginVertical: 10, marginLeft: 10 }}>
        ¿Te gusta crear eventos?
      </Text>
      <View
        style={{ marginHorizontal: 10, display: "flex", flexDirection: "row" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Si</Text>
          <RadioButton
            value="Si"
            status={checked === "Si" ? "checked" : "unchecked"}
            onPress={() => setChecked("Si")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>No</Text>
          <RadioButton
            value="No"
            status={checked === "No" ? "checked" : "unchecked"}
            onPress={() => setChecked("No")}
          />
        </View>
      </View>
    </View>
  );
};

const ServicioEventos = () => {
  const [checked, setChecked] = React.useState("Si");

  return (
    <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
      <Text style={{ color: "#0F172A", marginVertical: 10, marginLeft: 10 }}>
        ¿Prestas servicios para eventos?
      </Text>
      <View
        style={{ marginHorizontal: 10, display: "flex", flexDirection: "row" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Si</Text>
          <RadioButton
            value="Si"
            status={checked === "Si" ? "checked" : "unchecked"}
            onPress={() => setChecked("Si")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>No</Text>
          <RadioButton
            value="No"
            status={checked === "No" ? "checked" : "unchecked"}
            onPress={() => setChecked("No")}
          />
        </View>
      </View>
    </View>
  );
};
const LugarEventos = () => {
  const [checked, setChecked] = React.useState("Si");

  return (
    <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
      <Text style={{ color: "#0F172A", marginVertical: 10, marginLeft: 10 }}>
        ¿Cuentas con un lugar/sitio/negocio para realizar eventos?
      </Text>
      <View
        style={{ marginHorizontal: 10, display: "flex", flexDirection: "row" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Si</Text>
          <RadioButton
            value="Si"
            status={checked === "Si" ? "checked" : "unchecked"}
            onPress={() => setChecked("Si")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>No</Text>
          <RadioButton
            value="No"
            status={checked === "No" ? "checked" : "unchecked"}
            onPress={() => setChecked("No")}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: "#E9EAFE",
    paddingTop: -3,
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
    paddingHorizontal: 16,
  },
  PerfilContainer: {
    marginTop: 0,
    backgroundColor: "#E9EAFE",

    width: "100%",
    height: "100%",
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
  ContainerSelecciones: {
    backgroundColor: "#FBFBFE",
    width: "100%",
    marginVertical: 10,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-around",
  },
  ContainerSeleccionesRad: {
    backgroundColor: "#FBFBFE",
    width: "100%",
    marginVertical: 10,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-around",
  },
  Seleccionable1: {
    //display: "flex",
    height: 43,
    borderRadius: 50,
    //alignItems: "center",
    alignSelf: "flex-start",
    //justifyContent: "center",
    padding: 3,
    backgroundColor: "#E9EAFE",
    marginTop: 10,
    marginHorizontal: 3,
  },
  Seleccionable2: {
    //display: "flex",
    height: 43,
    borderRadius: 50,
    //alignItems: "center",
    alignSelf: "flex-start",
    //justifyContent: "center",
    padding: 3,
    backgroundColor: "#6979F8",
    marginTop: 10,
    marginHorizontal: 3,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    //justifyContent: "center",
    flexDirection: "row",
    // borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  StyleButtonLabel2: {
    color: "#6979F8",

    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
  },
  StyleButtonLabel1: {
    color: "#FBFBFE",

    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
  },
});

export default Gustos;
