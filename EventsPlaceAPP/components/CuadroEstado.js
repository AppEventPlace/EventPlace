import React from "react";
import { View, Text } from "react-native";
import SvgLogo from "../assets/LogoSVG";
const CuadroEstado = ({ label, cantidad }) => {
  return (
    <View
      onPress={() => alert("prueba")}
      style={{
        display: "flex",
        width: 160,
        height: 140,
        backgroundColor: "#E9EAFE",
        borderRadius: 12,
        marginTop: 5,
        marginHorizontal: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        <SvgLogo
          theme={"FotoGenerica"}
          style={{ width: 34, height: 34 }}
          ancho={40}
          alto={40}
        />
      </View>
      <View
        style={{ width: 85, height: 35, marginLeft: 10, marginVertical: 5 }}
      >
        <Text>{label}</Text>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 10 }}
      >
        <Text
          style={{ color: "#828282", marginTop: 5, marginLeft: 10, width: 130 }}
        >
          Cantidad
        </Text>
        <Text style={{ color: "#828282", marginTop: 5, marginLeft: 1 }}>
          {cantidad}
        </Text>
      </View>
    </View>
  );
};
export default CuadroEstado;
