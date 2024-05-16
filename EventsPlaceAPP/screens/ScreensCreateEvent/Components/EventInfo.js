//------------------ Importaciones ------------------//
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//----------- Importacion de Componentes -----------//
import Froms from "../../../components/Form";
import Dropdown from "../../../components/Dropdown";
import CheckBoxRadio from "../../../components/CheckBoxRadio";
import Boton from "../../../components/Button";

import SvgLogo from "../../../assets/LogoSVG";

//Definición de preguntas:
const preguntas = [
  { Title: "Nombre del evento", SubTitle: "Título del evento" },
  { Title: "Tipo de evento", SubTitle: "Selecciona un tipo de evento" },
  { Title: "Categoría", SubTitle: "Selecciona una categoría" },
  {
    Title: "Número de aforo de personas",
    SubTitle: "Ingresa el número máximo de personas",
  },
  {
    Title: "Fecha de inicio",
    SubTitle: "DD/MM/AAAA",
    type: "1",
    Title_1: "Hora de inicio",
    SubTitle_1: "00:00 A.M",
  },
  {
    Title: "Fecha de finalización",
    SubTitle: "DD/MM/AAAA",
    type: "1",
    Title_1: "Hora de finalización",
    SubTitle_1: "00:00 A.M",
  },
  {
    Title: "Descripción",
    SubTitle: "Ingresa una breve descripción del evento",
  },
  // Agrega más preguntas según sea necesario
];

//Definición de preguntas:
const Checkpreguntas = [
  {
    Title: "¿Cómo va a ser el evento?",
    Options: ["Presencial", "Virtual"],
  },
  {
    Title: "¿El evento tiene costo?",
    Options: ["Si", "No"],
  },
  {
    Title: "Clase de evento",
    Options: ["Público", "Privado"],
  },
  // Agrega más preguntas según sea necesario
];

/*-------------------------------------------------------------------------
EventInfo es un componente funcional que toma navigation como una propiedad. 
Este componente renderiza el formulario en pantalla.
-------------------------------------------------------------------------*/

const EventInfo = ({ navigation }) => {
  /*-------------------------------------------------------------------------
Iteramr sobre la lista preguntas utilizando el método map(). Para cada pregunta 
en la lista:
Verificar el título de la pregunta requerido por el componente Dropdown.
Si el título de la pregunta coincide, se renderiza el componente Dropdown
con las propiedades Title y SubTitle correspondientes.
Si no, se renderiza el componente Froms.
-------------------------------------------------------------------------*/
  return (
    <View style={style.InfoContainer}>
      {[...preguntas, ...Checkpreguntas].map((pregunta, index) =>
        pregunta.Options ? (
          <CheckBoxRadio
            key={index}
            Title={pregunta.Title}
            Options={pregunta.Options}
          />
        ) : pregunta.Title === "Tipo de evento" ||
          pregunta.Title === "Categoría" ? (
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
            Title_1={pregunta.Title_1}
            SubTitle_1={pregunta.SubTitle_1}
            type={pregunta.type}
          />
        )
      )}
      <View style={style.ButtonContainer}>
        <Text style={style.ButtonText}>Material publicitario del evento</Text>
        <View style={style.Button}>
          <Boton
            label="Subir archivos"
            color="#F4F5FE"
            theme="StyleBoton_1"
            Icon="File"
            IconColor="#6979F8"
            onPress={() => alert("You pressed a button2.")}
          />
        </View>
        <Text style={style.FileText}>
          Máximo 15 fotos, formato: jpg - jpeg - png - pdf
        </Text>
      </View>
      <Froms Title="Videos" SubTitle="Agrega enlace o url" />
      <Text style={style.Textstyle}>
        Agregue un enlace de video de Youtube o Vimeo para mostrar el ambiente
        de su evento.
      </Text>
      <View style={{ width: "100%" }}>
        <Text style={style.Textstyle_1}>
          Mejore la visibilidad de su evento agregando etiquetas relevantes al
          tema.
        </Text>
        <Froms SubTitle="#Hashtags" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
  ButtonContainer: { height: 107, width: "100%", rowGap: 16 },
  ButtonText: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: "#333333",
    textAlign: "left",
  },
  Button: {
    width: "100%",
    height: 43,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#6979F8",
    //borderWidth: 1,
  },
  FileText: {
    marginTop: 8,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: "#72767A",
    textAlign: "stretch",
  },
  Textstyle: {
    marginTop: -24,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: "#0F172A",
    alignSelf: "stretch",
  },
  Textstyle_1: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#333333",
    alignSelf: "stretch",
  },
  SubContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 79,
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: (StyleSheet.hairlineWidth = 1),
  },
  TexContainer: {
    width: "100%",
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
});

export default EventInfo;
