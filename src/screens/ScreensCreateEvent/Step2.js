import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackCheckron from "../../components/BackCheckron";
import ProgressBar from "./Components/ProgressStep";
import BoleteriaInfo from "./Components/BoleteriaInfo";
import Button from "../../components/Button";
import BotonFlotante from "../../components/BotonFlotante";
import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";

const Boleteria = ({ navigation }) => {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[CommonStyles.AreaView]}
    >
      <View style={{ flex: 1 }}>
        <ScrollView style={CommonStyles.ScrollView}>
          <View style={CommonStyles.FullContainer}>
            <BackCheckron navigation={navigation} />
            <ProgressBar step={2} />
            <View style={style.FullContainer}>
              <Text style={style.Info}>Boleteria</Text>
              <Text style={style.TextInfo}>
                Define la categoría, cantidad y el valor de las boletas para tu
                evento
              </Text>

              <BoleteriaInfo />

              <View style={style.BotonContainer}>
                <Button
                  label="Continuar"
                  color="#6979F8"
                  theme="StyleBoton"
                  onPress={() => navigation.navigate("Resumen")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            right: 16,
            bottom: Dimensions.get("window").height * 0.02,
          }}
        >
          <BotonFlotante navigation={navigation} />
        </View>
      </View>
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
  TextInfo: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.2,
    color: "#0F172A",
  },
  BotonContainer: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 326,
    height: 43,
    //borderWidth: 1,
  },
});

export default Boleteria;
