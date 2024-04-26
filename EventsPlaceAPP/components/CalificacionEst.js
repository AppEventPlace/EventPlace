import React from "react";
import { View } from "react-native";
import SvgLogo from "../assets/LogoSVG";

const CalificacionEst = ({ califi }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <SvgLogo theme={califi >= 1 ? "Calificación" : "EstrellaVacia"} />
      <SvgLogo theme={califi >= 2 ? "Calificación" : "EstrellaVacia"} />
      <SvgLogo theme={califi >= 3 ? "Calificación" : "EstrellaVacia"} />
      <SvgLogo theme={califi >= 4 ? "Calificación" : "EstrellaVacia"} />
      <SvgLogo theme={califi >= 5 ? "Calificación" : "EstrellaVacia"} />
    </View>
  );
};

export default CalificacionEst;
