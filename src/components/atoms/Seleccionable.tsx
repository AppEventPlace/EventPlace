import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import { Colors } from "../CommonStyles/CommonStyles";


interface SeleccionableProps {
  id: string; 
  label: string; 
  selected: boolean; 
  onToggle: () => void; 
}

const Seleccionable: React.FC<SeleccionableProps> = ({ id, label, selected, onToggle }) => {
  return (
    <View
      key={id}
      style={[
        styles.Seleccionable,
        {
          backgroundColor: selected ? Colors.NightBlue_600 : Colors.NightBlue_200,
        },
      ]}
    >
      <Pressable
        style={styles.button}
        onPress={onToggle} 
      >
        <Text
          style={[
            CommonTextStyles.Subtitle_16,
            { color: selected ? Colors.Blanco : Colors.NightBlue_600 },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Seleccionable: {
    height: 43,
    borderRadius: 50,
    alignSelf: "flex-start",
    padding: 3,
    marginTop: 10,
    marginHorizontal: 3,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
});

export default Seleccionable;
