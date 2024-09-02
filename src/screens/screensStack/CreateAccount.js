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

/*--------    FondImage= Imagen inicial, Requerida para usar ImageViewer   --------*/
const FondImage = require("../../components/assets/Seleccionar_Foto.jpg");
/*----------------------------------------------------------------------------------*/

/*----------------------------  CreateAccount  -----------------------------
Componente Diseñado para crear un formulario de registro de nuevos usuarios 
---------------------------------------------------------------------------*/
const CreateAccount = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    handleChange(
      "fotoPerfilBase64",
      "UklGRvYpBQBXRUJQVlA4INIiAwCQ+wedASoABAAEPjEUiUMiISEU+e5EIAMEtDduYTMPssKVm0GDTRHGnThVA7kQ5qnGkQYreUXp5f+i/w37J/vf3lHmvB/4n/M/4b+5/97/TfL5w31D+Cvuv+Q/tP9y/5n+e+XX/D/z37tf4D2D6w/5/+q/dT/AfDj5b+s/53+8/5X/qf4D///+n7sf8P/jf5v9xf3/+2X6u/5n+n/dj9///N+gf8V/ln+R/tP+T/6n+B///r+tr9wveJ/kP/P/4/2x+An9N/wX/c/0H+q/+n+y+oT/df9r/WfvB8vP7x/uf+//nf9R/9/oD/n3+H/8H+e/1//w/3vzzf//3Lf3l//vuEf1r/Yf+3/afv/8vX/L/+f+1/3n///832h/07/V/+3/Tf7X/+/+H7Ef59/dv+f+0H/+/3v0Af+j/+f9n4of4B/2f///4PcA/4P/59hfuV/i/8Z+znvk+Sfx/+N/wn+Z/z3"
    );
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

    //  Agregar aquí los campos restantes...
  };

  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
    useValidation(initialState);

  const handleChange = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = () => {
  //   console.log(state);
  //   if (validarCampos()) {
  //     console.log("Datos enviados:", {
  //       nombres,
  //       apellidos,
  //       celular,
  //       correo,
  //       usuario,
  //       contrasena,
  //     });
  //     // Acción de registro, por ejemplo, enviar los datos a un servidor
  //   }
  // };

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
    const stateJson = getStateAsJson();
    console.log("Datos enviados:", stateJson);
    CreateUser(stateJson);
  };

  const Progress = 0.4;

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
              <View style={{ marginTop: 24 }}>
                <ImageViewer
                  //Pase el URI de la imagen seleccionada al componente ImageViewer.
                  placeholderImageSource={FondImage}
                  selectedImage={selectedImage}
                  ancho={96}
                  alto={96}
                ></ImageViewer>
                <Button theme="ImagePicker" onPress={pickImageAsync} />
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Nombre(s)</Text>
                <TextInput
                  placeholder="Ingresa tu(s) nombre(s)"
                  value={state.name}
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
                    errors.date && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="YYYY/MM/DD"
                    value={state.date}
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

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Número de celular</Text>
                <TextInput
                  placeholder="Ingresa tu número de celular"
                  value={state.phone}
                  onChangeText={(value) => handleChange("phone", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.phone && styles.inputError,
                  ]}
                />
                {errors.phone ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.phone}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Correo electrónico
                </Text>
                <TextInput
                  placeholder="Ingresa tu correo electrónico"
                  value={state.email}
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
                    errors.user && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa un nombre de usuario"
                    value={state.user}
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
            <CheckedTerms navigation={navigation} onPres={handleSubmit} />
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
