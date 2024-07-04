//------------------ Importaciones ------------------//
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//----------- Importacion de Componentes -----------//
import Froms from "../../../components/Form";
import Boton from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import SvgLogo from "../../../assets/LogoSVG";
//import { LeafletView, LatLng } from "react-native-leaflet-view";
/*import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYW5kcmVzZ29tZXoxMiIsImEiOiJjbHk2Z2toM2UwYWY5MmxuNjE0Zmg0ZGhoIn0.aZMV5nZulGYnmVEvFhCKag"
);*/
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
    Title: "Tipo de lugar",
    SubTitle: "Selecciona el tipo de lugar",
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
          pregunta.Title === "Ciudad o municipio" ||
          pregunta.Title === "Tipo de lugar" ? (
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
        <View style={style.Anfitrion}>
          <Text style={style.TextStyle}>Agregar anfitrión</Text>
          <SvgLogo theme={"Map"} color={"#6979F8"} />
        </View>
      </View>
    </View>
  );
};

/* Codigo para llamar el mapa
 <View style={style.page}>
          <View style={style.container}>
            <Mapbox.MapView style={style.map} />
          </View>
        </View>
*/

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
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

export default UbicaciónDelEvento;
