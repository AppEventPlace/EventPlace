import BackCheckron from "@/components/CommonComponents/BackCheckron";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import NavButton from "../../../components/atoms/NavButton";
import { useNavigation } from "@react-navigation/native";
import IconSvg from "@/components/assets/IconSvg";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import Button from "@/components/CommonComponents/Button";

const OtpAdviceRecOtp = ({ route }) => {
  const navigation = useNavigation();

  const { email } = route.params;

  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View
        style={[CommonStyles.FullContainer, { paddingVertical: 10, gap: 48 }]}
      >
        <View
          key={"Container"}
          style={[
            CommonStyles.container,
            {
              backgroundColor: Colors.Primary,
              gap: 48,
              marginTop: Dimensions.get("window").height * 0.25,
            },
          ]}
        >
          <View key={"LogoSend"}>
            <IconSvg
              key={"IconSend"}
              theme="Send"
              progress={0}
              IconColor={Colors.WellDoneGreen}
              Icon_Height={"61"}
              Icon_width={"70"}
            />
          </View>
          <Text
            key={"TextPrincipal"}
            style={[
              CommonTextStyles.Heding_H6,
              { color: Colors.TexColor, textAlign: "center" },
            ]}
          >
            Hemos enviado un token de seguridad a tu correo electrónico
            registrado.
          </Text>
          <Text
            key={"TextSecond"}
            style={[CommonTextStyles.Body_XL, { textAlign: "center" }]}
          >
            Por favor, revisa la bandeja de entrada de tu correo y sigue las
            instrucciones para recuperar tu clave.
          </Text>
          <View style={{ height: 43 }}>
            <Button
              theme="StyleBoton"
              label="Continuar"
              onPress={() => [
                navigation.navigate("OtpValidatorPassword", { email: email }),
              ]}
              color={Colors.NightBlue_600}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default OtpAdviceRecOtp;
