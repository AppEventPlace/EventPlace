import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import Boton from "./Button";

/*
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  Este componente valida que el usuario acepte los términos y condiciones.
  i checkbox = True      Se habilita el botón para continuar.
  Si checkbox = false     El botón para continuar permanece inhabilitado.

  1.	Componente TerminosCondiciones:
    a)	Este componente funcional se encarga de mostrar una interfaz para aceptar 
        los términos y condiciones.
    b)	Utiliza el estado local (useState) para rastrear si el usuario ha aceptado
        los términos (aceptado).
    c)	Cuando el usuario cambia el estado del checkbox, se actualiza el valor de
        aceptado.
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  */

const TerminosCondiciones = ({ navigation }) => {
  const [aceptado, setAceptado] = useState(false);

  return (
    <View style={style.Container}>
      <View style={style.SubContainer}>
        <CheckBox
          style={style.checkbox}
          value={aceptado}
          color={aceptado ? "#6979F8" : undefined}
          onValueChange={setAceptado}
        />
        <Boton
          theme="TexTerms"
          label="Aceptar términos, condiciones y tratamiento de datos personales."
          onPress={() => navigation.navigate("TermsAndConditions")}
        />
      </View>
      <View style={style.BotonContainer}>
        <Boton
          label="Continuar"
          theme="Terms"
          onPress={() => navigation.navigate("VerifyIdentity")}
          disabled={aceptado}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    gap: 56,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  SubContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 326,
    width: "100%",
    //borderWidth: 1,
  },
  checkbox: {
    borderRadius: 4,
    width: 20,
    height: 20,
    borderColor: "#6979F8",
  },
  BotonContainer: {
    maxWidth: 326,
    width: "100%",
    height: 43,
    //borderWidth: 1,
  },
});

export default TerminosCondiciones;
