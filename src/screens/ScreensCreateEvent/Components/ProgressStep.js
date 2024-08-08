import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBar = ({ step }) => {
  const stepArr = ["1", "2", "3"];

  return (
    <View style={styles.container}>
      {stepArr.map((element, index) => (
        <View style={styles.singleStep} key={index}>
          {/* <Text style={styles.singleTxt}>{`${index + 1}. ${element}`}</Text> */}
          <View style={styles.Step}>
            <Text style={styles.singleTxt}>{element}</Text>
          </View>
          <View
            style={{
              marginTop: 5,
              height: 4,
              backgroundColor: step < index + 1 ? "#B5BBFB" : "#6979F8",
              width: "100%",
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    backgroundColor: "#F4F5FE",
  },
  singleStep: {
    flex: 1,
    alignItems: "center",
  },
  Step: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: "#6979F8",
    justifyContent: "center",
  },
  singleTxt: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    color: "#FBFBFE",
  },
});

export default ProgressBar;
