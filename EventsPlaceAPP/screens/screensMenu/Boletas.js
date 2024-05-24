import React, { memo } from "react";
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
} from "react-native";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Categorias from "../../constants/Categorias";
import Boton from "../../components/Button";
import EventosCercanos from "../../constants/EventosCercanos";
import TarjetaWall from "../../components/TarjetaWall";
import TusEventos from "../../constants/TusEventos";
import SvgLogo from "../../assets/LogoSVG";

const OpcionesWall = [
  /* {
    type: "CabeceraWall",
  },*/
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
  },
  { type: "Otros Eventos" },
];

const BoletasScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: 0, backgroundColor: "#032030" }}>
      <SafeAreaView
        style={{ backgroundColor: "#032030", flex: 1, marginTop: 30 }}
      >
        <View
          style={{
            backgroundColor: "#F4F5FE",
            borderBottomColor: "#C4C7C8",
            borderBottomWidth: 1,
            height: 140,
            elevation: 1,
          }}
        >
          {}
          <Cabecera style={{ backgroundColor: "#F4F5FE" }} />
        </View>

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

const WallScroll = ({ item, navigation }) => {
  switch (item.type) {
    case "CabeceraWall":
      return <Cabecera />;
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
                  height: 90,
                  marginHorizontal: 5,
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
                  onPress={() => alert("Ir a categoría")}
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
                onPress={() => alert("Ver más de Eventos cercanos")}
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
                onPress={() => alert("Ver más de Eventos recomendados")}
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
              <Text style={style.SubTitulo}>Otros eventos</Text>
            </View>
            <View style={{ marginLeft: 0, marginRight: 15, marginTop: -10 }}>
              <Boton
                theme={"VerMas"}
                onPress={() => alert("Ver más de Otros Eventos")}
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
              <Boton
                theme={"VerMas"}
                onPress={() => alert("Ver más de Tus Eventos")}
              />
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
              <TarjetasTusEventos />
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
              onPress={() => alert("ir a crear evento")}
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
const Cabecera = () => {
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
          <Boton theme={"BuscarEventos"} onPress={() => alert("ir a buscar")} />
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
const TarjetasTusEventos = () => {
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

export default BoletasScreen;
