import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Switch } from "react-native";
import IconSVG from "../assets/LogoSVG";

export default function Button({
  label,
  theme,
  onPress,
  color,
  disabled,
  Icon,
  IconColor,
}) {
  switch (theme) {
    case "StyleBoton":
      return (
        <Pressable
          style={[styles.button, { backgroundColor: color }]}
          onPress={onPress}
        >
          <Text style={styles.StyleButtonLabel1}>{label}</Text>
        </Pressable>
      );

    case "StyleBoton_1":
      return (
        <Pressable
          style={[styles.button, { backgroundColor: color }]}
          onPress={onPress}
        >
          <Text style={styles.StyleButtonLabel2}>{label}</Text>
        </Pressable>
      );

    case "IconPressable":
      return (
        <Pressable
          style={[styles.AnotherLoginButton, { backgroundColor: color }]}
          onPress={() => alert("You pressed a button1.")}
        >
          <IconSVG theme={Icon} />
        </Pressable>
      );

    //// Eliminar ////////
    case "StyleBoton1":
      return (
        <View style={styles.StyleBoton1}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.StyleButtonLabel1}>{label}</Text>
          </Pressable>
        </View>
      );
    //////////////////////

    case "FullStyleBoton1":
      return (
        <Pressable
          style={[
            styles.button,
            { backgroundColor: color ? "#6979F8" : undefined },
          ]}
          onPress={onPress}
        >
          {/* Lógica para mostrar un icono o el label de un botón*/}
          {label ? (
            // Label - Pressable
            <Text style={styles.StyleButtonLabel1}>{label}</Text>
          ) : (
            // Icon - Pressable
            <IconSVG theme={Icon} color={IconColor} /> // IconColor = Color del icono SVG
          )}
        </Pressable>
      );

    //// Eliminar ////////
    case "StyleBoton2":
      return (
        <View style={styles.StyleBoton2}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.StyleButtonLabel2}>{label}</Text>
          </Pressable>
        </View>
      );
    //////////////////////

    case "Terms":
      return (
        <View
          style={[
            styles.StyleBoton,
            { backgroundColor: disabled ? "#6979F8" : "#D0D4FC" },
          ]}
        >
          <Pressable
            style={styles.button}
            onPress={onPress}
            disabled={!disabled}
          >
            <Text style={styles.StyleButtonLabel1}>{label}</Text>
          </Pressable>
        </View>
      );

    case "TexTerms":
      return (
        <Pressable onPress={onPress}>
          <Text style={styles.StyleButtonLabel}>{label}</Text>
        </Pressable>
      );

    case "primary":
      return (
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button1.")}
        >
          <Text style={styles.buttonLabel_1}>{label}</Text>
        </Pressable>
      );

    case "botonSubRay":
      return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel_1}>{label}</Text>
        </Pressable>
      );

    case "BackCheckron":
      return (
        <Pressable style={styles.BackButton} onPress={onPress}>
          <IconSVG theme="BackCheckron" color="#6979F8" />
          <Text style={styles.BackButtonTex}>{label}</Text>
        </Pressable>
      );

    case "EditarPerfil":
      return (
        <Pressable style={{ width: 22, height: 22 }} onPress={onPress}>
          <IconSVG theme="Editar" />
        </Pressable>
      );

    case "Imagen":
      return (
        <Pressable
          style={[{ width: 96, height: 96, position: "absolute" }]}
          onPress={onPress}
        ></Pressable>
      );

    case "Seleccionable":
      return (
        <View style={styles.Seleccionable}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.StyleButtonLabel1}>{label}</Text>
          </Pressable>
        </View>
      );

    default:
      return (
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button2.")}
        >
          <Text style={styles.StyleButtonLabel1}>{label}</Text>
        </Pressable>
      );
  }
}
const styles = StyleSheet.create({
  StyleBoton: {
    width: "100%",
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  StyleBoton1: {
    //width: 326,
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#6979F8",
  },
  StyleBoton2: {
    width: 326,
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#F4F5FE",
    borderWidth: 2,
    borderColor: "#6979F8",
  },
  Seleccionable: {
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#6979F8",
    marginTop: 10,
    marginHorizontal: 10,
  },
  button: {
    minWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //borderWidth: 1,
    borderRadius: 50,
  },
  StyleButtonLabel: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 19,
    textDecorationLine: "underline",
  },
  StyleButtonLabel1: {
    color: "#FBFBFE",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
  },
  StyleButtonLabel2: {
    color: "#6979F8",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
  },
  AnotherLoginButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel_1: {
    display: "flex",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#515EC0",
  },
  BackButton: {
    width: 75,
    height: 25,
    //borderWidth: 1,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  BackButtonTex: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0F172A",
    lineHeight: 22,
    letterSpacing: 0.0044,
  },
});
