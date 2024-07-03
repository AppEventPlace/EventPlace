import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../CommonStyles/CommonStyles";
import SvgLogo from "../assets/LogoSVG";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import Button from "./Button";

const TarjetaCompra = ({ Valor }) => {
  return (
    <View key={"ContenedorTarjCompr"} style={style.ContenedorTarjeta}>
      <View key={"LogoExpandir"}>
        <SvgLogo theme={"ExpandLess"} color={Colors.NightBlue_600} />
      </View>
      <View
        key={"informacionPago"}
        style={[style.ContenedorHorizontal, { width: "100%" }]}
      >
        <View
          key={"Info"}
          style={[
            style.ContenedorHorizontal,
            { alignSelfs: "flex-start", width: "50%", gap: 8 },
          ]}
        >
          <View key={"logoInfo"}>
            <SvgLogo theme={"info"} color={Colors.NightBlue_600} />
          </View>
          <View key={"TextVip"} style={{ justifyContent: "center" }}>
            <Text style={CommonTextStyles.Body_M}>Vip</Text>
          </View>
        </View>
        <View
          key={"Valor"}
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Text style={CommonTextStyles.SemiBold_L}>&#36;{Valor}</Text>
        </View>
      </View>
      <View
        key={"BotonPago"}
        style={[style.ContenedorBoton, { width: "100%", maxWidth: 320 }]}
      >
        <Button
          theme={"StyleBoton"}
          label={"Conseguir entradas"}
          color={Colors.NightBlue_600}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  ContenedorTarjeta: {
    rowGap: 16,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: Colors.NightBlue_200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    //marginBottom: 16,
  },
  ContenedorHorizontal: {
    display: "flex",
    flexDirection: "row",
    //gap: 8,
  },
  ContenedorBoton: {
    height: 43,
  },
});
export default TarjetaCompra;
