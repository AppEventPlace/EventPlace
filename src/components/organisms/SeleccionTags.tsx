import React, { useState } from "react";
import { View } from "react-native";
import Seleccionable from "../atoms/Seleccionable";


interface IPreference {
  preference_id: number;
  preference_name_en: string;
  preference_name_es: string;
  preference_status: boolean;
  preference_description: string;
}

interface SeleccionTagsProps {
  OpcSeleccion: IPreference[];
  onSelectionChange: (selectedIds: number[]) => void; 
}

const SeleccionTags: React.FC<SeleccionTagsProps> = ({ OpcSeleccion, onSelectionChange }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]); 

  const handleSelectionToggle = (id: number) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter(selectedId => selectedId !== id) 
      : [...selectedIds, id]; 

    setSelectedIds(newSelectedIds);
    onSelectionChange(newSelectedIds);
  };

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
            selected={selectedIds.includes(Selec.preference_id)} 
            onToggle={() => handleSelectionToggle(Selec.preference_id)} 
          />
        ))}
    </View>
  );
};

export default SeleccionTags;
