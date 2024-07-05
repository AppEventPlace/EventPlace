import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../CommonStyles/CommonStyles";
import SvgLogo from "../assets/LogoSVG";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";

const BotonFlotante = ({ navigation }) => {
  const [presionado, setPresionado] = useState(false);
  return (
    <View style={{ alignItems: "flex-end", gap: 8 }}>
      {presionado && (
        <View
          style={{
            width: 157,
            height: 184,
            backgroundColor: Colors.Primary,
            borderRadius: 12,
            paddingVertical: 16,
            paddingRight: 10,
            alignItems: "flex-end",
            gap: 16,
            elevation: 5,
            // iOS
            shadowColor: "#000", // -->  Sombra
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
          }}
        >
          <Botones
            label={"Guardar"}
            logo={"Guardar"}
            onPress={() => navigation.navigate("")}
          />
          <Botones
            label={"Previsualizar"}
            logo={"Previsualizar"}
            onPress={() => navigation.navigate("Filtros")}
          />
          <Botones
            label={"Publicar"}
            logo={"Publicar"}
            onPress={() => navigation.navigate("")}
          />
        </View>
      )}
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 48,
          elevation: 5,
          // iOS
          shadowColor: "#000", // -->  Sombra
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? Colors.NightBlue_800
                : Colors.NightBlue_600,
            },
            {
              width: 44,
              height: 44,
              borderRadius: 48,
              justifyContent: "center",
            },
          ]}
          onPress={() => [setPresionado(!presionado)]}
        >
          <View style={{ alignSelf: "center" }}>
            <SvgLogo
              theme={presionado ? "Menos" : "Mas"}
              color={Colors.Blanco}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const Botones = ({ logo, label, onPress }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? Colors.NightBlue_200 : null },
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            borderRadius: 40,
            paddingLeft: 10,
          },
        ]}
        onPress={onPress}
      >
        <Text style={CommonTextStyles.Body_S}>{label}</Text>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: Colors.NightBlue_200,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SvgLogo theme={logo} color={Colors.NightBlue_600} />
        </View>
      </Pressable>
    </View>
  );
};
export default BotonFlotante;
