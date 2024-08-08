import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

const SimpleCheckBox = ({ Options }) => {
  const [checkedIndex, setCheckedIndex] = React.useState(-1);

  const handleCheckBoxChange = (index) => {
    setCheckedIndex(index === checkedIndex ? -1 : index);
  };

  return (
    <View style={styles.container}>
      {Options.map((option, index) => (
        <View key={index} style={styles.checkBoxContainer}>
          <CheckBox
            textStyle={styles.checkBoxText}
            title={option}
            checked={index === checkedIndex}
            checkedColor="#6979F8"
            uncheckedColor="#6979F8"
            onPress={() => handleCheckBoxChange(index)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.checkBoxItem}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Alinea los CheckBox a la izquierda
  },
  checkBoxItem: {
    marginLeft: 0, // Asegura que no haya margen a la izquierda
    marginRight: 0, // Asegura que no haya margen a la derecha
  },
  checkBoxText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#333333",
  },
});

export default SimpleCheckBox;
