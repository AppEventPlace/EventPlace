import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import OtpCard from "@/components/organisms/OtpCard";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";
import SvgLogo from "@/assets/LogoSVG";

const OtpValidatorPassword = ({ route }) => {
  const navigation = useNavigation();
  const { email } = route.params;
  const { UserID } = route.params;

  const Validacion = (estado, message) => {
    if (estado === true) {
      Toast.show({
        type: "success",

        text1: message,
        visibilityTime: 4000, // Duración en milisegundos
      });
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };
  return (
    <SafeAreaView
      style={[
        CommonStyles.AreaView,
        { backgroundColor: Colors.Primary, justifyContent: "center" },
      ]}
    >
      <View style={[CommonStyles.FullContainer, { gap: 28 }]}>
        <View
          style={{
            gap: 28,
            width: "100%",
            height: 96,
            alignItems: "center",
          }}
        >
          <SvgLogo
            theme="Lock"
            progress={0}
            color={Colors.NightBlue_600}
            ancho="64"
            alto="84"
          />
        </View>
        <OtpCard
          onPressReload={() => [OtpConsumer(email, UserID, Validacion)]}
          navigation={navigation}
          onPressNav={"NewPass"}
          Title={"Ingreso de Token"}
          label={
            "Ingresa el código de seguridad enviado a tu correo electrónico."
          }
          email={email}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpValidatorPassword;
