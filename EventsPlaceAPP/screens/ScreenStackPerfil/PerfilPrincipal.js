import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import IconSVG from "../../assets/LogoSVG";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import CalificacionEst from "../../components/CalificacionEst";
import CuadroEstado from "../../components/CuadroEstado";
import Autenticar from "../../App";

const PerfilPrincipalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.ScrollView}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.PerfilContainer}>
          <View style={styles.HeaderContainer}>
            <Boton
              theme="BackCheckron"
              label="Atras"
              onPress={() => navigation.navigate("Wall")}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.Titulo}> Mi perfil </Text>
          </View>
          {DatosClientePrueba.map((DCliente) => (
            <View>
              <View style={styles.TarjetaPerfil} key={DCliente.UserName}>
                <View
                  style={styles.CabeceraTarjeta}
                  key={"cabecera tarjeta perfil"}
                >
                  <View style={styles.imagenPrincipal}>
                    <IconSVG
                      key={"icono foto generico"}
                      theme={"FotoGenerica"}
                      ancho={64}
                      alto={64}
                    />
                  </View>

                  <View style={styles.NombrePerfil}>
                    <Text key={"Nombre usuario tarjeta"} style={styles.Titulo}>
                      {DCliente.UserName}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 40,

                      width: 30,
                    }}
                  >
                    <Boton
                      key={"Editar perfil"}
                      theme="EditarPerfil"
                      style={{ width: 24, height: 24, paddingRight: 10 }}
                      onPress={() => navigation.navigate("Editar perfil")}
                    />
                  </View>
                </View>
                <View>
                  <Text key={"calificacion text"} style={styles.Subtitulos}>
                    Calificación
                  </Text>
                  <View
                    key="Estrellas de calificacion perfil"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: 5,
                    }}
                  >
                    <CalificacionEst
                      key={"estrellas calificacion"}
                      califi={DCliente.Calificacion}
                    />
                    <Text
                      key={"numero calificacion"}
                      style={{
                        color: "#626264",
                        paddingLeft: 5,
                        marginTop: -1,
                      }}
                    >
                      &#40;{DCliente.Calificacion}&#41;
                    </Text>
                  </View>
                  <View
                    key="Experiencia perfil"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Text
                      style={{
                        marginTop: 10,
                        paddingLeft: 7,
                        color: "#828282",
                        flex: 5,
                      }}
                    >
                      Experiencia
                    </Text>
                    <Text
                      style={{
                        marginTop: 10,
                        paddingLeft: 0,
                        color: "#828282",
                      }}
                    >
                      &#35; de eventos realizados
                    </Text>
                    <Text
                      style={{
                        marginTop: 10,
                        paddingRight: 2,
                        color: "#333333",
                        paddingLeft: 5,
                        width: 30,
                        fontWeight: "bold",
                      }}
                    >
                      {DCliente.EventosRealizados}
                    </Text>
                  </View>
                  <View style={{ width: "100%", marginTop: 10, marginLeft: 7 }}>
                    <IconSVG
                      theme={"ProgressBar"}
                      progress={DCliente.PorcentajePerfil}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      marginRight: 5,
                      alignSelf: "center",
                    }}
                  >
                    <Boton
                      theme={"StyleBoton2"}
                      label={"Chat privado"}
                      onPress={() => navigation.navigate("Chat")}
                    />
                  </View>
                </View>
              </View>
              <View>
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
                  alignItems: "center",
                  marginEnd: 10,
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    marginTop: 0,
    marginLeft: 2,
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
  },
  PerfilContainer: {
    marginTop: 0,
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
    alignItems: "center",
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
    borderRadius: 12,
    marginTop: 50,
    height: 250,
    display: "flex",
    flexDirection: "column",
  },
  Titulo: {
    alignContent: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#333333",
  },
  CabeceraTarjeta: {
    display: "flex",
    flexDirection: "row",
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
    marginTop: 30,
    //width: "80%",
    flex: 5,
  },
  Subtitulos: {
    marginTop: 5,
    paddingLeft: 7,
    color: "#828282",
  },
});

export default PerfilPrincipalScreen;
