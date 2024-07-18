import React, { memo, useDebugValue, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Alert,
  Pressable,
  Platform,
  ToastAndroid,
} from "react-native";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Categorias from "../../constants/Categorias";
import Boton from "../../components/Button";
import EventosCercanos from "../../constants/EventosCercanos";
import TarjetaWall from "../../components/TarjetaWall";
import TusEventos from "../../constants/TusEventos";
import SvgLogo from "../../assets/LogoSVG";
import Button from "../../components/Button";
import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";
import CommonTextStyles from "../../CommonStyles/CommonTextStyles";
//*import Toast from "react-native-simple-toast";

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
  {
    type: "Tus Eventos",
    navigation: "Crear Evento",
  },
  { type: "Otros Eventos" },
];

const WallPrincipal = ({ navigation }) => {
  useEffect(() => {
    /* if (Platform.OS === "ios") {
      Toast.showWithGravity(
        "Nos alegra que hagas parte de esta red de Eventers",
        Toast.SHORT,
        Toast.TOP,
        { backgroundColor: "Green" }
      );
    } else if (Platform.OS === "android") {
      ToastAndroid.showWithGravityAndOffset(
        "Nos alegra s",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        50,
        500
      );
    }*/
  }, []);
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Grey_Top }]}
    >
      <FlatList
        key={"ScrollInfinite"}
        stickyHeaderIndices={[1]}
        style={[CommonStyles.ScrollView, { backgroundColor: Colors.Primary }]}
        data={OpcionesWall}
        renderItem={({ item }) => (
          <WallScroll item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const WallScroll = ({ item, navigation }) => {
  switch (item.type) {
    case "CabeceraWall":
      return <Cabecera navigation={navigation} />;
    case "Categorias":
      return (
        <View
          style={{
            top: 0,
            width: "100%",
            //maxWidth: 700,
            marginLeft: 0,
            marginRight: 15,
            backgroundColor: Colors.Primary,
            borderBottomWidth: 0.5,
            borderBottomColor: "#C6C7C8",
          }}
        >
          <Text style={[style.SubTitulo, { marginLeft: 10, marginTop: 10 }]}>
            {" "}
            Categorías
          </Text>
          <ScrollView horizontal={true}>
            {Categorias.map((Categorias) => (
              <View
                style={{
                  width: 80,
                  height: 90,
                  marginHorizontal: 5,
                  marginLeft: 10,
                  alignContent: "center",

                  //backgroundColor: "#FBFBFB",
                }}
              >
                <Pressable
                  style={({ pressed }) => [
                    { backgroundColor: pressed ? Colors.FondoPressed : null },
                    {
                      width: "100%",
                      height: 80, //position: "absolute"
                      borderRadius: 12,
                    },
                  ]}
                  onPress={() => navigation.navigate("SearchPage")}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      marginHorizontal: 5,
                      alignSelf: "center",
                      marginTop: 5,
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
                  </View>
                  <View
                    style={{ width: 80, marginTop: 5, alignItems: "center" }}
                  >
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
                </Pressable>
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
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text style={CommonTextStyles.Subtitle_18}>
                Eventos cercanos a tu ubicación
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Boton
                theme={"VerMas"}
                onPress={() => navigation.navigate("SearchPage")}
              />
            </View>
          </View>
          <ScrollView horizontal={true}>
            {EventosCercanos.map((EvtCer) => (
              <TarjetaWall
                theme={"Vertical"}
                key={EvtCer.Id}
                source={EvtCer.Imagen}
                Titulo={EvtCer.Titulo}
                fecha={EvtCer.Fecha}
                ubicacion={EvtCer.Ubicacion}
                Descripcion={EvtCer.Descripcion}
                onPress={() => navigation.navigate("DetalleEvento")}
              />
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
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text style={CommonTextStyles.Subtitle_18}>
                Eventos recomendados
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
              }}
            >
              <Boton
                theme={"VerMas"}
                onPress={() => navigation.navigate("SearchPage")}
              />
            </View>
          </View>
          <ScrollView horizontal={true}>
            {EventosCercanos.map((EvtCer) => (
              <TarjetaWall
                theme={"Vertical"}
                key={EvtCer.Id}
                source={EvtCer.Imagen}
                Titulo={EvtCer.Titulo}
                fecha={EvtCer.Fecha}
                ubicacion={EvtCer.Ubicacion}
                Descripcion={EvtCer.Descripcion}
                onPress={() => navigation.navigate("DetalleEvento")}
              />
            ))}
          </ScrollView>
        </View>
      );
    case "Otros Eventos":
      return (
        <View
          style={{
            marginTop: 30,
            width: "100%",
            maxWidth: 1700,
            //marginLeft: 10,
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text style={CommonTextStyles.Subtitle_18}>Otros eventos</Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Boton
                theme={"VerMas"}
                onPress={() => navigation.navigate("SearchPage")}
              />
            </View>
          </View>

          {EventosCercanos.map((EvtCer) => (
            <TarjetaWall
              theme={"Horizontal"}
              key={EvtCer.Id}
              source={EvtCer.Imagen}
              Titulo={EvtCer.Titulo}
              fecha={EvtCer.Fecha}
              ubicacion={EvtCer.Ubicacion}
              Descripcion={EvtCer.Descripcion}
              onPress={() => navigation.navigate("DetalleEvento")}
            />
          ))}
        </View>
      );
    case "Tus Eventos":
      return (
        <View
          style={{
            marginTop: 30,
            width: "100%",
            maxWidth: 1700,
            gap: 16,
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text style={CommonTextStyles.Subtitle_18}>Tus eventos</Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
                //justifyContent: "center",
              }}
            >
              {TusEventos.length === 0 ? (
                <View></View>
              ) : (
                <Boton
                  theme={"VerMas"}
                  onPress={() => alert("Ver más de Tus Eventos")}
                />
              )}
            </View>
          </View>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "space-around",
            }}
          >
            {TusEventos.length === 0 ? (
              <TarjetaSinEventos />
            ) : (
              <TarjetasTusEventos navigation={navigation} />
            )}
          </View>
          <View key={"ContenedorBoton"} style={CommonStyles.BotonContainer}>
            <Boton
              theme={"StyleBoton"}
              color={"#6979F8"}
              label={"Crear evento"}
              onPress={() => navigation.navigate("CreateEvent")}
            />
          </View>
          <View
            key={"LineaSeparacionPerfil"}
            style={style.lineaSeparacion}
          ></View>
        </View>
      );
    default:
      return null;
  }
};
const Cabecera = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: Colors.Primary }}>
      <View
        style={{
          display: "flex",
        }}
      >
        <View
          key={"ContenedorNombrePrincipal"}
          style={{ alignSelf: "center", marginTop: 25 }}
        >
          {DatosClientePrueba.map((DCliente) => (
            <Text style={[CommonTextStyles.Heding_H5, {}]}>
              Hola {DCliente.UserName}
            </Text>
          ))}
        </View>
        <View style={style.BotonBuscar}>
          <Boton
            theme={"BuscarEventos"}
            onPress={() => navigation.navigate("SearchPage")}
          />
        </View>
      </View>
      <View style={style.SubText}>
        <Text style={[CommonTextStyles.Body_L, { color: Colors.TexColor }]}>
          Estos son algunos eventos que te pueden interesar.
        </Text>
      </View>
    </View>
  );
};
const TarjetaSinEventos = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        maxWidth: 330,

        gap: 28,
      }}
    >
      <View style={{}}>
        <SvgLogo
          theme="Celebracion"
          ancho={"57"}
          alto={"54"}
          color={Colors.Placeholder}
        />
      </View>
      <View style={{ maxWidth: 300 }}>
        <Text style={[CommonTextStyles.Body_XL, { textAlign: "center" }]}>
          Crea tu primer evento y haste conocer en nuestra red de{" "}
          <Text
            style={[
              CommonTextStyles.Body_XL,
              {
                fontWeight: 700,
              },
            ]}
          >
            eventers
          </Text>
        </Text>
      </View>
    </View>
  );
};
const TarjetasTusEventos = ({ navigation }) => {
  return (
    <View>
      {TusEventos.map((TusEvt) => (
        <TarjetaWall
          theme={"Horizontal"}
          key={TusEvt.Id}
          source={TusEvt.Imagen}
          Titulo={TusEvt.Titulo}
          fecha={TusEvt.Fecha}
          ubicacion={TusEvt.Ubicacion}
          Descripcion={TusEvt.Descripcion}
          onPress={() => navigation.navigate("DetalleEvento")}
        />
      ))}
    </View>
  );
};
const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
    flex: 1,
  },
  BotonBuscar: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 25,
    right: 30,
    justifyContent: "center",
  },
  SubTitulo: {
    justifyContent: "center",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  SubText: {
    width: "100%",
    maxWidth: 700,
    marginHorizontal: 16,
    marginTop: 30,
  },
  lineaSeparacion: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#72767A",
    width: "90%",
    //maxWidth: 294,
    alignSelf: "center",
  },
});

export default WallPrincipal;
