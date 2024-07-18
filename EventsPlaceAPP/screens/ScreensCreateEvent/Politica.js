import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import BackCheckron from "../../components/BackCheckron";
import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";
import CommonTextStyles from "../../CommonStyles/CommonTextStyles";

const Politica = ({ navigation }) => {
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
            { marginTop: 10, gap: 25, flex: 1 },
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
            <Text style={CommonTextStyles.Heding_H5}>
              Politica de reembolso
            </Text>
          </View>
          <View
            key={"DetallePolitica"}
            style={[CommonStyles.container, { marginBottom: 20 }]}
          >
            <Text style={CommonTextStyles.Body_M}>
              Lorem ipsum dolor sit amet consectetur. Vulputate tempus massa
              odio commodo hendrerit. Nisl id leo urna pellentesque habitant
              sapien nunc magna eu. Odio condimentum congue sit venenatis id
              arcu. Adipiscing aliquet in morbi sed. Ultricies sed sit diam
              aliquam aenean. Sed eu egestas tincidunt mi adipiscing sit
              sagittis lacus dignissim. Ut pellentesque eu nisl iaculis quis
              proin. Vestibulum nec facilisi dictumst faucibus tellus egestas
              ante justo ac. Adipiscing non eu fames venenatis in tortor. Enim
              suspendisse sit feugiat blandit id. Amet turpis tincidunt ut nibh
              viverra nullam rhoncus nec. Lectus vulputate eget enim turpis
              nulla aliquam nulla. Dui pulvinar cursus eget duis nulla pretium
              sed. Lorem ipsum dolor sit amet consectetur. Vulputate tempus
              massa odio commodo hendrerit. Nisl id leo urna pellentesque
              habitant sapien nunc magna eu. Odio condimentum congue sit
              venenatis id arcu. Adipiscing aliquet in morbi sed. Ultricies sed
              sit diam aliquam aenean. Sed eu egestas tincidunt mi adipiscing
              sit sagittis lacus dignissim. Ut pellentesque eu nisl iaculis quis
              proin. Vestibulum nec facilisi dictumst faucibus tellus egestas
              ante justo ac. Adipiscing non eu fames venenatis in tortor. Enim
              suspendisse sit feugiat blandit id. Amet turpis tincidunt ut nibh
              viverra nullam rhoncus nec. Lectus vulputate eget enim turpis
              nulla aliquam nulla. Dui pulvinar cursus eget duis nulla pretium
              sed.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Politica;
