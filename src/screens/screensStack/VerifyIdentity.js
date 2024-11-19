import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";
import OtpCard from "@/components/organisms/OtpCard";
import { store } from "@/Redux/store";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";

const VerifyIdentity = ({ route, navigation }) => {
  const email = store.getState().secureData.email;
  const phone = store.getState().secureData.phone;
  const UserID = store.getState().auth.idUser;

  console.log(email, phone);

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
      <View style={CommonStyles.FullContainer}>
        <OtpCard
          onPressReload={() => [OtpConsumer(Validacion)]}
          navigation={navigation}
          onPressNav={"Gustos"}
          Title={"Para verificar tu identidad"}
          label={
            "Hemos enviado al número " +
            phone +
            " o/y al correo " +
            email +
            " un mensaje que contiene el código de seguridad de " +
            "6 dígitos el cual debes ingresar a continuación."
          }
          email={email}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default VerifyIdentity;
