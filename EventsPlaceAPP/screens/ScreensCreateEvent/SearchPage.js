import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import BackCheckron from "../../components/BackCheckron";
import Button from "../../components/Button";
import SvgLogo from "../../assets/LogoSVG";
import EventosCercanos from "../../constants/EventosCercanos";
import TarjetaWall from "../../components/TarjetaWall";
import { Switch } from "react-native-web";
import { Colors } from "../../CommonStyles/CommonStyles";

const SearchPage = ({ navigation }) => {
  const [busqueda, setBusqueda] = useState("");
  const [resultado, setResultado] = useState([]);
  const Datos = [{ type: "Tarjetas" }];
  let numColumn = 3;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.PageContainer}>
        <View style={{ height: 150, marginHorizontal: 10 }}>
          <View style={style.HeaderContainer}>
            <BackCheckron navigation={navigation} />

            <View
              key={"BuscadorPrincipal"}
              style={{
                display: "flex",
                flexDirection: "row",
                height: 41,
                // width: "100%",
                // maxWidth: 400,
                marginTop: 30,
                alignSelf: "center",
                marginHorizontal: 10,
              }}
            >
              <View
                key={"ContenedorBarraBusqueda"}
                style={{
                  borderRadius: 12,
                  borderWidth: 1,
                  backgroundColor: "#FBFBFE",
                  width: "85%",
                  borderColor: "#D0D4FC",
                  height: 41,
                  display: "flex",
                  flexDirection: "row",
                  //marginHorizontal: 16,
                }}
              >
                <TextInput
                  key={"InputBusqueda"}
                  style={{ width: "80%", height: 41, marginHorizontal: 10 }}
                  placeholder="Busca tu evento"
                  value={busqueda}
                  onChangeText={(texto) => setBusqueda(texto)}
                />
                <View
                  key={"ContenedorBorradorTexto"}
                  style={{
                    width: "20%",
                    height: 41,
                    justifyContent: "center",
                    marginRight: 20,
                  }}
                >
                  <Pressable
                    key={"PresionableBorradorTexto"}
                    style={({ pressed }) => [
                      { backgroundColor: pressed ? "#F3F4F6" : null },
                      {
                        justifyContent: "center",
                        height: 30,
                        width: 30,
                        marginRight: 20,
                        alignItems: "center",
                        borderRadius: 12,
                      },
                    ]}
                    onPress={() => setBusqueda("")}
                  >
                    <SvgLogo key={"LogoBorraBusqueda"} theme={"close"} />
                  </Pressable>
                </View>
              </View>

              <View style={{ marginLeft: 5, width: 41, height: 41 }}>
                <Button
                  theme={"SearchButton"}
                  onPress={() => navigation.navigate("Filtros")}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          key={"ResultadosBusqueda"}
          style={{
            marginTop: -30,
            flex: 1,
            alignItems: "center",
            alignSelf: "center",
            width: "100%",
            maxWidth: 1700,
            //marginHorizontal: 16,
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              marginTop: 30,
              width: "100%",
              maxWidth: 1700,
            }}
          >
            <FlatList
              key={"ScrollBusqueda"}
              numColumns={3}
              horizontal={false}
              style={{
                backgroundColor: Colors.Primary,
                //height: 1000,
                width: "100%", // Ancho de a imagen
                //marginTop: 5,
                // marginHorizontal: 16,
              }}
              data={Datos}
              renderItem={({ item }) => <BusquedaScroll item={item} />}
            />
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const BusquedaScroll = ({ item }) => {
  switch (item.type) {
    case "Tarjetas":
      return (
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "99.5%",
            //maxWidth: 400,
            marginHorizontal: 0,
            justifyContent: "space-evenly",
            //maxWidth: 1700,
          }}
        >
          {EventosCercanos.map((EvtCer) => (
            <TarjetaWall
              theme={"Horizontal"}
              key={EvtCer.Id}
              source={EvtCer.Imagen}
              Titulo={EvtCer.Titulo}
              fecha={EvtCer.Fecha}
              ubicacion={EvtCer.Ubicacion}
              Descripcion={EvtCer.Descripcion}
            />
          ))}
        </View>
      );
    default:
      return null;
  }
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
    flex: 1,
  },
  HeaderContainer: {
    width: "100%",
    height: 60,
    ////borderWidth: 1,
    //position: 'absolute',
  },
  PageContainer: {
    backgroundColor: Colors.Primary,
    height: "100%",
  },
  Titulo: {
    alignContent: "center",
    fontSize: 24,
    marginTop: 10,
    fontWeight: "700",
    color: "#515EC0",
  },
});

export default SearchPage;
