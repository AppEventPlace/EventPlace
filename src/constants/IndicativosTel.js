import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { Colors } from "../components/CommonStyles/CommonStyles";
import SvgLogo from "@/components/assets/LogoSVG";
import {
  CountryPicker,
  CountryList,
  CountryButton,
} from "react-native-country-codes-picker";

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
  const [countryCode, setCountryCode] = useState("+57");
  const [flag, setFlag] = useState("🇨🇴");
  const [show, setShow] = useState(false);
  function ListHeaderComponent({ countries, lang, onPress }) {
    return (
      <View
        style={{
          paddingBottom: 20,
        }}
      >
        <Text>Popular countries</Text>
        {countries?.map((country, index) => {
          return (
            <CountryButton
              key={index}
              item={country}
              name={country?.name?.[lang || "en"]}
              onPress={() => onPress(country)}
            />
          );
        })}
      </View>
    );
  }
  return (
    <View style={style.TexInput}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          borderWidth: 0,
          position: "absolute",
          width: "100%",
          //top: 7.5,
          borderBottomWidth: 1.5,
          borderColor: "#A1A5A9",
          borderRadius: 0,
          left: 15,
          height: 49,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>{flag}</Text>

        <Text
          style={{
            color: Colors.Negro,
            fontSize: 14,
          }}
        >
          {countryCode}
        </Text>
        <View style={{ width: 15 }}>
          <SvgLogo
            theme={"ExpandMore"}
            color={Colors.NightBlue_600}
            progress={0}
            ancho={"14"}
            alto={"8"}
          />
        </View>
      </TouchableOpacity>

      <CountryPicker
        show={show}
        inputPlaceholder="co"
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setFlag(item.flag);
          console.log(item);
          setShow(false);
        }}
        style={{
          modal: {
            width: "80%",
            height: 250,
            flex: 1,
            borderWidth: 0.5,
            position: "absolute",
            top: Dimensions.get("window").height * 0.5,
            backgroundColor: "white",
            zIndex: 999,
            borderRadius: 12,
            alignSelf: "center",
          },
        }}
        enableModalAvoiding={false}
        ListHeaderComponent={ListHeaderComponent}
        popularCountries={["en", "co", "do", "gb"]}
      />
    </View>
  );
};

/*
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
*/
const style = StyleSheet.create({
  TexInput: {
    //borderWidth: 1,
    //flex: 1,
    //width: 60,
    //height: "100%",
    height: 43,
    //marginHorizontal: 8,
    //paddingVertical: 16,
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "500",
    //lineHeight: 20,
  },
});
export default SelectorIndicativo;
