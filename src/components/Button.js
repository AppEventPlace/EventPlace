import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Switch } from "react-native";
import IconSVG from "../components/assets/LogoSVG";
import { Colors } from "../components/CommonStyles/CommonStyles";
import CommonTextStyles from "../components/CommonStyles/CommonTextStyles";

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
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#6866D4" : color },
          ]}
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
          <IconSVG theme={Icon} color={IconColor} />
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
        <Pressable style={{ width: "100%" }} onPress={onPress}>
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
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#E3E2FC" : null },
            styles.BackButton,
          ]}
          onPress={onPress}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 5,
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <IconSVG theme="BackCheckron" color="#6979F8" />
            <Text style={styles.BackButtonTex}>{label}</Text>
          </View>
        </Pressable>
      );

    case "EditarPerfil":
      return (
        <Pressable style={{ width: 30, height: 22 }} onPress={onPress}>
          <IconSVG theme="Editar" color="#6979F8" />
        </Pressable>
      );

    case "Seleccionable":
      return (
        <View style={styles.Seleccionable}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.StyleButtonLabel1}>{label}</Text>
          </Pressable>
        </View>
      );

    case "VerMas":
      return (
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? Colors.FondoPressed : null },
            {
              display: "flex",
              flexDirection: "row",
              //width: 110,
              height: 40,
              borderRadius: 12,
              paddingHorizontal: 16,
              gap: 18,
            },
          ]}
          onPress={onPress}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={CommonTextStyles.Subtitle_16}>Ver más</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <IconSVG theme={"ArrowForward"} />
          </View>
        </Pressable>
      );
    case "BuscarEventos":
      return (
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#E3E2FC" : null },
            { width: 40, height: 40, borderRadius: 12 },
          ]}
          onPress={onPress}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconSVG
              theme={"Search"}
              ancho={"18"}
              alto={"19"}
              color={"#6979F8"}
            />
          </View>
        </Pressable>
      );
    case "SearchButton":
      return (
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#6866D4" : "#6979F8" },
            { borderRadius: 12 },
          ]}
          onPress={onPress}
        >
          <View
            style={{
              width: 41,
              height: 41,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconSVG
              theme={"Search"}
              alto={"19"}
              ancho={"18"}
              color={"#FBFBFE"}
            />
          </View>
        </Pressable>
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
    borderRadius: 50,
    columnGap: 5,
  },
  StyleButtonLabel: {
    color: "#0F172A",
    fontSize: 16,
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
    width: 70,
    height: 25,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },
  BackButtonTex: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0F172A",
    lineHeight: 22,
    letterSpacing: 0.0044,
  },
});
