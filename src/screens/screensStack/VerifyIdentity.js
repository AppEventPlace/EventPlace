import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";
import OtpCard from "@/components/organisms/OtpCard";

const VerifyIdentity = ({ navigation }) => {
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
          onPressNav={"Gustos"}
          Title={"Para verificar tu identidad"}
          label={
            "Hemos enviado al número +57 3018451234 o/y al correo" +
            "mail@mail.com un mensaje que contiene el código de seguridad de" +
            "6 dígitos el cual debes ingresar a continuación."
          }
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default VerifyIdentity;
