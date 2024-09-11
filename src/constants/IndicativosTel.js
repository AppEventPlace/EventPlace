import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { Colors } from "../components/CommonStyles/CommonStyles";
import SvgLogo from "@/components/assets/LogoSVG";

const SelectorIndicativo = () => {
  const [selected, setSelected] = useState("");

  const indicativos = [
    { key: "1", value: "+57" },
    { key: "2", value: "+1" },
    { key: "3", value: "+52" },
    { key: "4", value: "+30" },
    { key: "5", value: "+564" },
    { key: "2", value: "+12" },
  ];

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={indicativos}
      save="value"
      style={style.TexInput}
      search={false}
      placeholder="+57"
      arrowicon={
        <View style={{ width: 15, marginLeft: 20, marginTop: 5 }}>
          <SvgLogo
            theme={"ExpandMore"}
            color={Colors.NightBlue_600}
            progress={0}
            ancho={"14"}
            alto={"8"}
          />
        </View>
      }
      boxStyles={{
        borderWidth: 0,
        position: "absolute",
        width: "100%",
        top: 12.5,
        borderBottomWidth: 1.5,
        borderColor: "#A1A5A9",
        borderRadius: 0,
        left: 15,
        height: 49,
      }}
      defaultOption={{ key: "1", value: "+57" }}
      dropdownStyles={{
        width: 80,
        height: 100,
        flex: 1,
        borderWidth: 0.5,
        position: "absolute",
        top: 40,
        backgroundColor: "white",
        zIndex: 999,
        borderRadius: 2,
        marginLeft: 15,
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
