import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import IconSVG from "../../assets/LogoSVG";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import CalificacionEst from "../../components/CalificacionEst";
import CuadroEstado from "../../components/CuadroEstado";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "../../components/ImageViewer";
//import Autenticar from "../../App";
const FondImage = require("../../assets/PerfilGenerico.png");

const PerfilPrincipalScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      //Opciones del selector de imágenes a launchImageLibraryAsync()
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    //Si el usuario no elige una imagen, muestra una alerta.
    else {
      alert("No seleccionaste ninguna imagen.");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.ScrollView}>
        <View key={"ContenedorPagina"} style={styles.PerfilContainer}>
          <View key={"ContenedorFondo"} style={styles.IconBackground}>
            <IconSVG key={"FonndoPerfil"} theme={"BackgroundPerfil"} />
          </View>

          <View
            key={"ContenedorTitulo"}
            style={{ alignSelf: "center", marginTop: 20 }}
          >
            <Text key={"TextoTitulo"} style={styles.Titulo}>
              {" "}
              Mi perfil{" "}
            </Text>
          </View>
          {DatosClientePrueba.map((DCliente) => (
            <View key={"ContenedorInfoPerfil"}>
              <View style={styles.TarjetaPerfil} key={DCliente.UserName}>
                <View
                  key={"Imagen perfil"}
                  style={[
                    styles.Alinear,
                    {
                      marginTop: 15,
                      width: 68,
                      height: 68,
                      alignSelf: "center",
                    },
                  ]}
                >
                  <ImageViewer
                    key={"SelectorImagen"}
                    //Pase el URI de la imagen seleccionada al componente ImageViewer.
                    placeholderImageSource={FondImage}
                    selectedImage={selectedImage}
                    ancho={68}
                    alto={68}
                  />
                  <Boton
                    key={"BotonImagen"}
                    theme="Imagen"
                    onPress={pickImageAsync}
                  />
                </View>
                <View key={"Cabecera tarjeta"}>
                  <View
                    key={"ContenedorNombreUsuario"}
                    style={styles.NombrePerfil}
                  >
                    <Text
                      key={"Nombre usuario tarjeta"}
                      style={styles.TituloTarjeta}
                    >
                      {DCliente.UserName}
                    </Text>
                  </View>
                  <View
                    key={"CalificacionText"}
                    style={{
                      marginTop: 5,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      key={"calificacion text"}
                      style={[styles.Subtitulos, { fontSize: 16 }]}
                    >
                      Calificación
                    </Text>
                  </View>
                  <View
                    key="Estrellas de calificacion perfil"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    <CalificacionEst
                      key={"estrellas calificacion"}
                      califi={DCliente.Calificacion}
                    />
                  </View>
                  <View style={styles.lineaTarjeta}></View>
                  <View
                    key="Experiencia perfil"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <View
                      key={"PieTarjetaPorcentaje"}
                      style={styles.TarjetaFooter}
                    >
                      <Text
                        key={"ValorPorcentaje"}
                        style={[styles.TextosBold, { fontSize: 18 }]}
                      >
                        &#37;{DCliente.PorcentajePerfil}
                      </Text>
                      <Text
                        key={"TextoExperiencia"}
                        style={{
                          marginTop: 10,
                          marginLeft: 7,
                          color: "#828282",
                          textAlign: "center",
                          fontSize: 12,
                        }}
                      >
                        Experiencia
                      </Text>
                    </View>
                    <View
                      key={"PieTarjetaEventos"}
                      style={styles.TarjetaFooter}
                    >
                      <Text
                        key={"NumeroEventos"}
                        style={[styles.TextosBold, { fontSize: 18 }]}
                      >
                        {DCliente.EventosRealizados}
                      </Text>
                      <Text
                        key={"TextoEventos"}
                        style={{
                          marginTop: 10,
                          paddingLeft: 0,
                          color: "#828282",
                          textAlign: "center",
                          fontSize: 12,
                        }}
                      >
                        Eventos realizados
                      </Text>
                    </View>
                    <View key={"BotonEditar"} style={styles.TarjetaFooter}>
                      <Boton
                        key={"Editar perfil"}
                        theme="EditarPerfil"
                        style={{
                          width: 18,
                          height: 18,
                          paddingRight: 10,
                        }}
                        onPress={() => navigation.navigate("Editar perfil")}
                      />
                      <Text
                        key={"TextoEditar"}
                        style={{
                          marginTop: 10,
                          paddingLeft: 0,
                          color: "#828282",
                          textAlign: "center",
                          fontSize: 12,
                        }}
                      >
                        Editar mis datos
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                key={"LineaSeparacionPerfil"}
                style={styles.lineaSeparacion}
              ></View>
              <View
                key={"ContenedorInferior"}
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  marginLeft: 5,
                  marginTop: 30,
                  maxWidth: 700,
                }}
              >
                <View
                  key={"ContenedorCuadrosEstado"}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    //alignContent: "flex-start",
                    //alignSelf: "center",
                  }}
                >
                  <CuadroEstado
                    key={"EventoCreado"}
                    id={"EventoCreado"}
                    cantidad={DCliente.EventosCreados}
                    label={"Eventos Creados"}
                  />
                  <CuadroEstado
                    key={"EventoComprado"}
                    id={"EventoComprado"}
                    cantidad={DCliente.EventosComprados}
                    label={"Eventos Comprados"}
                  />
                  <CuadroEstado
                    key={"MisInvitaciones"}
                    id={"MisInvitaciones"}
                    cantidad={DCliente.Invitaciones}
                    label={"Mis invitaciones a eventos"}
                  />
                  <CuadroEstado
                    key={"MisLugares"}
                    id={"MisLugares"}
                    cantidad={DCliente.MisLugares}
                    label={"Mis lugares de eventos"}
                  />
                  <CuadroEstado
                    key={"Estadisticas"}
                    id={"Estadisticas"}
                    cantidad={DCliente.Estadisticas}
                    label={"¿Cómo van mis estadísticas de eventos?"}
                  />
                  <CuadroEstado
                    key={"EstadisticasContratacion"}
                    id={"EstadisticasContratacion"}
                    cantidad={DCliente.EstadisticasContratacion}
                    label={"Mis estadísticas por contratación"}
                  />
                </View>
              </View>
              <View
                key={"ContenedorPolitica"}
                style={{
                  marginVertical: 20,
                  width: "100%",
                  maxWidth: 680,
                  alignSelf: "center",
                }}
              >
                <View
                  key={"ContenedorTituloPolitica"}
                  style={{ alignSelf: "center" }}
                >
                  <Text key={"TituloPolitica"} style={styles.TituloTarjeta}>
                    Politica de pagos &#47; impuestos
                  </Text>
                </View>
                <View
                  key={"ContenedorTextoPolitica"}
                  style={styles.ContenedorPolitica}
                >
                  <View
                    key={"TextoPolitica"}
                    style={{ marginHorizontal: 10, marginVertical: 10 }}
                  >
                    <Text
                      key={"Politica"}
                      style={{
                        color: "black",
                        fontSize: 16,
                        fontWeight: "bold",
                        lineHeight: 25,
                      }}
                    >
                      Es posible que las regulaciones estatales o locales le
                      exijan cobrar impuestos. Le recomendamos que consulte a un
                      profesional de impuestos para asegurarse de comprender sus
                      obligaciones tributarias. EventPlace sólo puede permitir a
                      los organizadores recaudar impuestos en determinados
                      países. Trabajamos continuamente para apoyar a más países.
                    </Text>
                  </View>
                </View>
              </View>
              <View
                key={"ContenedorBoton"}
                style={{
                  marginTop: 10,
                  marginBottom: 15,
                  alignSelf: "center",
                  marginEnd: 10,
                  width: "100%",
                  maxWidth: 320,
                }}
              >
                <Boton
                  key={"Cerrar sesión"}
                  theme={"StyleBoton1"}
                  label={"Cerrar sesión"}
                  onPress={() => alert("cerrar sesión")}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Alinear: {
    //borderWidth: 1,
    alignItems: "center",
  },
  IconBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 0,
    marginTop: -20,
    width: "100%",
  },
  ScrollView: {
    paddingTop: -3,
    //marginLeft: 2,
    //backgroundColor: "black",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
  },
  PerfilContainer: {
    marginTop: 0,
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
    //alignItems: "center",
  },
  HeaderContainer: {
    marginTop: 20,
    width: "100%",
    height: 25,
    ////borderWidth: 1,
    //position: 'absolute',
  },
  TarjetaPerfil: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 310,
    borderRadius: 12,
    marginTop: 32,
    height: 271,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    elevation: 2,
  },
  Titulo: {
    alignContent: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#FBFBFB",
  },
  TituloTarjeta: {
    alignContent: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#515EC0",
  },
  CabeceraTarjeta: {
    alignSelf: "center",
    //width: "100",
  },
  imagenPrincipal: {
    display: "flex",
    alignItems: "start",
    marginLeft: 5,
    marginTop: 15,
    //flex: 2,
    width: 80,
  },
  NombrePerfil: {
    marginTop: 5,
    alignSelf: "center",
    //width: "80%",
    //flex: 5,
  },
  Subtitulos: {
    marginTop: 5,
    //paddingLeft: 7,
    color: "#828282",
  },
  lineaTarjeta: {
    borderBottomWidth: 1,
    borderBottomColor: "#C6C7C8",
    width: "90%",
    maxWidth: 294,
    alignSelf: "center",
    marginTop: 10,
  },
  lineaSeparacion: {
    borderBottomWidth: 1,
    borderBottomColor: "#72767A",
    width: "90%",
    //maxWidth: 294,
    alignSelf: "center",
    marginTop: 30,
  },
  TextosBold: {
    fontWeight: "bold",
    color: "black",
  },
  TarjetaFooter: {
    display: "flex",
    flexDirection: "column",
    width: "33%",
    alignItems: "center",
    marginTop: 10,
  },
  ContenedorPolitica: {
    marginTop: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#FBFBFB",
    marginHorizontal: 10,
  },
});

export default PerfilPrincipalScreen;
