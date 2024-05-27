import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import {
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import * as ImagePicker from "expo-image-picker"; // Lib para el acceso a la interfaz de usuario
import Boton from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";
import DatePickerComponent from "../../components/datepicke";
import IconSVG from "../../assets/LogoSVG";
import TerminosCondiciones from "../../components/TerminosCondiciones";
import RenderBotonesLogin from "../../components/RenderBotonesLogin";
import BackCheckron from "../../components/BackCheckron";

const FondImage = require("../../assets/adaptive-icon.png");

const CreaCuenta = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState("");
  //Variable de estado que contenga el valor de la imagen seleccionada.
  const [selectedImage, setSelectedImage] = useState(null);

  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [FechaNacimiento, setFechaNacimiento] = useState("");
  const [Indicativo, setIndicativo] = useState("");
  const [Celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    //setFechaNacimiento(selectedDate.toLocaleDateString());
    CambiaFecha();
  };
  const CambiaFecha = () => {
    setFechaNacimiento(selectedDate.toLocaleDateString());
  };

  /*----------------------------------------------------------------------------------
  Componente ImageViewer permite el acceso a la interfaz de usuario para seleccionar 
  la imagen de perfil. 
  ----------------------------------------------------------------------------------*/
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      //Opciones del selector de imágenes a launchImageLibraryAsync()
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    //Si el usuario no elige una imagen, muestra una alerta.
    else {
      alert("No seleccionaste ninguna imagen.");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#032030", flex: 1 }}>
      <ScrollView style={style.PerfilContainer}>
        <BackCheckron navigation={navigation} />
        <View style={style.FullContainer}>
          <View style={style.ProgressBar}>
            <IconSVG theme="ProgressBar" progress="90" />
          </View>
          <Text style={style.RegisterTex}>Crear cuenta</Text>
          <Text style={style.ContainerTex}>
            Crear la cuenta con tus redes o ingresar tu correo electrónico
          </Text>
          <RenderBotonesLogin />
          <View style={style.Alinear}>
            <View style={style.AnotherLogin}>
              <View style={style.Underscore} />
              <Text style={style.TexAnotherLogin}>
                Crea cuenta con correo electrónico
              </Text>
              <View style={style.Underscore} />
            </View>
          </View>
          <View style={style.RegisterContainer}>
            <View style={style.Container}>
              <View
                style={[
                  style.Alinear,
                  {
                    marginTop: 24,
                    width: 96, // Ancho de a imagen
                    height: 96,
                  },
                ]}
              >
                <ImageViewer
                  //Pase el URI de la imagen seleccionada al componente ImageViewer.
                  placeholderImageSource={FondImage}
                  selectedImage={selectedImage}
                  ancho={96}
                  alto={96}
                ></ImageViewer>
                <Boton theme="Imagen" onPress={pickImageAsync} />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Nombre&#40;s&#41;</Text>
                <TextInput
                  placeholder="Ingresa tu(s) nombre(s)"
                  style={style.TexInput}
                  onChangeText={(texto) => [setName(texto), console.log(Name)]}
                />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Apellido&#40;s&#41;</Text>
                <TextInput
                  placeholder="Ingresa tu(s) apellido(s)"
                  style={style.TexInput}
                  onChangeText={(texto) => [
                    setLastname(texto),
                    console.log(Lastname),
                  ]}
                />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Fecha de nacimiento</Text>
                <View style={style.SubContainer2}>
                  <View style={style.SubContainer3}>
                    <TextInput
                      placeholder={
                        selectedDate
                          ? selectedDate.toLocaleDateString()
                          : "Ingresa la fecha de nacimiento"
                      } //value={selectedDate.toLocaleDateString()}
                      editable={false}
                      style={[style.TexInput, { textAlign: "center" }]}
                      //format="DD/MM/YYYY"
                    />
                  </View>
                  <View
                    style={[
                      style.SubContainer4,
                      {
                        borderBottomColor: "#A1A5A9",
                        borderBottomWidth: (StyleSheet.hairlineWidth = 1),
                      },
                    ]}
                  >
                    <DatePickerComponent
                      value={selectedDate}
                      onDateChange={handleDateChange}
                      IconColor="#6979F8" // Color del icono SVG
                    />
                  </View>
                </View>
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Número de celular</Text>
                <View style={style.SubContainer2}>
                  <View style={style.SubContainer4}>
                    <TextInput
                      value="+57"
                      style={style.TexInput}
                      editable={false}
                      onChangeText={(texto) => [
                        setIndicativo(texto),
                        console.log(Indicativo),
                      ]}
                    />
                  </View>
                  <View style={style.SubContainer3}>
                    <TextInput
                      placeholder="Ingresa tu número celular"
                      style={style.TexInput}
                      onChangeText={(texto) => [
                        setCelular(texto),
                        console.log(Celular),
                      ]}
                    />
                  </View>
                </View>
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Correo electrónico</Text>
                <TextInput
                  placeholder="Ingresa tu nombre correo electrónico"
                  style={style.TexInput}
                  onChangeText={(texto) => [
                    setEmail(texto),
                    console.log(email),
                  ]}
                />
              </View>

              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Nombre de usuario</Text>
                <View
                  style={[
                    style.SubContainer2,
                    {
                      paddingRight: 8,
                      borderBottomColor: "#A1A5A9",
                      borderBottomWidth: (StyleSheet.hairlineWidth = 1),
                    },
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa tu nombre de usuario"
                    style={style.TexInputIcon}
                    onChangeText={(texto) => [
                      setUsuario(texto),
                      console.log(usuario),
                    ]}
                  />
                  <IconSVG theme={"Check"} />
                </View>
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Crea contraseña</Text>
                <View
                  style={[
                    style.SubContainer2,
                    {
                      paddingRight: 8,
                      borderBottomColor: "#A1A5A9",
                      borderBottomWidth: (StyleSheet.hairlineWidth = 1),
                    },
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa tu nueva contraseña"
                    style={style.TexInputIcon}
                    onChangeText={(texto) => [
                      setContraseña(texto),
                      console.log(contraseña),
                    ]}
                  />
                  <IconSVG theme={"Check"} />
                </View>
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Confirma contraseña</Text>
                <View
                  style={[
                    style.SubContainer2,
                    {
                      paddingRight: 8,
                      borderBottomColor: "#A1A5A9",
                      borderBottomWidth: (StyleSheet.hairlineWidth = 1),
                    },
                  ]}
                >
                  <TextInput
                    placeholder="Confirma tu nueva contraseña"
                    style={style.TexInputIcon}
                    onChangeText={(texto) => [
                      setContraseña(texto),
                      console.log(contraseña),
                    ]}
                  />
                  <IconSVG theme={"Check"} />
                </View>
              </View>
            </View>
            <View style={{ axWidth: 800, width: "100%" }}>
              <TerminosCondiciones
                navigation={navigation}
                Name={Name}
                Lastname={Lastname}
                Celular={Celular}
                FechaNacimiento={FechaNacimiento}
                email={email}
                usuario={usuario}
                contraseña={contraseña}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Alinear: {
    //borderWidth: 1,
    alignItems: "center",
  },
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%", //asegura el ancho total en el dispositivo
    height: "100%",
    paddingHorizontal: 16,
  },
  HeaderContainer: {
    marginTop: 20,
    height: 25,
    width: "100%",
    //borderWidth: 1,
  },
  FullContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%",
    maxWidth: 800, //Esto evita que tome toda la pantalla
    alignSelf: "center",
  },
  ProgressBar: {
    marginTop: 24,
    width: "100%",
    height: 10,
    //borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  RegisterTex: {
    marginTop: 24,
    height: 29,
    //borderWidth: 1,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    color: "#515EC0",
    letterSpacing: 0.01,
  },
  ContainerTex: {
    marginTop: 16,
    //borderWidth: 1,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#0F172A",
    letterSpacing: 0.0044,
  },
  AnotherLogin: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    width: "100%", //326
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
  RegisterContainer: {
    marginTop: 24,
    display: "flex",
    //borderWidth: 1,
    alignItems: "center",
    width: "100%",
    paddingBottom: 38,
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 16,
    //borderWidth: 1,
    width: "100%",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 12,
    paddingBottom: 24,
  },
  SubContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 86,
    //borderWidth: 1,
    marginTop: 24,
  },
  SubContainer2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //borderWidth: 1,
    gap: 8,
  },
  SubContainer3: {
    flex: 1,
    height: "100%",
    //borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SubContainer4: {
    width: 75,
    height: "100%",
    //borderWidth: 1,
    justifyContent: "center",
  },
  TexContainer: {
    //borderWidth: 1,
    display: "flex",
    width: "100%",
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
  TexInput: {
    //borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#72767A",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: (StyleSheet.hairlineWidth = 1),
  },
  TexInputIcon: {
    //borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#72767A",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    borderBottomColor: "#A1A5A9",
  },
  BotonContainer: {
    maxWidth: 326,
    width: "100%",
    height: 43,
    //borderWidth: 1,
  },
});

export default CreaCuenta;
