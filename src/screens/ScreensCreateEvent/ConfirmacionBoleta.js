import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";
import BackCheckron from "../../components/BackCheckron";
import CommonTextStyles from "../../components/CommonStyles/CommonTextStyles";
import BoletasDisp from "../../constants/BoletasDisp";
import SvgLogo from "../../assets/LogoSVG";

const ConfirmacionBoleta = ({ navigation }) => {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Grey_Top }]}
    >
      <ScrollView
        style={[
          CommonStyles.ScrollView,
          { backgroundColor: Colors.Primary, marginTop: 0 },
        ]}
      >
        <View
          key={"PaginaPolitica"}
          style={[CommonStyles.FullContainer, { marginTop: 10, gap: 25 }]}
        >
          <View key={"BotonVolver"}>
            <BackCheckron
              theme={"BackCheckron"}
              label={"Volver"}
              navigation={navigation}
            />
          </View>
          <View key={"TituloPagina"}>
            <Text style={CommonTextStyles.Heding_H5}>
              Confirmación de boleteria
            </Text>
          </View>
          {BoletasDisp.map((Boletas) => (
            <View
              key={Boletas.id}
              style={[
                CommonStyles.container,
                { display: "flex", flexDirection: "row" },
              ]}
            >
              <View
                style={[{ alignItems: "flex-start", width: "50%", gap: 25 }]}
              >
                <View
                  style={[
                    style.ContenedorHorizontal,
                    { alignSelf: "flex-start", gap: 8 },
                  ]}
                >
                  <View key={"logoInfo"}>
                    <SvgLogo theme={"info"} color={Colors.NightBlue_600} />
                  </View>
                  <View key={"TextVip"} style={{ justifyContent: "center" }}>
                    <Text style={CommonTextStyles.Subtitle_18}>
                      {Boletas.Categoria}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={CommonTextStyles.SemiBold_M}>
                    Cantidad disponible
                  </Text>
                </View>
                <View>
                  <Text style={CommonTextStyles.SemiBold_M}>Valor</Text>
                </View>
                <View>
                  <Text style={CommonTextStyles.SemiBold_M}>Cantidad</Text>
                </View>
              </View>
              <View style={[{ alignItems: "flex-end", width: "50%", gap: 25 }]}>
                <View>
                  <SvgLogo
                    theme={"BoletasLogo"}
                    ancho={27}
                    alto={22}
                    color={Colors.NightBlue_600}
                  />
                </View>
                <View>
                  <Text style={CommonTextStyles.Body_L}>
                    {Boletas.Cantidad}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      CommonTextStyles.Subtitle_18,
                      { color: Colors.NightBlue_600 },
                    ]}
                  >
                    &#36;{Boletas.Valor}
                  </Text>
                </View>
                <View>
                  <Text style={CommonTextStyles.Body_L}>
                    {Boletas.Cantidad}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  ContenedorHorizontal: {
    display: "flex",
    flexDirection: "row",
    //gap: 8,
  },
});
export default ConfirmacionBoleta;
