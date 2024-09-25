import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import Button from "../CommonComponents/Button";
import { Color_Button } from "../CommonStyles/CommonButtonStyles";
import CommonStyles from "../CommonStyles/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import OtpValidate from "@/Services/UsersServices/OtpValider";
import Toast from "react-native-toast-message";

const OtpCard = ({
  onPressReload,
  Title,
  label,
  onPressNav,
  navigation,
  email,
}) => {
  let datosIni = ["", "", "", "", "", ""];
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(datosIni);
  const [validado, setValidado] = useState(false);
  const handleTextChange = (text, index) => {
    // Mover automáticamente el foco al siguiente input si se ha ingresado un carácter
    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
      // setOtp((otp[index] = text));
    } else if (
      text.length === 0 &&
      index !== 0 &&
      index < inputRefs.current.length
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const Validacion = (estado, message) => {
    //setValidado(estado);
    console.log(estado);
    if (estado === true) {
      Toast.show({
        type: "success",
        text1: message,
        visibilityTime: 4000, // Duración en milisegundos
      });
      navigation.navigate(onPressNav, { email: email });
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message,
        //text2: error.message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };

  const ValidaciondDiligencia = () => {
    setValidado(!otp.includes(""));
  };
  return (
    <View style={CommonStyles.container}>
      <View style={CommonSpacingStyles.VerticalSpacing_56}>
        <View style={CommonSpacingStyles.VerticalSpacing_24}>
          <Text style={[CommonTextStyles.Heding_H5, { alignSelf: "center" }]}>
            {Title}
          </Text>
          <Text
            style={[
              CommonTextStyles.Body_L,
              { alignSelf: "center", textAlign: "center" },
            ]}
          >
            {label}
          </Text>
        </View>
        <View style={CommonSpacingStyles.VerticalSpacing_16}>
          <View style={styles.InputContainer}>
            {otp.map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.input}
                onChangeText={(text) => [
                  handleTextChange(text, index),

                  (otp[index] = text),
                  console.log(otp),
                  ValidaciondDiligencia(),
                  console.log(validado),
                ]}
                keyboardType="numeric"
                maxLength={1}
                selectTextOnFocus={true}
                secureTextEntry={true}
                // Permitir seleccionar texto al enfocar
              />
            ))}
          </View>
          <View style={styles.Height}>
            <Button
              theme="Generico"
              label="Solicitar nuevo código"
              onPress={onPressReload}
              color={Color_Button.Default}
            />
          </View>
        </View>
        <View style={CommonStyles.BotonContainer}>
          <Button
            label="Continuar"
            color={Color_Button.Default}
            theme="Checked"
            disabled={validado}
            onPress={() => [
              OtpValidate(
                email,
                otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5],
                Validacion
              ),
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    columnGap: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    maxWidth: 40,
    height: 47,
    textAlign: "center",
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Height: {
    height: 25,
  },
});
export default OtpCard;
