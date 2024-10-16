import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackCheckron from "../../components/BackCheckron";
import ProgressBar from "./Components/ProgressStep";
import EventInfo from "./Components/EventInfo";
import Organizador from "./Components/Organizador";
import UbicacionDelEvento from "./Components/UbicacionDelEvento";
import Button from "../../components/Button";
import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";

const CreateEvent = ({ navigation }) => {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Grey_Top }]}
    >
      <ScrollView style={CommonStyles.ScrollView}>
        <View style={CommonStyles.FullContainer}>
          <BackCheckron navigation={navigation} />
          <Text style={style.TexCreateEvent}>Crear evento</Text>
          <ProgressBar step={1} />
          <View style={style.FullContainer}>
            <Text style={style.Info}>Información principal</Text>
            <EventInfo />
            <Organizador />
            <UbicacionDelEvento />
            <View style={style.BotonContainer}>
              <Button
                label="Continuar"
                color="#6979F8"
                theme="StyleBoton"
                onPress={() => navigation.navigate("Boleteria")}
              />
            </View>
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
  TexCreateEvent: {
    marginTop: 24,
    height: 29,
    //borderWidth: 1,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    color: "#515EC0",
    letterSpacing: 0.01,
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
  BotonContainer: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 326,
    height: 43,
    //borderWidth: 1,
  },
});

export default CreateEvent;
