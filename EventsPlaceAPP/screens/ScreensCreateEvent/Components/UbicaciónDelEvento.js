//------------------ Importaciones ------------------//
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//----------- Importacion de Componentes -----------//
import Froms from "../../../components/Form";
import Boton from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";

//Definición de preguntas:
const preguntas = [
  {
    Title: "Departamento",
    SubTitle: "Selecciona un departamento",
  },
  {
    Title: "Ciudad o municipio",
    SubTitle: "Selecciona la ciudad o municipio",
  },
  {
    Title: "Ingresa la dirección dónde se realizará en evento",
    SubTitle: "Ingresa la dirección",
  },
  // Agrega más preguntas según sea necesario
];

/*-------------------------------------------------------------------------
Organizador es un componente funcional que toma navigation como una propiedad. 
Este componente renderiza el formulario en pantalla.
-------------------------------------------------------------------------*/

const UbicaciónDelEvento = ({ navigation }) => {
  /*-------------------------------------------------------------------------
Iteramr sobre la lista preguntas utilizando el método map(). Para cada pregunta 
en la lista:
-------------------------------------------------------------------------*/
  return (
    <View style={style.Container}>
      <Text style={style.TexContainer}>Ubicación del evento</Text>
      <View style={style.InfoContainer}>
        {preguntas.map((pregunta, index) =>
          pregunta.Title === "Departamento" ||
          pregunta.Title === "Ciudad o municipio" ? (
            <Dropdown
              key={index}
              Title={pregunta.Title}
              SubTitle={pregunta.SubTitle}
            />
          ) : (
            <Froms
              key={index}
              Title={pregunta.Title}
              SubTitle={pregunta.SubTitle}
            />
          )
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    rowGap: 16,
  },
  TexContainer: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#0F172A",
  },
  InfoContainer: {
    gap: 32,
    elevation: 2,
    width: "100%",
    //borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: "column",
    backgroundColor: "white",
  },
});

export default UbicaciónDelEvento;
