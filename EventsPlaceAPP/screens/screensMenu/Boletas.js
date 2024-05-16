import React, { memo } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Categorias from "../../constants/Categorias";
import Boton from "../../components/Button";
import EventosCercanos from "../../constants/EventosCercanos";

const OpcionesWall = [
  {
    type: "CabeceraWall",
  },
  {
    type: "Categorias",
  },
  {
    type: "Eventos Cercanos",
  },
  {
    type: "Eventos Recomendados",
  },
];

const BoletasScreen = () => {
  return (
    <View style={{ flex: 1, marginTop: 0, backgroundColor: "#032030" }}>
      <SafeAreaView
        style={{ backgroundColor: "#032030", flex: 1, marginTop: 30 }}
      >
        <FlatList
          key={"ScrollInfinite"}
          style={{
            backgroundColor: "#F4F5FE",

            width: "100%", // Ancho de a imagen
            height: "100%",
          }}
          data={OpcionesWall}
          renderItem={({ item }) => <WallScroll item={item} />}
        />
      </SafeAreaView>
    </View>
  );
};

const WallScroll = ({ item }) => {
  switch (item.type) {
    case "CabeceraWall":
      return (
        <View>
          <View
            key={"ContenedorNombrePrincipal"}
            style={{ alignSelf: "center", marginTop: 20 }}
          >
            {DatosClientePrueba.map((DCliente) => (
              <Text style={style.Titulo}>{DCliente.UserName}</Text>
            ))}
          </View>
          <View style={style.SubText}>
            <Text style={{ fontSize: 19, color: "#0F172A", fontWeight: "400" }}>
              Estos son algunos eventos que te pueden interesar.
            </Text>
          </View>
        </View>
      );
    case "Categorias":
      return (
        <View
          style={{
            marginTop: 30,
            width: "100%",
            maxWidth: 700,
            marginLeft: 10,
            marginRight: 15,
          }}
        >
          <Text style={style.SubTitulo}> Categorías</Text>
          <ScrollView horizontal={true}>
            {Categorias.map((Categorias) => (
              <View
                style={{
                  width: 80,
                  height: 80,
                  marginHorizontal: 5,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    marginHorizontal: 5,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    key={"ImagenCategoria"}
                    //Pase el URI de la imagen seleccionada al componente ImageViewer.
                    source={Categorias.Imagen}
                    style={{
                      borderRadius: 96 / 2,
                      width: 48,
                      height: 48,
                      borderWidth: 2,
                      borderColor: "#D0D4FC",
                    }}
                  />
                  <Boton
                    key={"BotonImagen"}
                    theme="Imagen"
                    onPress={() => alert("Ir a categoría")}
                  />
                </View>
                <View style={{ width: 80, marginTop: 5, alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#0F172A",
                    }}
                  >
                    {Categorias.Categoría}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    case "Eventos Cercanos":
      return (
        <View
          style={{
            marginTop: 30,
            width: "100%",
            maxWidth: 1700,
            marginLeft: 10,
            marginRight: 15,
          }}
        >
          <Text style={style.SubTitulo}> Eventos cercanos a tu ubicación</Text>
          <ScrollView horizontal={true}>
            {EventosCercanos.map((EvtCer) => (
              <View
                style={{
                  width: 160,
                  borderRadius: 12,
                  height: 359,
                  maxWidth: 179,
                  marginHorizontal: 5,
                  backgroundColor: "#FBFBFB",
                  elevation: 2,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    //width: "45%",
                    width: 160,
                    height: 152,
                    maxWidth: 179,
                    alignSelf: "center",
                    borderRadius: 12,
                  }}
                >
                  <Image
                    key={"ImagenCategoria"}
                    //Pase el URI de la imagen seleccionada al componente ImageViewer.
                    source={EvtCer.Imagen}
                    style={{
                      //borderRadius: 96 / 2,
                      // width: "45%",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      width: 160,
                      maxWidth: 179,
                      height: 152,
                      //borderWidth: 2,
                      //borderColor: "#D0D4FC",
                    }}
                  />
                  <Boton
                    key={"BotonImagen"}
                    theme="Imagen"
                    onPress={() => alert("Ir a categoría")}
                  />
                </View>
                <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#0F172A",
                    }}
                  >
                    {EvtCer.Titulo}
                  </Text>
                </View>
                <View style={{ width: "95%", marginTop: 30, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#0F172A",
                    }}
                  >
                    {EvtCer.Fecha}
                  </Text>
                </View>
                <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#828282",
                    }}
                  >
                    {EvtCer.Ubicacion}
                  </Text>
                </View>
                <View style={{ width: "100%", marginTop: 10, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#333333",
                      lineHeight: 16,
                    }}
                  >
                    {EvtCer.Descripcion}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    case "Eventos Recomendados":
      return (
        <View
          style={{
            marginTop: 30,
            width: "100%",
            maxWidth: 1700,
            marginLeft: 10,
            marginRight: 15,
          }}
        >
          <Text style={style.SubTitulo}> Eventos Recomendados</Text>
          <ScrollView horizontal={true}>
            {EventosCercanos.map((EvtCer) => (
              <View
                style={{
                  width: 160,
                  borderRadius: 12,
                  height: 359,
                  maxWidth: 179,
                  marginHorizontal: 5,
                  backgroundColor: "#FBFBFB",
                  elevation: 2,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    //width: "45%",
                    width: 160,
                    height: 152,
                    maxWidth: 179,
                    alignSelf: "center",
                    borderRadius: 12,
                  }}
                >
                  <Image
                    key={"ImagenCategoria"}
                    //Pase el URI de la imagen seleccionada al componente ImageViewer.
                    source={EvtCer.Imagen}
                    style={{
                      //borderRadius: 96 / 2,
                      // width: "45%",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      width: 160,
                      maxWidth: 179,
                      height: 152,
                      //borderWidth: 2,
                      //borderColor: "#D0D4FC",
                    }}
                  />
                  <Boton
                    key={"BotonImagen"}
                    theme="Imagen"
                    onPress={() => alert("Ir a categoría")}
                  />
                </View>
                <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#0F172A",
                    }}
                  >
                    {EvtCer.Titulo}
                  </Text>
                </View>
                <View style={{ width: "95%", marginTop: 30, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#0F172A",
                    }}
                  >
                    {EvtCer.Fecha}
                  </Text>
                </View>
                <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#828282",
                    }}
                  >
                    {EvtCer.Ubicacion}
                  </Text>
                </View>
                <View style={{ width: "100%", marginTop: 10, marginLeft: 7 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#333333",
                      lineHeight: 16,
                    }}
                  >
                    {EvtCer.Descripcion}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
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
  Titulo: {
    alignContent: "center",
    fontSize: 24,
    marginTop: 10,
    fontWeight: "700",
    color: "#515EC0",
  },
  SubTitulo: {
    alignContent: "center",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  SubText: {
    width: "100%",
    maxWidth: 700,
    marginHorizontal: 15,
    marginTop: 30,
  },
});

export default BoletasScreen;
