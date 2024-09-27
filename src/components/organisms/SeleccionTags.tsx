import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Seleccionable from "../Seleccionable";

interface IPreference {
  preference_id: number;
  preference_name: string;
  preference_status: boolean;
  created_at: string;
  updated_at: string;
}

interface SeleccionTagsProps {
  OpcSeleccion: IPreference[];
}

const preferenceLabels: Record<number, string> = {
  1001: "Familia",
  1002: "Comunidad y Cultura",
  1003: "Iniciativa Social",
  1004: "Autos, Barcos y Aeronáutica",
  1005: "Cine, Medios y Entretenimiento",
  1006: "Gobierno y Política",
  1007: "Salud y Bienestar",
  1008: "Pasatiempos e Intereses Especiales",
  1009: "Música",
  1010: "Artes Escénicas",
  1011: "Moda y Belleza",
  1012: "Comida y Bebidas",
  1013: "Hogar y Estilo de Vida",
  1014: "Actividades Escolares",
  1015: "Educación",
  1016: "Ciencia y Tecnología",
  1017: "Deportes y Ejercicio",
  1018: "Viajes y Actividades al Aire Libre",
  1019: "Festivales y Actividades Estacionales",
};

const getLabelByPreferenceId = (preferenceId: number): string => {
  return preferenceLabels[preferenceId] || "Unknown Preference";
};

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
      {OpcSeleccion.map((Selec) => (
        <Seleccionable
          key={Selec.preference_id}
          id={Selec.preference_id.toString()}
          label={getLabelByPreferenceId(Selec.preference_id)}
        />
      ))}
    </View>
  );
};

export default SeleccionTags;
