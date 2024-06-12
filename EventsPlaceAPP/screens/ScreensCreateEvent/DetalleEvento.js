import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Button from "../../components/Button";
import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";
import BackCheckron from "../../components/BackCheckron";
import EventosCercanos from "../../constants/EventosCercanos";

const DetalleEvento = ({ navigation }) => {
  const Imagen_width = Dimensions.get("window").width * 0.85;
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView_Full, { backgroundColor: Colors.Grey_Top }]}
    >
      <ScrollView
        style={[CommonStyles.ScrollView, { backgroundColor: Colors.Grey_Top }]}
      >
        <View
          key={"PaginaPrincipalDetalleEvt"}
          style={[CommonStyles.FullContainer, { marginTop: 20 }]}
        >
          <View key={"BotonVolver"}>
            <BackCheckron
              theme={"BackCheckron"}
              label={"Volver"}
              navigation={navigation}
            />
          </View>
          <View key={"CabeceraGaleríaEvt"} style={{ marginTop: 20 }}>
            <ScrollView
              style={styles.ScrollGaleriaEvt}
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              snapToInterval={Imagen_width + 10}
              snapToAlignment="center"
            >
              {EventosCercanos.map((Galeria) => (
                <View
                  key={"ContenedorImagEvt" + Galeria.Id}
                  style={{
                    borderRadius: 12,
                    width: Imagen_width,
                    maxWidth: 348,
                    height: 151,
                    marginRight: 16,
                  }}
                >
                  <Image
                    key={"ImagenEvt" + Galeria.Id}
                    source={Galeria.Imagen}
                    style={{
                      width: Imagen_width,
                      maxWidth: 310,
                      height: 151,
                      marginHorizontal: 16,
                      borderRadius: 12,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScrollGaleriaEvt: {
    height: 171,
    paddingEnd: 16,
  },
});

export default DetalleEvento;
