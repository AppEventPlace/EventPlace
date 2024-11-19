import React from "react";
import { View, StyleSheet } from "react-native";

// -- >  Importar componente propio Button
import Button from "./Button";

const BackCheckron = ({ navigation }) => {
  return (
    <View style={styles.HeaderContainer}>
      <Button
        theme="BackCheckron"
        label="Atras"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    height: 35,
    width: "100%",
  },
});
export default BackCheckron;
