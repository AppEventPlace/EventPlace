import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import * as ImagePicker from "expo-image-picker"; // Lib para el acceso a la interfaz de usuario
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconSVG from "../../assets/LogoSVG";
import Boton from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";

import DatePickerComponent from "../../components/datepicke";

const FondImage = require("../../assets/adaptive-icon.png"); // Espesificar ruta de la imagen

const CreaCuenta = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  /*
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  Componente ImageViewer permite el acceso a la interfaz de usuario para seleccionar 
  la imagen de perfil. 
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  */

  //Variable de estado que contenga el valor de la imagen seleccionada.
  const [selectedImage, setSelectedImage] = useState(null);
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

  /*
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  Este componente valida que el usuario acepte los términos y condiciones.
  i checkbox = True      Se habilita el botón para continuar.
  Si checkbox = false     El botón para continuar permanece inhabilitado.

  1.	Componente TerminosCondicionesForm:
    a)	Este componente funcional se encarga de mostrar una interfaz para aceptar 
        los términos y condiciones.
    b)	Utiliza el estado local (useState) para rastrear si el usuario ha aceptado
        los términos (aceptado).
    c)	Cuando el usuario cambia el estado del checkbox, se actualiza el valor de
        aceptado.
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  */
  const TerminosCondicionesForm = () => {
    const [aceptado, setAceptado] = useState(false);

    return (
      <View
        style={{
          gap: 56,
          marginTop: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            gap: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 326,
            width: "100%",
            //borderWidth: 1,
          }}
        >
          <CheckBox
            style={style.checkbox}
            value={aceptado}
            color={aceptado ? "#6979F8" : undefined}
            onValueChange={setAceptado}
          />
          <Boton
            theme="TexTerms"
            label="Aceptar términos, condiciones y tratamiento de datos personales."
            onPress={() => navigation.navigate("Términos y condiciones")}
          />
        </View>
        <View style={style.BotonContainer}>
          <Boton
            label="Continuar"
            theme="Terms"
            onPress={() => navigation.navigate("Verify identity")}
            disabled={aceptado}
          />
        </View>
      </View>
    );
  };

  /*
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------


  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  */
  return (
    <SafeAreaView style={{ backgroundColor: "#F4F5FE", flex: 1 }}>
      <ScrollView style={style.PerfilContainer}>
        <View style={style.HeaderContainer}>
          <Boton
            theme="BackCheckron"
            label="Atras"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={style.FullContainer}>
          <View style={style.ProgressBar}>
            <IconSVG theme="ProgressBar" progress="90" />
          </View>
          <Text style={style.RegisterTex}>Crear cuenta</Text>
          <Text style={style.ContainerTex}>
            Crear la cuenta con tus redes o ingresar tu correo electrónico
          </Text>
          <View style={style.AnotherLoginContainer}>
            <View style={style.AnotherLoginSubContainer}>
              <Boton theme="IconPressable" Icon="Google" color="#FFFFFF" />
            </View>
            <View style={style.AnotherLoginSubContainer}>
              <Boton theme="IconPressable" Icon="Facebook" color="#1877F2" />
            </View>
            <View style={style.AnotherLoginSubContainer}>
              <Boton theme="IconPressable" Icon="IOS" color="#000000" />
            </View>
          </View>
          <View style={style.Alinear}>
            <View style={style.AnotherLogin}>
              <View style={style.Underscore} />
              <View>
                <Text style={style.TexAnotherLogin}>
                  Crea cuenta con correo electrónico
                </Text>
              </View>
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
                <Text style={style.TexContainer}>Nombre y apellido</Text>
                <TextInput
                  placeholder="Ingresa tu correo electrónico"
                  style={style.TexInput}
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
                      }
                      //editable={false}
                      style={[style.TexInput, { textAlign: "center" }]}
                    />
                  </View>
                  <View
                    style={[
                      style.SubContainer4,
                      {
                        borderBottomColor: "#A1A5A9",
                        borderBottomWidth: (StyleSheet.hairlineWidth = 3),
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
                    />
                  </View>
                  <View style={style.SubContainer3}>
                    <TextInput
                      placeholder="Ingresa tu número celular"
                      style={style.TexInput}
                    />
                  </View>
                </View>
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Correo electrónico</Text>
                <TextInput
                  placeholder="Ingresa tu nombre correo electrónico"
                  style={style.TexInput}
                />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Correo electrónico</Text>
                <TextInput
                  placeholder="Ingresa tu nombre correo electrónico"
                  style={style.TexInput}
                />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Crea contraseña</Text>
                <TextInput
                  placeholder="Ingresa tu nueva contraseña "
                  style={style.TexInput}
                />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Confirma contraseña</Text>
                <TextInput
                  placeholder="Confirma tu nueva contraseña"
                  style={style.TexInput}
                />
              </View>
              <View style={style.SubContainer}>
                <Text style={style.TexContainer}>Nombre de usuario</Text>
                <TextInput
                  placeholder="Ingresa tu nombre de usuario"
                  style={style.TexInput}
                />
              </View>
            </View>
            <TerminosCondicionesForm />
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
    alignSelf: "center", //alinea todo el forumlario al centro
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
  AnotherLoginContainer: {
    marginTop: 20,
    justifyContent: "center",
    width: "100%",
    maxWidth: 800, //Esto evita que tome toda la pantalla
    //borderWidth: 1,
    flexDirection: "row",
    columnGap: 12,
  },
  AnotherLoginSubContainer: {
    flex: 1,
    height: 44,
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
    display: "flex",
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
    borderBottomWidth: (StyleSheet.hairlineWidth = 3),
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

export default CreaCuenta;
