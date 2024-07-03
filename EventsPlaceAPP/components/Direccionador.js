import React from "react";
import { View, Text, Pressable } from "react-native";
import SvgLogo from "../assets/LogoSVG";
import CommonStyles, { Colors } from "../CommonStyles/CommonStyles";
const Direccionador = ({ label, logo, color, onPress }) => {
  return (
    <View
      style={({ pressed }) => [
        {
          //display: "flex",
          width: "100%",
          maxWidth: 700,
          height: 64,

          borderRadius: 12,
          marginTop: 5,
          // marginHorizontal: 10,
          alignSelf: "center",
          elevation: 5,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          CommonStyles.container,
          { paddingVertical: 0 },
          { backgroundColor: pressed ? Colors.Grey_04 : Colors.Blanco },
        ]}
      >
        <View
          style={{
            width: "100%",
            marginLeft: 15,

            alignItems: "center",
            maxHeight: 64,
            display: "flex",
            flexDirection: "row",
            height: 64,
            gap: 8,
          }}
        >
          <SvgLogo theme={logo} color={color} />
          <View style={{ marginTop: -2, width: "70%", marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{label}</Text>
          </View>
          <SvgLogo theme={"Next"} color={color} />
        </View>
      </Pressable>
    </View>
  );
};

export default Direccionador;
