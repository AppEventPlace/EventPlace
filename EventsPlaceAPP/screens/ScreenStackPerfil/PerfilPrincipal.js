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
        <View style={styles.PerfilContainer}>
          <View style={styles.IconBackground}>
            <IconSVG theme={"BackgroundPerfil"} />
          </View>

          <View style={{ alignSelf: "center", marginTop: 20 }}>
            <Text style={styles.Titulo}> Mi perfil </Text>
          </View>
          {DatosClientePrueba.map((DCliente) => (
            <View>
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
                    //Pase el URI de la imagen seleccionada al componente ImageViewer.
                    placeholderImageSource={FondImage}
                    selectedImage={selectedImage}
                    ancho={68}
                    alto={68}
                  />
                  <Boton theme="Imagen" onPress={pickImageAsync} />
                </View>
                <View key={"Cabecera tarjeta"}>
                  <View style={styles.NombrePerfil}>
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
                    <View style={styles.TarjetaFooter}>
                      <Text style={[styles.TextosBold, { fontSize: 18 }]}>
                        &#37;{DCliente.PorcentajePerfil}
                      </Text>
                      <Text
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
                    <View style={styles.TarjetaFooter}>
                      <Text style={[styles.TextosBold, { fontSize: 18 }]}>
                        {DCliente.EventosRealizados}
                      </Text>
                      <Text
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
                    <View style={styles.TarjetaFooter}>
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
              <View style={styles.lineaSeparacion}></View>
              <View
                style={{ alignSelf: "center", marginLeft: 5, marginTop: 30 }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                  }}
                >
                  <CuadroEstado
                    key={"Evento Creado"}
                    cantidad={DCliente.EventosCreados}
                    label={"Eventos Creados"}
                  />
                  <CuadroEstado
                    key={"Evento Comprado"}
                    cantidad={DCliente.EventosComprados}
                    label={"Eventos Comprados"}
                  />
                  <CuadroEstado
                    key={"Mis invitaciones"}
                    cantidad={DCliente.Invitaciones}
                    label={"Mis invitaciones a eventos"}
                  />
                  <CuadroEstado
                    key={"Mis lugares"}
                    cantidad={DCliente.MisLugares}
                    label={"Mis lugares de eventos"}
                  />
                </View>
              </View>

              <View
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
});

export default PerfilPrincipalScreen;
