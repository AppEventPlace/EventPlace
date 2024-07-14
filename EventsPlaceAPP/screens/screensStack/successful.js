import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from "react-native";

import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";
import CommonSpacingStyles from "../../CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../../CommonStyles/CommonTextStyles";
import { Color_Button } from "../../CommonStyles/CommonButtonStyles";

import Button from "../../components/CommonComponents/Button";
import IconSvg from "../../assets/IconSvg";

// --> Importar Api para registrar o crear un nuevo Usuario
import { LinearProgress } from "@rneui/themed";
const Progress = 1;
const Successful = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View
        style={[
          CommonStyles.ViewProgressBar,
          { marginVertical: 12, paddingHorizontal: 16 },
        ]}
      >
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
      <View
        style={[
          CommonStyles.FullContainer,
          { height: "100%", justifyContent: "center" },
        ]}
      >
        <View style={CommonStyles.container}>
          <View style={CommonSpacingStyles.VerticalSpacing_32}>
            <View
              style={[
                CommonSpacingStyles.VerticalSpacing_24,
                { alignItems: "center" },
              ]}
            >
              <IconSvg theme="Well_done" />
              <Text style={CommonTextStyles.Heding_H14}>¡Estupendo!</Text>
              <Text
                style={[CommonTextStyles.Heding_H6, { textAlign: "center" }]}
              >
                Has completado tu registro con éxito.
              </Text>
            </View>
            <Text style={[CommonTextStyles.Heding_H6, { textAlign: "center" }]}>
              Ahora puedes buscar o crear eventos dentro de la plataforma
              ¡Bienvenido!
            </Text>
            <View style={CommonStyles.BotonContainer}>
              <Button
                label="Continuar"
                color={Color_Button.Default}
                theme="StyleBoton"
                onPress={() => alert("Iniciar sesión")}
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Successful;
