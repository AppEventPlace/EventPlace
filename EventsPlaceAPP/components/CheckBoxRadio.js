import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

const CustomCheckBox = ({ Title, Options }) => {
  const [isChecked1, setChecked1] = React.useState(false);
  const [isChecked2, setChecked2] = React.useState(false);

  const toggleCheckBox1 = () => {
    setChecked1(!isChecked1);
    if (isChecked2) {
      setChecked2(false); // Desmarcar el segundo CheckBox si se marca el primero
    }
  };

  const toggleCheckBox2 = () => {
    setChecked2(!isChecked2);
    if (isChecked1) {
      setChecked1(false); // Desmarcar el primer CheckBox si se marca el segundo
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Title}</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBox1Container}>
          <CheckBox
            textStyle={styles.checkBoxText}
            title={Options[0]}
            checked={isChecked1}
            checkedColor="#6979F8"
            uncheckedColor="#6979F8"
            onPress={toggleCheckBox1}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
        <CheckBox
          textStyle={styles.checkBoxText}
          title={Options[1]}
          checked={isChecked2}
          checkedColor="#6979F8"
          uncheckedColor="#6979F8"
          onPress={toggleCheckBox2}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: "#0F172A",
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox1Container: {
    width: "100%",
    maxWidth: 200,
  },
  checkBoxText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#333333",
  },
});

export default CustomCheckBox;
