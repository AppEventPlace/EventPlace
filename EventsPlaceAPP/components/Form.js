import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const Froms = ({ Title, SubTitle, type }) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.textContainer}>{Title}</Text>
      <TextInput placeholder={SubTitle} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 79,
  },
  textContainer: {
    width: "100%",
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
  textInput: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#72767A",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Froms;
