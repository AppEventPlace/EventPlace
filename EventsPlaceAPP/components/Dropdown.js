import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

import { SelectList } from "react-native-dropdown-select-list";
import SvgLogo from "../assets/LogoSVG";
import EventType from "../constants/EventType";

const Dropdown = ({ Title, SubTitle }) => {
  const [selected, setSelected] = React.useState("");

  return (
    <View style={{ width: "100%" }}>
      <Text style={styles.TextContainer}>{Title}</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={EventType}
        save="value"
        placeholder={SubTitle}
        arrowicon={
          <View style={{ justifyContent: "center" }}>
            <SvgLogo theme={"ExpandMore"} color={"#6979F8"} />
          </View>
        }
        closeicon={<SvgLogo theme={"ExpandMore"} color={"#6979F8"} />}
        boxStyles={{
          flex: 1,
          width: "100%",
          height: "100%",
          paddingHorizontal: 8,
          paddingVertical: 16,
          borderWidth: 0,
          borderRadius: 0,
          borderBottomColor: "#A1A5A9",
          borderBottomWidth: (StyleSheet.hairlineWidth = 1),
        }}
        inputStyles={{
          color: "#72767A",
          fontSize: 14,
          fontWeight: "500",
          lineHeight: 20,
        }}
        searchicon={<View style={{ justifyContent: "center" }}></View>}
        dropdownStyles={{
          backgroundColor: "white",
          borderWidth: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  DropdownContainer: {
    alignSelf: "stretch",
  },
  SubContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  TextContainer: {
    width: "100%",
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
  PressableContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
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
  Circle: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#E9EAFE",
    zIndex: 10,
    position: "absolute",
    right: 0,
  },
  IconContainer: {
    position: "absolute",
    right: 0,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  OptionsContainer: {
    overflow: "auto",
    borderWidth: 1,
    borderColor: "#A1A5A9",
    borderTopWidth: 0,
  },
  Option: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#A1A5A9",
  },
});

export default Dropdown;
