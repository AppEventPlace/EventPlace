import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackCheckron from "../../components/BackCheckron";
import ProgressBar from "./Components/ProgressStep";
import SvgLogo from "../../assets/LogoSVG";
import Button from "../../components/Button";
import BotonFlotante from "../../components/BotonFlotante";
import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";

const Opciones = [
  {
    logo: "Key",
    label: "Información principal",
  },
  {
    logo: "Key",
    label: "Boleteria",
  },
  // Agrega más preguntas según sea necesario
];

const Tiempo = [
  {
    Title: "Fecha de inicio",
    Date: "24/06/2024",
    Title_1: "Hora de inicio",
    Date_1: "5:00 P.M",
  },
  {
    Title: "Fecha de inicio",
    Date: "24/06/2024",
    Title_1: "Hora de inicio",
    Date_1: "5:00 P.M",
  },
];

const Info = [
  {
    Title: "Nombre del evento",
    Date: "Cumple Sofy",
    Title_1: "Tipo",
    Date_1: "Fiesta, reunión social",
  },
  {
    Title: "Categoría",
    Date: "Familiar",
    Title_1: "Clase",
    Date_1: "Privado",
  },
  {
    Title: "Evento",
    Date: "Presencial",
    Title_1: "Costo",
    Date_1: "Sí",
  },
];

const Organizador = [
  {
    Title: "Nombre",
    Date: "Tatiana Muñóz",
  },
  {
    Title: "Correo elctrónico",
    Date: "tmunoz@mail.com",
  },
  {
    Title: "Número de teléfono principal",
    Date: "+ 57 3018451535",
  },
];
const Anfitrion = [
  {
    Title: "Nombre",
    Date: "Eliana Cordoba",
  },
  {
    Title: "Correo elctrónico",
    Date: "laeli1985@mail.com",
  },
  {
    Title: "Número de teléfono principal",
    Date: "+ 57 3200987654",
  },
];

const Ubicacion = [
  {
    Title: "Departamento",
    Date: "Antioquia",
  },
  {
    Title: "Ciudad o municipio",
    Date: "Rionegro",
  },
  {
    Title: "Dirección del evento",
    Date: "Calle 48c # 99-75  Rionegro Antioquia",
  },
];

