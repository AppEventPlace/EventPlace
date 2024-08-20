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

interface ForgPassProps {
  navigation: any;
}

const ForgPassword: React.FC<ForgPassProps> = ({ navigation }) => {
  const [correo, setCorreo] = useState("");
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
            onChangeText={(value) => setCorreo(value)}
          />
          <View style={{ height: 43 }}>
            <Button
              theme="StyleBoton"
              label="Enviar"
              onPress={() => [
                navigation.navigate("OtpAdviceRecOtp"),
                OtpConsumer(correo),
              ]}
              color={Colors.NightBlue_600}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ForgPassword;
