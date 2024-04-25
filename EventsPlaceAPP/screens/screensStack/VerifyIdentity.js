import React, { useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Boton from "../../components/Button";

const VerifyIdentity = ({ navigation }) => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleTextChange = (text, index) => {
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <SafeAreaView View style={style.PerfilContainer}>
      <View style={style.ContainerVerify}>
        <View style={style.TexContainer}>
          <Text style={style.TexTitle}>Para verificar tu identidad</Text>
          <Text style={style.Texstyle}>
            Hemos enviado al número +57 3018451234 y al correo mail@mail.com un
            mensaje que contiene el código de seguridad de 6 dígitos el cual
            debes ingresar a continuación.
          </Text>
        </View>
        <View style={style.CodeContainer}>
          <View style={style.InputContainer}>
            {inputRefs.map((ref, index) => (
              <TextInput
                key={index}
                ref={ref}
                style={style.input}
                onChangeText={(text) => handleTextChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>
          <Boton theme="primary" label="Solicitar nuevo código" />
        </View>
        <View style={{ width: 310, marginHorizontal: 10 }}>
          <Boton
            label="Continuar"
            theme="StyleBoton1"
            onPress={() => navigation.navigate("Gustos")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VerifyIdentity;

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    height: "100%",
    paddingHorizontal: 16,
    //borderWidth: 1,
    justifyContent: "center",
  },
  ContainerVerify: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 56,
    //borderWidth: 1,
    borderRadius: 12,
    elevation: 1,
    backgroundColor: "#FBFBFE",
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: "100%",
    maxWidth: 400,
    minWidth: 335,
  },
  TexContainer: {
    gap: 24,
    justifyContent: "center",
    //borderWidth: 1,
    alignItems: "center",
  },
  CodeContainer: {
    gap: 16,
    justifyContent: "center",
    //borderWidth: 1,
    alignItems: "center",
    width: "95%",
  },
  TexTitle: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0.01,
    color: "#515EC0",
    textAlign: "center",
  },
  Texstyle: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.0044,
    color: "#0F172A",
    textAlign: "center",
  },
  InputContainer: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
    //borderWidth: 1,
    alignItems: "center",
    width: "95%",
  },
  input: {
    width: 45,
    height: 47,
    textAlign: "center",
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: (StyleSheet.hairlineWidth = 3),
  },
});

// Crear un arreglo de referencias (inputRefs) para los 6 campos de texto.
// Cuando se ingresa un número en un campo de texto, se verifica si su longitud es 1.
// Si es así y no estamos en el último campo,  se enfoca automáticamente el siguiente campo de texto.
