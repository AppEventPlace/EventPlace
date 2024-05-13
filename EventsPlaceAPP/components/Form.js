import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import SvgLogo from "../assets/LogoSVG";

const Froms = ({ Title, SubTitle, Title_1, SubTitle_1, type }) => {
  if (type) {
    return (
      <View style={styles.ViewStyle}>
        <View style={styles.SubContainer}>
          <Text style={styles.TextContainer}>{Title}</Text>
          <View style={styles.Container}>
            <TextInput placeholder={SubTitle} style={styles.TextInput} />
            <SvgLogo theme="Calendario" color="#6979F8" />
          </View>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.TextContainer}>{Title_1}</Text>
          <View style={styles.Container}>
            <TextInput placeholder={SubTitle_1} style={styles.TextInput} />
            <SvgLogo theme="Clock" color="#6979F8" />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.SubContainer}>
        <Text style={styles.TextContainer}>{Title}</Text>
        <TextInput placeholder={SubTitle} style={styles.TextInput} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  ViewStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
  Container: {
    height: 57,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 8,
  },
  SubContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 79,
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: (StyleSheet.hairlineWidth = 1),
  },
  TextContainer: {
    width: "100%",
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
  TextInput: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#72767A",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
});

export default Froms;
