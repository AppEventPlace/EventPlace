import React from "react";
import { View } from "react-native";
import SvgLogo from "../assets/LogoSVG";

const CalificacionEst = ({ califi }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", width: 75 }}>
      <SvgLogo
        theme={"Calificación"}
        colEstrella={califi >= 1 ? "#141416" : "#BDBDBD"}
      />
      <SvgLogo
        theme={"Calificación"}
        colEstrella={califi >= 2 ? "#141416" : "#BDBDBD"}
      />
      <SvgLogo
        theme={"Calificación"}
        colEstrella={califi >= 3 ? "#141416" : "#BDBDBD"}
      />
      <SvgLogo
        theme={"Calificación"}
        colEstrella={califi >= 4 ? "#141416" : "#BDBDBD"}
      />
      <SvgLogo
        theme={"Calificación"}
        colEstrella={califi >= 5 ? "#141416" : "#BDBDBD"}
      />
    </View>
  );
};

export default CalificacionEst;
