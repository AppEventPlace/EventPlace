import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function App() {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleTextChange = (text, index) => {
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      {inputRefs.map((ref, index) => (
        <TextInput
          key={index}
          ref={ref}
          style={styles.input}
          onChangeText={(text) => handleTextChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    margin: 5,
    textAlign: "center",
  },
});

// En este ejemplo:

// Creamos un arreglo de referencias (inputRefs) para los 6 campos de texto.
// Cuando se ingresa un número en un campo de texto, verificamos si su longitud es 1.
// Si es así y no estamos en el último campo, enfocamos automáticamente el siguiente campo de texto.
