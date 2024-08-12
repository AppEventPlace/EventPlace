import React from "react";
import { View, Text, Pressable } from "react-native";
import SvgLogo from "../components/assets/LogoSVG";
import CommonStyles, { Colors } from "../components/CommonStyles/CommonStyles";
import CommonTextStyles from "../components/CommonStyles/CommonTextStyles";
const Direccionador = ({ label, logo, color, onPress }) => {
  return (
    <View
      style={[
        {
          //display: "flex",
          width: "100%",
          maxWidth: 700,
          height: 64,

          borderRadius: 12,
          marginTop: 5,
          // marginHorizontal: 10,
          alignSelf: "center",
          elevation: 5,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          CommonStyles.container,
          { paddingVertical: 0 },
          { backgroundColor: pressed ? Colors.Grey_04 : Colors.Blanco },
        ]}
      >
        <View
          style={{
            width: "100%",
            //paddingHorizontal: 0,

            alignItems: "center",
            maxHeight: 64,
            display: "flex",
            flexDirection: "row",
            height: 64,
            gap: 8,
            //justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <SvgLogo theme={logo} color={color} />
          </View>
          <View style={{}}>
            <Text style={[CommonTextStyles.Body_S, { color: Colors.Negro }]}>
              {label}
            </Text>
          </View>

          <View style={{ position: "absolute", right: 10 }}>
            <SvgLogo theme={"Next"} color={color} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Direccionador;
