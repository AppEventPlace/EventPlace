import React from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconSVG from "../../assets/LogoSVG";
import Boton from "../../components/Button";
import RenderBotonesLogin from "../../components/RenderBotonesLogin";

// npx expo install react-native-svg

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={style.PerfilContainer}>
      <View style={style.LogoContainer}>
        <IconSVG theme="LogoSvg" />
      </View>
      <View style={style.LogionContainer}>
        <View style={style.SubContainer}>
          <Text style={style.TexContainer}>Ingresa tu correo electrónico</Text>
          <TextInput
            placeholder="Ingresa tu correo electrónico"
            style={style.TexInput}
          />
        </View>
        <View style={style.SubContainer}>
          <Text style={style.TexContainer}>Contraseña</Text>
          <TextInput
            placeholder="Ingresa la contraseña"
            secureTextEntry={true}
            style={style.TexInput}
          />
        </View>
        <View style={style.BotonContainer}>
          <Boton
            label="Iniciar sesión"
            color="#6979F8"
            theme="StyleBoton"
            onPress={() => navigation.navigate("Gustos")}
          />
        </View>
        <View style={style.BotonContainer_1}>
          <Boton
            label="Crear cuenta"
            color="#F4F5FE"
            theme="StyleBoton_1"
            onPress={() => navigation.navigate("CreaCuenta")}
          />
        </View>
        <View style={style.ForgetPassword}>
          <Boton theme="primary" label="Olvide mi contraseña" />
        </View>
      </View>
      <View style={style.AnotherLogin}>
        <View style={style.Underscore} />
        <Text style={style.TexAnotherLogin}>Inicio sesion con otro medio</Text>
        <View style={style.Underscore} />
      </View>
      <View style={style.AnotherLoginContainer}>
        <RenderBotonesLogin />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#F4F5FE",
    justifyContent: "center",
    paddingHorizontal: 16,
    width: "100%",
  },
  LogoContainer: {
    width: 218,
    height: 64,
    //borderWidth: 1,
  },
  LogionContainer: {
    rowGap: 24,
    display: "flex",
    width: "100%",
    maxWidth: 358, // Ancho máximo
    elevation: 1,
    marginTop: 40,
    //borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#FBFBFE",
  },
  SubContainer: {
    gap: 8,
    height: 82,
    width: "100%",
    //borderWidth: 1,
    alignItems: "flex-start",
  },
  TexContainer: {
    height: 22,
    fontSize: 16,
    width: "100%",
    lineHeight: 22,
    //borderWidth: 1,
    color: "#0F172A",
    fontWeight: "500",
  },
  TexInput: {
    flex: 1,
    minWidth: "100%",
    fontSize: 14,
    //borderWidth: 1,
    lineHeight: 20,
    color: "#72767A",
    fontWeight: "500",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: (StyleSheet.hairlineWidth = 3),
  },
  BotonContainer: {
    width: "100%",
    height: 43,
    //borderWidth: 1,
  },
  BotonContainer_1: {
    width: "100%",
    height: 43,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#6979F8",
    //borderWidth: 1,
  },
  ForgetPassword: {
    width: 200,
    height: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  AnotherLogin: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 358, // Ancho máximo
    //borderWidth: 1,
  },
  Underscore: {
    flex: 1,
    height: 2,
    backgroundColor: "#BDBDBD",
  },
  TexAnotherLogin: {
    display: "flex",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    alignItems: "center",
    letterSpacing: 0.0044,
    color: "#0F172A",
    paddingHorizontal: 10,
  },
  AnotherLoginContainer: {
    justifyContent: "center",
    columnGap: 12,
    width: "100%",
    maxWidth: 358, // Ancho máximo
    marginTop: 24,
    //borderWidth: 1,
    flexDirection: "row",
  },
  AnotherLoginSubContainer: {
    flex: 1,
    height: 44,
  },
});

export default Login;
