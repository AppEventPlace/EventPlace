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
import Toast from "react-native-simple-toast";

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
    if (Platform.OS === "ios") {
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
    }
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 0, backgroundColor: "#032030" }}>
      <SafeAreaView
        style={{ backgroundColor: "#032030", flex: 1, marginTop: 30 }}
      >
        <FlatList
          key={"ScrollInfinite"}
          stickyHeaderIndices={[1]}
          style={{
            backgroundColor: "#F4F5FE",

            width: "100%", // Ancho de a imagen
            height: "100%",
          }}
          data={OpcionesWall}
          renderItem={({ item }) => (
            <WallScroll item={item} navigation={navigation} />
          )}
        />
      </SafeAreaView>
    </View>
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
            backgroundColor: "#F4F5FE",
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
                    { backgroundColor: pressed ? "#A8A6F2" : null },
                    {
                      width: "100%",
                      height: 80, //position: "absolute"
                      borderRadius: 12,
                    },
                  ]}
                  onPress={() => navigation.navigate("Pagina de busqueda")}
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
            marginLeft: 10,
            marginRight: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 5,
              justifyContent: "space-around",
            }}
          >
            <View style={{ width: "60%" }}>
              <Text style={style.SubTitulo}>
                Eventos cercanos a tu ubicación
              </Text>
            </View>
            <View style={{ marginLeft: 0, marginRight: 10 }}>
              <Boton
                theme={"VerMas"}
                onPress={() => navigation.navigate("Pagina de busqueda")}
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
                onPress={() => navigation.navigate("Detalle Evento")}
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
            marginLeft: 10,
            marginRight: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 5,
            }}
          >
            <View style={{ width: "60%" }}>
              <Text style={style.SubTitulo}>Eventos recomendados</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: -10,
              }}
            >
              <Boton
                theme={"VerMas"}
                onPress={() => navigation.navigate("Pagina de busqueda")}
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
                onPress={() => navigation.navigate("Detalle Evento")}
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
            //marginHorizontal: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 5,
              justifyContent: "space-around",
            }}
          >
            <View style={{ width: "60%" }}>
              <Text style={style.SubTitulo}>Otros eventos</Text>
            </View>
            <View style={{ marginLeft: 0, marginRight: 15, marginTop: -10 }}>
              <Boton
                theme={"VerMas"}
                onPress={() => navigation.navigate("Pagina de busqueda")}
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
              onPress={() => navigation.navigate("Detalle Evento")}
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
            //marginLeft: 10,
            //marginRight: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 15,

              justifyContent: "space-around",
            }}
          >
            <View style={{ width: "60%" }}>
              <Text style={style.SubTitulo}>Tus eventos</Text>
            </View>
            <View style={{ marginLeft: 10, marginRight: 10, marginTop: -10 }}>
              {TusEventos.length === 0 ? (
                <View style={{ width: 110 }}></View>
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
          <View
            key={"ContenedorBoton"}
            style={{
              marginTop: 5,
              marginBottom: 15,
              alignSelf: "center",
              width: "100%",
              maxWidth: 320,
              height: 43,
            }}
          >
            <Boton
              theme={"StyleBoton"}
              color={"#6979F8"}
              label={"Crear evento"}
              onPress={() => navigation.navigate("Crear Evento")}
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
    <View style={{ backgroundColor: "F4F5FE" }}>
      <View
        style={{
          display: "flex",
        }}
      >
        <View
          key={"ContenedorNombrePrincipal"}
          style={{ alignSelf: "center", marginTop: 15 }}
        >
          {DatosClientePrueba.map((DCliente) => (
            <Text style={style.Titulo}>Hola {DCliente.UserName}</Text>
          ))}
        </View>
        <View
          style={{
            width: 25,
            height: 25,
            position: "absolute",
            top: 25,
            right: 25,
            justifyContent: "center",
          }}
        >
          <Boton
            theme={"BuscarEventos"}
            onPress={() => navigation.navigate("Pagina de busqueda")}
          />
        </View>
      </View>
      <View style={style.SubText}>
        <Text style={{ fontSize: 19, color: "#0F172A", fontWeight: "400" }}>
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
      }}
    >
      <View style={{ marginTop: 20 }}>
        <SvgLogo
          theme="Celebracion"
          ancho={"57"}
          alto={"54"}
          color={"#72767A"}
        />
      </View>
      <View style={{ maxWidth: 300, marginVertical: 20 }}>
        <Text
          style={{
            fontWeight: 500,
            color: "#72767A",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Crea tu primer evento y haste conocer en nuestra red de{" "}
          <Text
            style={{
              fontWeight: 700,
              color: "#72767A",
              fontSize: 18,
            }}
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
          onPress={() => navigation.navigate("Detalle Evento")}
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
  lineaSeparacion: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#72767A",
    width: "90%",
    //maxWidth: 294,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default WallPrincipal;
