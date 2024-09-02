import BackCheckron from "@/components/CommonComponents/BackCheckron";
import Button from "@/components/CommonComponents/Button";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";
import useValidation from "../../ValidationCreateAccount";
import { err } from "react-native-svg";

interface ForgPassProps {
  navigation: any;
}

const ForgPassword: React.FC<ForgPassProps> = ({ navigation }) => {
  const ValidateEmail = {
    email: "",
  };
  const [activo, setActivo] = useState(false);

  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
    useValidation(ValidateEmail);

  const handleChange = (name: string, value: any) => {
    setState((prevState: JSON) => ({ ...prevState, [name]: value }));
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
    const stateJson = getStateAsJson();
    console.log("Datos enviados:", stateJson);
    //CreateUser(stateJson);
  };

  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View
        style={[
          CommonSpacingStyles.VerticalSpacing_10_16,
          { display: "flex", flexDirection: "row", height: 30, width: "100%" },
        ]}
      >
        <View style={{ flex: 2 }}>
          <BackCheckron navigation={navigation} />
        </View>
      </View>
      <View
        style={[CommonStyles.FullContainer, { paddingVertical: 10, gap: 28 }]}
      >
        <View style={{ gap: 28 }}>
          <Text style={CommonTextStyles.Heding_H5}>Olvide mi contraseña</Text>
          <Text style={CommonTextStyles.Body_L}>
            Recuerda que este proceso restablecerá la contraseña y
            posteriormente enviaremos un código de seguridad a tu correo
            electrónico.
          </Text>
        </View>
        <View style={[CommonStyles.container, { gap: 32 }]}>
          <Text
            style={[CommonTextStyles.SemiBold_M, { alignSelf: "flex-start" }]}
          >
            Correo electronico
          </Text>
          <Input
            placeholder="Ingresa tu correo electrónico"
            value={state.email}
            onChangeText={(value) => [handleChange("email", value)]}
            style={[
              CommonStyles.TexInput,
              errors.email && styles.inputError,
              ,
            ]}
          />
          {errors.email ? (
            <Text style={CommonTextStyles.Body_S}>{errors.email}</Text>
          ) : null}
          <View style={{ height: 43 }}>
            <Button
              theme="Checked"
              label="Enviar"
              disabled={state.email !== "" && !errors.email}
              onPress={() => [
                navigation.navigate("OtpAdviceRecOtp", { email: state.email }),
                OtpConsumer(state.email),
              ]}
              color={Colors.NightBlue_600}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputError: {
    borderColor: "red",
  },
});
export default ForgPassword;
