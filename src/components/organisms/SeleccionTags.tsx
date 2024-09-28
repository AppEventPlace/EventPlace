import React from "react";
import { View } from "react-native";
import Seleccionable from "../Seleccionable";

interface IPreference {
  preference_id: number;
  preference_name_en: string;
  preference_name_es: string;
  preference_status: boolean;
  preference_description: string;
}

interface SeleccionTagsProps {
  OpcSeleccion: IPreference[];
}

const SeleccionTags: React.FC<SeleccionTagsProps> = ({ OpcSeleccion }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {OpcSeleccion
        .filter((Selec) => Selec.preference_status) 
        .map((Selec) => (
          <Seleccionable
            key={Selec.preference_id}
            id={Selec.preference_id.toString()}
            label={Selec.preference_name_es} 
          />
        ))}
    </View>
  );
};

export default SeleccionTags;
