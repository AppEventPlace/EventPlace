import React from "react";
import { Text, View } from "react-native";
import Seleccionable from "./Seleccionable";

const SeleccionTags = ({ OpcSeleccion }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {OpcSeleccion.map((Selec) => (
        <Seleccionable key={Selec.name} id={Selec.name} label={Selec.label} />
      ))}
    </View>
  );
};
export default SeleccionTags;
