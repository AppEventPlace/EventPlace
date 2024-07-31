//------------------ Importaciones ------------------//
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//----------- Importacion de Componentes -----------//
import Froms from "../../../components/Form";
import Boton from "../../../components/Button";

//Definición de preguntas:
const preguntas = [
  {
    Title: "Nombre del organizador",
    SubTitle: "Ingresa el nombre del organizador",
  },
  {
    Title: "Nº de teléfono principa",
    SubTitle: "Ingresa el número de telefono",
  },
  {
    Title: "Nº de teléfono secundario",
    SubTitle: "Ingresa el número de telefono",
  },
  {
    Title: "Correo electrónico",
    SubTitle: "Ingresa el correo electrónico",
  },
  // Agrega más preguntas según sea necesario
];

/*-------------------------------------------------------------------------
Organizador es un componente funcional que toma navigation como una propiedad. 
Este componente renderiza el formulario en pantalla.
-------------------------------------------------------------------------*/

const Organizador = () => {
  /*-------------------------------------------------------------------------
Iteramr sobre la lista preguntas utilizando el método map(). Para cada pregunta 
en la lista:
-------------------------------------------------------------------------*/
  return (
    <View style={style.Container}>
      <Text style={style.TexContainer}>Organizador</Text>
      <View style={style.InfoContainer}>
        {preguntas.map((pregunta, index) => (
          <Froms
            key={index}
            Title={pregunta.Title}
            SubTitle={pregunta.SubTitle}
          />
        ))}
        <View style={style.Anfitrion}>
          <Text style={style.TextStyle}>Agregar anfitrión</Text>
          <Text style={style.Icon}>+</Text>
        </View>
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
  Anfitrion: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    columnGap: 18,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  TextStyle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#6979F8",
  },
  Icon: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#6979F8",
  },
});

export default Organizador;
