import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const SelectorIndicativo = () => {
  const [selected, setSelected] = useState("");

  const indicativos = [
    { key: "1", value: "+57" },
    { key: "2", value: "+1" },
  ];

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={indicativos}
      save="value"
      style={style.TexInput}
      search={false}
      placeholder="+57"
      boxStyles={{ borderWidth: 0 }}
      defaultOption={{ key: "1", value: "+57" }}
      dropdownStyles={{
        borderWidth: 0,
        position: "absolute",
        top: 20,
        backgroundColor: "white",
      }}
      dropdownItemStyles={{ backgroundColor: "white" }}
    />
  );
};
const style = StyleSheet.create({
  TexInput: {
    //borderWidth: 1,
    //flex: 1,
    width: 60,
    height: "100%",
    marginHorizontal: 8,
    paddingVertical: 16,
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "500",
    //lineHeight: 20,
  },
});
export default SelectorIndicativo;
