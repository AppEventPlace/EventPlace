import React from "react";
import { View, Text, Pressable } from "react-native";
import SvgLogo from "../assets/LogoSVG";
const Direccionador = ({ label, logo }) => {
  return (
    <View
      style={{
        //display: "flex",
        width: "100%",
        maxWidth: 700,
        height: 64,
        backgroundColor: "#FBFBFB",
        borderRadius: 12,
        marginTop: 5,
        // marginHorizontal: 10,
        alignSelf: "center",
        elevation: 5,
      }}
    >
      <Pressable onPress={() => alert("prueba")}>
        <View
          style={{
            width: "100%",
            marginLeft: 15,

            alignItems: "center",
            maxHeight: 64,
            display: "flex",
            flexDirection: "row",
            height: 64,
          }}
        >
          <SvgLogo theme={logo} />
          <View style={{ marginTop: -2, width: "70%", marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{label}</Text>
          </View>
          <SvgLogo theme={"Next"} />
        </View>
      </Pressable>
    </View>
  );
};

export default Direccionador;
