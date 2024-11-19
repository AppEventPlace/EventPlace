/*import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Lib para el acceso a la interfaz de usuario
import ImageViewer from "../../../components/CommonComponents/ImageViewer";
import { StatusBar } from "expo-status-bar";
// --> Importar Estilos comunes
import CommonStyles, {
  Colors,
  TexColor,
} from "../../../components/CommonStyles/CommonStyles";
import CommonSpacingStyles from "../../../components/CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../../../components/CommonStyles/CommonTextStyles";

// --> Importar Componentes comunes
import IconSvg from "../../../assets/IconSvg";
import Button from "../../../components/CommonComponents/Button";
import CheckedTerms from "../../../components/CommonComponents/CheckedTerms";
import BackCheckron from "../../../components/CommonComponents/BackCheckron";
import AnotherLoginMethod from "../../../components/CommonComponents/AnotherLoginMethod";

// --> Importar Validación de estructura
import useValidation from "../ValidationCreateAccount";

// --> Importar Validación de estructura
import CreateUser from "../../../Services/UsersServices/CreateUser";

// --> Importar Api para registrar o crear un nuevo Usuario
import { LinearProgress } from "@rneui/themed";
import Toast from "react-native-toast-message";
import SvgLogo from "@/assets/LogoSVG";
import SelectorIndicativo from "@/constants/IndicativosTel";
import { startGeofencingAsync } from "expo-location";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";
//import CreateAccount, { RootParamList } from './CreateAccount';
import { ICreateAccount } from "@/interfaces/CreateAccount-Interface/ICreateAccount";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//import CreateAccount from './CreateAccount';
import { InitialState } from "../../../interfaces/CreateAccount-Interface/ICreateAccount";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
const FondImage = require("../../../assets/Seleccionar_Foto.jpg");

interface CreateAccountProps {
  navigation: NavigationProp<ParamListBase>;
  InitialState: ICreateAccount;
  Validacion: any;
}

const CreateAccountView: React.FC<CreateAccountProps> = ({
  navigation,
  InitialState,
  Validacion,
}) => {
  navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState("");
  const [imageB64, setImageB64] = useState("");
  const Progress = 0.4;
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      //Opciones del selector de imágenes a launchImageLibraryAsync()
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
      setImageB64(result.assets[0].base64!);
      handleChange("fotoPerfilBase64", result.assets[0].base64!);
    }
    //Si el usuario no elige una imagen, muestra una alerta.
    else {
      alert("No seleccionaste ninguna imagen.");
    }
  };
  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
    useValidation(InitialState);

  const handleChange = (name: string, value: string) => {
    setState((prevState: any) => ({ ...prevState, [name]: value }));
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
                  <SvgLogo theme="photoCamera" ancho={"18.82"} alto={"16.94"} />
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
                    keyboardType="numbers-and-punctuation"
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
            {/* <Button title="Registrarse" onPress={handleSubmit} /> */ /*}
        /*  </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
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
export default CreateAccountView;*/
