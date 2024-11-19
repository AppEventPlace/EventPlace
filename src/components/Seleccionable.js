import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../components/CommonStyles/CommonStyles";
import CommonTextStyles from "../components/CommonStyles/CommonTextStyles";

const Seleccionable = ({ id, label }) => {
  const [Seleccionado, setSeleccionado] = useState(false);
  return (
    <View
      key={id}
      style={[
        styles.Seleccionable,
        {
          backgroundColor: Seleccionado
            ? Colors.NightBlue_600
            : Colors.NightBlue_200,
        },
      ]}
    >
      <Pressable
        key={id}
        style={styles.button}
        onPress={() => {
          setSeleccionado((current) => !current);
        }}
      >
        <Text
          style={[
            CommonTextStyles.Subtitle_16,
            { color: Seleccionado ? Colors.Blanco : Colors.NightBlue_600 },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  Seleccionable1: {
    //display: "flex",
    height: 43,
    borderRadius: 50,
    //alignItems: "center",
    alignSelf: "flex-start",
    //justifyContent: "center",
    padding: 3,
    backgroundColor: "#E9EAFE",
    marginTop: 10,
    marginHorizontal: 3,
  },
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
    //justifyContent: "center",
    flexDirection: "row",
    // borderWidth: 1,
    //borderRadius: 50,
    marginHorizontal: 5,
  },
});
export default Seleccionable;
