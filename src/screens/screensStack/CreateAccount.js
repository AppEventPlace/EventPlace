import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

// --> Importar ImagePicker
import * as ImagePicker from "expo-image-picker"; // Lib para el acceso a la interfaz de usuario
import ImageViewer from "../../components/CommonComponents/ImageViewer";

// --> Importar Estilos comunes
import CommonStyles, {
  Colors,
  TexColor,
} from "../../components/CommonStyles/CommonStyles";
import CommonSpacingStyles from "../../components/CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../../components/CommonStyles/CommonTextStyles";

// --> Importar Componentes comunes
import IconSvg from "../../components/assets/IconSvg";
import Button from "../../components/CommonComponents/Button";
import CheckedTerms from "../../components/CommonComponents/CheckedTerms";
import BackCheckron from "../../components/CommonComponents/BackCheckron";
import AnotherLoginMethod from "../../components/CommonComponents/AnotherLoginMethod";

// --> Importar Validación de estructura
import useValidation from "./ValidationCreateAccount";

// --> Importar Validación de estructura
import CreateUser from "../../Services/UsersServices/CreateUser";

// --> Importar Api para registrar o crear un nuevo Usuario
import { LinearProgress } from "@rneui/themed";
import Toast from "react-native-toast-message";
import SvgLogo from "@/components/assets/LogoSVG";
import SelectorIndicativo from "@/constants/IndicativosTel";
import { startGeofencingAsync } from "expo-location";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";

/*--------    FondImage= Imagen inicial, Requerida para usar ImageViewer   --------*/
const FondImage = require("../../components/assets/Seleccionar_Foto.jpg");
/*----------------------------------------------------------------------------------*/

