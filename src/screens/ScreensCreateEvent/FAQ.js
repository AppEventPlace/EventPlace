import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import BackCheckron from "../../components/BackCheckron";
import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";
import CommonTextStyles from "../../components/CommonStyles/CommonTextStyles";
import PreguntasFrecuentes from "../../constants/PreguntasFrecuentes";

const FAQ = ({ navigation }) => {
  return (
    <SafeAreaView
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
          style={[
            CommonStyles.FullContainer,
            { marginTop: 10, gap: 16, flex: 1, marginBottom: 16 },
          ]}
        >
          <View key={"BotonVolver"}>
            <BackCheckron
              theme={"BackCheckron"}
              label={"Volver"}
              navigation={navigation}
            />
          </View>
          <View key={"TituloPagina"}>
            <Text style={CommonTextStyles.Heding_H5}>Preguntas frecuentes</Text>
          </View>
          {PreguntasFrecuentes.map((Faq) => (
            <View
              key={Faq.id}
              style={[CommonStyles.container, { alignItems: "flex-start" }]}
            >
              <Text style={CommonTextStyles.SemiBold_L}>{Faq.Pregunta}</Text>
              <Text style={CommonTextStyles.Body_M}>{Faq.Respuesta}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default FAQ;