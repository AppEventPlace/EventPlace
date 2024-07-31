//------------------ Importaciones ------------------//
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//----------- Importacion de Componentes -----------//
import Froms from "../../../components/Form";
import Dropdown from "../../../components/Dropdown";
import SimpleCheckBox from "../../../components/SimpleCheckBox";
import Boton from "../../../components/Button";

import SvgLogo from "../../../components/assets/LogoSVG";

//Definición de preguntas:
const preguntas = [
  { Title: "Categoria de boleta", SubTitle: "Selecciona categoria" },
  { Title: "Cantidad de boletas", SubTitle: "Ingresa en número de boletas" },
  // Agrega más preguntas según sea necesario
];

const Tiempo = [
  {
    Title: "Inicio de venta",
    SubTitle: "DD/MM/AAAA",
    logo1: "Calendario",
    type: "1",
    Title_1: "Hora de inicio",
    SubTitle_1: "00:00 A.M",
    logo2: "Clock",
  },
  {
    Title: "Cierre de venta",
    SubTitle: "DD/MM/AAAA",
    logo1: "Calendario",
    type: "1",
    Title_1: "Hora de finalización",
    SubTitle_1: "00:00 A.M",
    logo2: "Clock",
  },
];

//Definición de preguntas:
const Options = [
  "Hasta 1 día antes del inicio del evento.",
  "Hasta 7 días antes del inicio del evento.",
  "Hasta 30 días antes del inicio del evento.",
  "Se evaluará caso a caso",
  "Sin reembolsos",
  // Agrega más preguntas según sea necesario
];

/*-------------------------------------------------------------------------
EventInfo es un componente funcional que toma navigation como una propiedad. 
Este componente renderiza el formulario en pantalla.
-------------------------------------------------------------------------*/

const BoleteriaInfo = ({ navigation }) => {
  /*-------------------------------------------------------------------------
Iteramr sobre la lista preguntas utilizando el método map(). Para cada pregunta 
en la lista:
Verificar el título de la pregunta requerido por el componente Dropdown.
Si el título de la pregunta coincide, se renderiza el componente Dropdown
con las propiedades Title y SubTitle correspondientes.
Si no, se renderiza el componente Froms.
-------------------------------------------------------------------------*/
  return (
    <View style={{ flex: 1, rowGap: 32 }}>
      <View style={style.InfoContainer}>
        <Text style={style.TextInfo}>
          El numero de aforo del lugar para el evento es de 100 personas.
        </Text>
        {preguntas.map((pregunta, index) =>
          pregunta.Title === "Cantidad de boletas" ? (
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
              type={pregunta.type}
            />
          )
        )}
        <Text style={style.Textstyle}>
          Ten en cuenta el número de aforo del lugar para poder configurara la
          cantidad de boletas a vender
        </Text>
        <View style={style.Categoria}>
          <Text style={style.TextStyle}>Agregar categoría</Text>
          <Text style={style.Icon}>+</Text>
        </View>
      </View>

      <View style={{ flex: 1, rowGap: 16 }}>
        <Text style={style.TexSubtInfo}>Fecha y hora venta de boletería</Text>
        <View style={style.InfoContainer}>
          {Tiempo.map((pregunta, index) => (
            <Froms
              key={index}
              Title={pregunta.Title}
              SubTitle={pregunta.SubTitle}
              logo1={pregunta.logo1}
              logo2={pregunta.logo2}
              Title_1={pregunta.Title_1}
              SubTitle_1={pregunta.SubTitle_1}
              type={pregunta.type}
            />
          ))}
        </View>
      </View>

      <View style={{ flex: 1, rowGap: 16 }}>
        <Text style={style.TexSubtInfo}>
          ¿Cuándo pueden los asistentes solicitar reembolsos?
        </Text>
        <View style={style.InfoContainer}>
          <SimpleCheckBox Options={Options} />
        </View>
      </View>

      <View style={style.InfoContainer}></View>
    </View>
  );
};

const style = StyleSheet.create({
  InfoContainer: {
    elevation: 2,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "white",
    rowGap: 32,
  },
  TextInfo: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#333333",
    alignSelf: "stretch",
  },
  Textstyle: {
    marginTop: -24,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: "#0F172A",
    alignSelf: "stretch",
  },
  Categoria: {
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
  TexSubtInfo: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.2,
    color: "#0F172A",
  },
});

export default BoleteriaInfo;