/*----------------------------  CreateAccount  -----------------------------
Componente Diseñado para crear un formulario de registro de nuevos usuarios 
---------------------------------------------------------------------------*/
const CreateAccount = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageB64, setImageB64] = useState(null);
  /*----------------------------------------------------------------------------------
  Componente ImageViewer permite el acceso a la interfaz de usuario para seleccionar 
  la imagen de perfil. y guardarla en base 64 para envío en la peticion
  ----------------------------------------------------------------------------------*/
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      //Opciones del selector de imágenes a launchImageLibraryAsync()
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);

      setImageB64(result.assets[0].base64);
      handleChange("fotoPerfilBase64", result.assets[0].base64);
    }
    //Si el usuario no elige una imagen, muestra una alerta.
    else {
      alert("No seleccionaste ninguna imagen.");
    }
  };

  /*----------------------------------------------------------------------------------
  Inicializar variables para validar la estructura y obligatoriedad del campo 
  ----------------------------------------------------------------------------------*/
  const initialState = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    fotoPerfilBase64:
      "iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVKSURBVHgB7Zzfb9tUFMdP3PRHIlHKitAkQHiaNqG9tBUF0ReWwQMPIFFeKiVVNfoXbP0L1v0FZX9BO7Vp+kb2F5DBw5B4aIL21DHqQkFl0kpWpPVHqnbn611ni2NndhxfO/Y+Umov9trcb84599zrc2+CJLG4uKj29fVl+HQ0kUh8gKO4pJpu1fhVPT09rfKxwveu83llenq6TBJIkE+wAEMswCSfXuZG4ThE3oBAJX4VDw8P78zOzlbJBzouyPLyckZRlEkW4Sp5F8EW/v1LJycntzptOR0TRAhxgz9ohiTC7lRiYW7OzMyUqAN4FiSfzyMWLMgWwgz//eLBwcEcu5JGHmhbEMSIgYGBa/wNzVOIYGHms9nsTWqTtgRBj9Hf3/8DvegpwobGgfdKO9aikEtWV1evshjrFF4xAL6wdf6s18klrgQpFAo3+LBEPvYeHQSfcUF8Zsc4dhn84rDFC6e4iSuOBOlmMQycivJKQaIghoETUVoKsra2do2Tnu8pWnyXy+Vu2120FUR0rehNuiGAuqHKXfKYXZds28uwGD9S9MQAQ8ihkFhaXbQURHRVKkWXUR6JW+YoTS4jXGWTYgB3FmPm0XKThbAYCxQfmtraIAiG8HyYpJiAEbpoc50GQTCfQTHD3Oa6IBw7RoOe0wgCs5XUBeHY4XpkGBUw5Wmc670M+mQW5D+KL0jWzmHiWrcQMTseZ4wnBJTED/ajbygAarUabWp/0vb23/T06T6lUil6e/gMXbhwntLpFMmE3eYyH5aMGJIhyUCAn36+Rxsbv+vnYH9/n/5ice798mv9PVlwkqZbSAK9ixjESaVSua833o6zZ9+h8Y/GSCbsKecU9h3pc6O12nFLMcDOziPdpWTCUx0ZuIx8QY6dNRQuJJlRCDJCIQVBViYcWFWF/Ub6nEeaGzrMvUkrBgffoN7eXpIJB9YRWEggk0CXLn1IyWTS8hreHx+XG1ANIIhKAfAmW8DExCdNbjF85i39/bRkdxGoSQoQiPLF55/Rk73/6Zh7FIgjOyEzE6ggBhAmLAQuCDLS3d1d/TzJQTSdGuCAOkhBAUE0CiCO/LG5RZq2ZZmiw3UuXjxP77/3LklGk24hEKDy2316/HjX9h4kZEjtNzYe0sSnH8uMK/rwX0p1H4AYGLi1EuNlIAzul5XCo/JR4R9bJIkHDx66Tsd1a2GLkkRFmoXAKl41oLMDAz2nVuUF1MRy+q6USALb2/+QF3b+fUR+wxlyRclmsxo9L4r1lSd7e+QFWInPVKempsrGjNkd8pk9zka94PdUALvLXRz1bhfFr6Ly2De+/upLCjOsAaoqnz+XOTo6KpIEtwkzqJ/HURcEzyNYodsUU1A3bywmqD+54/nEIsWUnp6eW8Z5XRAUzyOWUMxAm9G7GP9uePqPVQUUM8xtbhAkhlZSNC8rsaoxm6OYwMG0qa1NgqDmiq0k8q6DNoosvQHLKkTOS1CsK21aIAA0/uLnrS5YCoI+mc3pW4pmsoa2XbG7aFu4C3Nis4piPLF0FYOW62XYrJaiFE/Qllwu17J239HykHw+P89m1tUVihDDLm68jOMFRN0silMxgKtFiN0oihsxgOtVmSsrK9dFsWvYV0pgBD+HOOjmP7W1TLVQKKj8x7B8RKVwUkba0Ko3scPTyu4wuhBcBIllu5sleF7qLqwFqwoCrXUVg9I5r5sjvN4MwUTHt8vA5ggsCurm/Zy01qc8McvXKSEMfN9QRVRJZ6gDG6qwCJjmvItJ8a7ZUMUOsa2G8RoRxX54qaZbNXEsi+fOZRag5HUbDKc8A7wyPuDbnAlUAAAAAElFTkSuQmCC",

    //  Agregar aquí los campos restantes...
  };

  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
    useValidation(initialState);

  const handleChange = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    let newErrors = { ...errors };

    for (let key in state) {
      if (!state[key]) {
        newErrors[key] = "Este campo no puede estar vacío";
      }
    }

    setErrors(newErrors);

    const errorCount = Object.keys(newErrors).length;

    console.log("Número de errores:", errorCount);
    if (errorCount === 0) {
      const stateJson = getStateAsJson();
      console.log("Datos enviados:", stateJson);
      CreateUser(stateJson, Validacion);
    } else {
      Toast.show({
        type: "error",
        text1: "Existen errores en el formulario",
        //text2: error.message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };

  const Progress = 0.4;

  const Validacion = (estado, message) => {
    //setValidado(estado);
    console.log(estado);
    if (estado === true) {
      Toast.show({
        type: "success",
        text1: message,
        visibilityTime: 4000, // Duración en milisegundos
      });
      OtpConsumer(state.email, ValidacionEnvioOtp);
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message,
        //text2: error.message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };
  const ValidacionEnvioOtp = (estado, message) => {
    //setValidado(estado);
    console.log(estado);
    if (estado === true) {
      Toast.show({
        type: "success",
        text1: message,
        visibilityTime: 4000, // Duración en milisegundos
      });
      navigation.navigate("VerifyIdentity", {
        email: state.email,
        phone: state.phone,
      });
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message,
        //text2: error.message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View style={CommonSpacingStyles.VerticalSpacing_10_16}>
        <BackCheckron navigation={navigation} />
      </View>
      <ScrollView style={CommonStyles.ScrollView}>
        <View style={CommonStyles.FullContainer}>
          <View style={[CommonStyles.ViewProgressBar, { marginVertical: 12 }]}>
            <LinearProgress
              style={CommonStyles.ProgressBar}
              value={Progress}
              color={Colors.NightBlue_800}
              variant="determinate"
              trackColor={Colors.NightBlue_200}
              animation={{ duration: 1500 }}
            />
            <Text>{Progress * 100}%</Text>
          </View>
          <View style={CommonSpacingStyles.VerticalSpacing_16}>
            <Text style={CommonTextStyles.Heding_H5}>Crear cuenta</Text>
            <Text style={CommonTextStyles.SemiBold_L}>
              Crear la cuenta con tus redes o ingresar tu correo electrónico
            </Text>
          </View>
          <View
            style={[
              CommonSpacingStyles.VerticalSpacing_32,
              { marginTop: 20, marginBottom: 24 },
            ]}
          >
            <AnotherLoginMethod />
            <View style={styles.AnotherLogin}>
              <View style={CommonStyles.Underscore} />
              <Text style={styles.TexAnotherLogin}>
                Crea cuenta con correo electrónico
              </Text>
              <View style={CommonStyles.Underscore} />
            </View>
            <View style={CommonStyles.container}>
              <View style={{}}>
                <ImageViewer
                  //Pase el URI de la imagen seleccionada al componente ImageViewer.
                  placeholderImageSource={FondImage}
                  selectedImage={selectedImage}
                  ancho={96}
                  alto={96}
                ></ImageViewer>
                <Button theme="ImagePicker" onPress={pickImageAsync} />
                <View
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    top: 73.41,
                  }}
                >
                  <SvgLogo theme="photoCamera" ancho={18.82} alto={16.94} />
                </View>
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Nombre(s)</Text>
                <TextInput
                  placeholder="Ingresa tu(s) nombre(s)"
                  value={state.name}
                  keyboardType="ascii-capable"
                  onChangeText={(value) => handleChange("name", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.name && styles.inputError,
                    ,
                  ]}
                />
                {errors.name ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.name}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Apellido(s)</Text>
                <TextInput
                  placeholder="Ingresa tu(s) apellido(s)"
                  value={state.lastName}
                  keyboardType="ascii-capable"
                  onChangeText={(value) => handleChange("lastName", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.lastName && styles.inputError,
                  ]}
                />
                {errors.lastName ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.lastName}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Fecha de nacimiento
                </Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    { borderBottomWidth: 1.5 },
                    errors.date && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="YYYY/MM/DD"
                    value={state.date}
                    maxLength={10}
                    keyboardType="phone-pad"
                    onChangeText={(value) => handleChange("date", value)}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Calendario"}></IconSvg>
                  </View>
                </View>
                {errors.date ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.date}</Text>
                ) : null}
              </View>
              <View style={{ width: "100%" }}>
                <View
                  key={"TelefonoCelular1"}
                  style={{
                    //width: "95%",
                    alignSelf: "flex-start",
                  }}
                >
                  <Text style={CommonStyles.TexContainer}>
                    Número de celular
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 49,
                  }}
                >
                  <View
                    style={{
                      width: "30%",
                      left: -15,
                    }}
                  >
                    <SelectorIndicativo />
                  </View>
                  <View style={[, { right: 0 }]}>
                    <TextInput
                      placeholder="Ingresa tu número de celular"
                      value={state.phone}
                      keyboardType="phone-pad"
                      onChangeText={(value) => handleChange("phone", value)}
                      style={[
                        CommonStyles.TexInput,
                        errors.phone && styles.inputError,
                      ]}
                    />
                    {errors.phone ? (
                      <Text style={CommonTextStyles.Body_S}>
                        {errors.phone}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Correo electrónico
                </Text>
                <TextInput
                  placeholder="Ingresa tu correo electrónico"
                  value={state.email}
                  keyboardType="email-address"
                  onChangeText={(value) => handleChange("email", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.email && styles.inputError,
                  ]}
                />
                {errors.email ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.email}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Nombre de usuario (Opcional)
                </Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    { borderBottomWidth: 1.5 },
                    errors.user && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa un nombre de usuario"
                    value={state.user}
                    keyboardType="ascii-capable"
                    onChangeText={(value) => handleChange("user", value)}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.user ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.user}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Contraseña</Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    { borderBottomWidth: 1.5 },
                    errors.password && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa tu contraseña"
                    value={state.password}
                    onChangeText={(value) => handleChange("password", value)}
                    secureTextEntry={true}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.password ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.password}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Confirmar Contraseña
                </Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    { borderBottomWidth: 1.5 },
                    errors.confirmPassword && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Confirma tu contraseña"
                    value={state.confirmPassword}
                    onChangeText={(value) =>
                      handleChange("confirmPassword", value)
                    }
                    secureTextEntry={true}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.confirmPassword ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.confirmPassword}
                  </Text>
                ) : null}
              </View>
            </View>
            <CheckedTerms
              navigation={navigation}
              onPres={handleSubmit}
              disabled={!errors}
            />
            {/* <Button title="Registrarse" onPress={handleSubmit} /> */}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  AnotherLogin: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  TexAnotherLogin: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    alignItems: "center",
    letterSpacing: 0.0044,
    color: TexColor.AnotherLogin,
    paddingHorizontal: 15,
  },
  inputError: {
    borderColor: "red",
  },
});