const Resumen = ({ navigation }) => {
  // Creamos un estado independiente para cada opción
  const [showInfo, setShowInfo] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  // Creamos una función para manejar el cambio de visibilidad para cada opción
  const handlePress = (index) => {
    // Si el botón de Información Principal es seleccionado
    if (index === 0) {
      setShowInfo(!showInfo);
      setShowTickets(false);
    }
    // Si el botón de Boletería es seleccionado
    else if (index === 1) {
      setShowTickets(!showTickets);
      setShowInfo(false);
    }
  };

  return (
    <SafeAreaView
      style={[
        CommonStyles.AreaView,
        { backgroundColor: Colors.Grey_Top, marginTop: -30 },
      ]}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          style={[CommonStyles.ScrollView, { backgroundColor: Colors.Primary }]}
        >
          <View style={[CommonStyles.FullContainer, { flex: 1 }]}>
            <BackCheckron navigation={navigation} />
            <ProgressBar step={3} />
            <View style={styles.FullContainer}>
              <View style={styles.optionsContainer}>
                {Opciones.map((opcion, index) => (
                  <View style={styles.buttonContainer} key={index}>
                    <Pressable
                      style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? "#EAEAEA" : "#FFFFFF" },
                        {
                          transform: [
                            {
                              scale:
                                index === 0
                                  ? showInfo
                                    ? 0.95
                                    : 1
                                  : showTickets
                                  ? 0.95
                                  : 1,
                            },
                          ],
                        },
                      ]}
                      onPress={() => handlePress(index)}
                    >
                      <View style={styles.buttonContent}>
                        <SvgLogo theme="Key" />
                        <Text style={[styles.buttonText, { color: "#000000" }]}>
                          {opcion.label}
                        </Text>
                      </View>
                      <SvgLogo
                        theme={
                          index === 0
                            ? showInfo
                              ? "ExpandLess"
                              : "ExpandMore"
                            : showTickets
                            ? "ExpandLess"
                            : "ExpandMore"
                        }
                        color="#6979F8"
                      />
                    </Pressable>
                    {index === 0 && showInfo && (
                      <View style={styles.Container}>
                        {Info.map((pregunta) => (
                          <View style={styles.SubContainer}>
                            <View style={styles.flex}>
                              <Text style={styles.Title}>{pregunta.Title}</Text>
                              <Text style={styles.Date}>{pregunta.Date}</Text>
                            </View>
                            <View style={styles.flex}>
                              <Text style={styles.Title}>
                                {pregunta.Title_1}
                              </Text>
                              <Text style={styles.Date}>{pregunta.Date_1}</Text>
                            </View>
                          </View>
                        ))}
                        {Tiempo.map((pregunta) => (
                          <View style={styles.SubContainerIcon}>
                            <View style={styles.flex}>
                              <View style={styles.Direction}>
                                <Text style={styles.Title}>
                                  {pregunta.Title}
                                </Text>
                                <SvgLogo theme="Calendario" color="#6979F8" />
                              </View>
                              <Text style={styles.Date}>{pregunta.Date}</Text>
                            </View>
                            <View style={styles.flex}>
                              <View style={styles.Direction}>
                                <Text style={styles.Title}>
                                  {pregunta.Title_1}
                                </Text>
                                <SvgLogo theme="Clock" color="#6979F8" />
                              </View>
                              <Text style={styles.Date}>{pregunta.Date_1}</Text>
                            </View>
                          </View>
                        ))}
                        <View style={styles.Underscore} />
                        <View style={styles.flex}>
                          <Text style={styles.Title}>Descripción</Text>
                          <Text style={styles.Descrip}>
                            Lorem ipsum dolor sit amet consectetur. Suspendisse
                            id netus arcu pulvinar porta molestie enim morbi
                            commodo.
                          </Text>
                        </View>
                        <View style={styles.Underscore} />
                        <Text style={styles.TitleStyle}>Organizador</Text>
                        <View style={{ rowGap: 8 }}>
                          {Organizador.map((pregunta) => (
                            <View style={styles.SubContainer}>
                              <View style={styles.flex}>
                                <Text style={styles.Title}>
                                  {pregunta.Title}
                                </Text>
                                <Text style={styles.Date}>{pregunta.Date}</Text>
                              </View>
                            </View>
                          ))}
                        </View>
                        <Text style={styles.TitleStyle}>Anfitrión</Text>
                        <View style={{ rowGap: 8 }}>
                          {Anfitrion.map((pregunta) => (
                            <View style={styles.SubContainer}>
                              <View style={styles.flex}>
                                <Text style={styles.Title}>
                                  {pregunta.Title}
                                </Text>
                                <Text style={styles.Date}>{pregunta.Date}</Text>
                              </View>
                            </View>
                          ))}
                        </View>
                        <View style={styles.Underscore} />
                        <Text style={styles.TitleStyle}>
                          Ubicación del evento
                        </Text>
                        <View style={{ rowGap: 8 }}>
                          {Ubicacion.map((pregunta) => (
                            <View style={styles.SubContainer}>
                              <View style={styles.flex}>
                                <Text style={styles.Title}>
                                  {pregunta.Title}
                                </Text>
                                <Text style={styles.Date}>{pregunta.Date}</Text>
                              </View>
                            </View>
                          ))}
                        </View>
                        <View style={styles.Anfitrion}>
                          <Text style={styles.StyleText}>
                            Ver ubicacion en el mapa
                          </Text>
                          <SvgLogo theme={"Map"} color={"#6979F8"} />
                        </View>
                        <View style={styles.Underscore} />
                        <View style={styles.BotonContainer_1}>
                          <Button
                            label="Editar información principal"
                            color="#F4F5FE"
                            theme="StyleBoton_1"
                            onPress={() =>
                              alert("Editar información principal")
                            }
                          />
                        </View>
                      </View>
                    )}
                    {index === 1 && showTickets && (
                      <View style={styles.Container}>
                        <View
                          style={{
                            rowGap: 8,
                          }}
                        >
                          <Text style={styles.TitleStyle}>VIP</Text>
                          <View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text style={styles.Title}>Cantidad</Text>
                            <Text style={styles.Date}>150</Text>
                          </View>
                          <Text style={styles.Title}>Descripción</Text>
                          <Text style={styles.Title}>
                            Lorem ipsum dolor sit amet consectetur. Eget at sed
                            vel sit suscipit. Mauris platea molestie ornare
                            libero aliquam proin elementum velit. Vel ipsum
                            venenatis purus lectus amet et nibh morbi quis.
                            Ultricies tellus at suspendisse sit in nascetur
                          </Text>
                          <View />
                        </View>

                        <View
                          style={{
                            rowGap: 8,
                          }}
                        >
                          <Text style={styles.TitleStyle}>Preferencial</Text>
                          <View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text style={styles.Title}>Cantidad</Text>
                            <Text style={styles.Date}>150</Text>
                          </View>
                          <Text style={styles.Title}>Descripción</Text>
                          <Text style={styles.Title}>
                            Lorem ipsum dolor sit amet consectetur. Eget at sed
                            vel sit suscipit. Mauris platea molestie ornare
                            libero aliquam proin elementum velit. Vel ipsum
                            venenatis purus lectus amet et nibh morbi quis.
                            Ultricies tellus at suspendisse sit in nascetur
                          </Text>
                          <View />
                        </View>

                        <View
                          style={{
                            rowGap: 8,
                          }}
                        >
                          <Text style={styles.TitleStyle}>Preferencial</Text>
                          <View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text style={styles.Title}>Cantidad</Text>
                            <Text style={styles.Date}>150</Text>
                          </View>
                          <Text style={styles.Title}>Descripción</Text>
                          <Text style={styles.Title}>
                            Lorem ipsum dolor sit amet consectetur. Eget at sed
                            vel sit suscipit. Mauris platea molestie ornare
                            libero aliquam proin elementum velit. Vel ipsum
                            venenatis purus lectus amet et nibh morbi quis.
                            Ultricies tellus at suspendisse sit in nascetur
                          </Text>
                          <View />
                        </View>
                        <View
                          style={{
                            rowGap: 8,
                          }}
                        >
                          <Text style={styles.TitleStyle}>General</Text>
                          <View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text style={styles.Title}>Cantidad</Text>
                            <Text style={styles.Date}>150</Text>
                          </View>
                          <Text style={styles.Title}>Descripción</Text>
                          <Text style={styles.Title}>
                            Lorem ipsum dolor sit amet consectetur. Eget at sed
                            vel sit suscipit. Mauris platea molestie ornare
                            libero aliquam proin elementum velit. Vel ipsum
                            venenatis purus lectus amet et nibh morbi quis.
                            Ultricies tellus at suspendisse sit in nascetur
                          </Text>
                          <View />
                        </View>
                        <View style={styles.Underscore} />
                        {Tiempo.map((pregunta) => (
                          <View style={styles.SubContainerIcon}>
                            <View style={styles.flex}>
                              <View style={styles.Direction}>
                                <Text style={styles.Title}>
                                  {pregunta.Title}
                                </Text>
                                <SvgLogo theme="Calendario" color="#6979F8" />
                              </View>
                              <Text style={styles.Date}>{pregunta.Date}</Text>
                            </View>
                            <View style={styles.flex}>
                              <View style={styles.Direction}>
                                <Text style={styles.Title}>
                                  {pregunta.Title_1}
                                </Text>
                                <SvgLogo theme="Clock" color="#6979F8" />
                              </View>
                              <Text style={styles.Date}>{pregunta.Date_1}</Text>
                            </View>
                          </View>
                        ))}
                        <View style={styles.Underscore} />
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            right: 16,
            bottom: Dimensions.get("window").height * 0.02,
          }}
        >
          <BotonFlotante navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F5FE",
    flex: 1,
  },
  PerfilContainer: {
    paddingHorizontal: 16,
    paddingBottom: 55,
  },
  FullContainer: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    justifyContent: "center",
    rowGap: 32,
    paddingBottom: 20,
  },
  optionsContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    height: 64,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
  },
  Container: {
    marginTop: 5,
    width: "100%",
    rowGap: 24,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 12,
  },
  SubContainer: {
    width: "100%",
    height: 49,
    flexDirection: "row",
    columnGap: 8,
  },
  Title: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "justify",
    color: "#72767A",
  },
  Date: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#0F172A",
  },
  SubContainerIcon: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    columnGap: 32,
  },
  flex: {
    flex: 1,
    rowGap: 8,
  },
  Direction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Underscore: {
    height: 1,
    backgroundColor: "#BDBDBD",
  },
  Descrip: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
  TitleStyle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#515EC0",
  },
  Anfitrion: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    columnGap: 18,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  StyleText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#6979F8",
  },
  BotonContainer_1: {
    width: "100%",
    height: 43,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#6979F8",
    //borderWidth: 1,
  },
});

export default Resumen;
