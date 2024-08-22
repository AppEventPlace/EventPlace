import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import Button from "../CommonComponents/Button";
import { Color_Button } from "../CommonStyles/CommonButtonStyles";
import CommonStyles from "../CommonStyles/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import OtpValidate from "@/Services/UsersServices/OtpValider";

const OtpCard = ({ onPressReload, Title, label, onPressNav, navigation }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState("");
  const [validado, setValidado] = useState(false);
  const handleTextChange = (text, index) => {
    // Mover automáticamente el foco al siguiente input si se ha ingresado un carácter
    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const Validacion = ({ correo, otp }) => {};
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
            {Array.from({ length: 6 }).map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.input}
                onChangeText={(text) => [
                  handleTextChange(text, index),
                  setOtp(otp + text),
                  console.log(otp),
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
            theme="StyleBoton"
            onPress={() => [
              navigation.navigate(onPressNav),
              OtpValidate("appeventplace@gmail.com", otp),
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
