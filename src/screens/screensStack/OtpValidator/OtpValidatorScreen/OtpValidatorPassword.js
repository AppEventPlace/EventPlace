import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import OtpCard from "@/components/organisms/OtpCard";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import Toast from "react-native-toast-message";

const OtpValidatorPassword = ({ navigation }) => {
  useEffect(() => {
    Toast.show({
      type: "success",
      text1: "Creación exitosa",
      visibilityTime: 2000, // Duración en milisegundos
    });
  });
  return (
    <SafeAreaView
      style={[
        CommonStyles.AreaView,
        { backgroundColor: Colors.Primary, justifyContent: "center" },
      ]}
    >
      <View style={CommonStyles.FullContainer}>
        <OtpCard
          onPressReload={""}
          navigation={navigation}
          onPressNav={"NewPass"}
          Title={"Ingreso de Token"}
          label={
            "Ingresa el código de seguridad enviado a tu correo electrónico."
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpValidatorPassword;
