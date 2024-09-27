import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearProgress } from "@rneui/themed";
import Boton from "@/components/Button";
import BackCheckron from "@/components/CommonComponents/BackCheckron";
import SeleccionTags from "@/components/organisms/SeleccionTags";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import OpcionesSeleccion from "@/constants/OpcionesSeleccion";
import { Checkbox, RadioButton } from "react-native-paper";
import { IPreference } from "@/interfaces/IPreference";
import { StyleSheet } from "react-native";
import Button from "@/components/CommonComponents/Button";

export interface IGustosViewProps {
  preferences: IPreference[];
}

const GustosView: React.FC<IGustosViewProps> = ({ preferences }) => {
  const [responseCreateEvents, setResponseCreateEvents] = useState<
    string | null
  >(null);
  const [responseProvideServices, setResponseProvideServices] = useState<
    string | null
  >(null);
  const [responseHavePlace, setResponseHavePlace] = useState<string | null>(
    null
  );

  const Progress = 0.6;

  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View
        style={[
          CommonSpacingStyles.VerticalSpacing_10_16,
          { display: "flex", flexDirection: "row", height: 30, width: "100%" },
        ]}
      >
        <View style={{ flex: 2 }}>
          <BackCheckron navigation={navigator} />
        </View>
      </View>

      <ScrollView style={CommonStyles.ScrollView}>
        <View style={CommonStyles.FullContainer}>
          <View style={[CommonStyles.ViewProgressBar, { marginVertical: 12 }]}>
            <LinearProgress
              style={CommonStyles.ProgressBar}
              value={Progress}
              color={Colors.NightBlue_800}
              variant="determinate"
              trackColor={Colors.NightBlue_200}
              animation={{ duration: 1500 }}
            />
            <Text>{Progress * 100}%</Text>
          </View>

          <View style={CommonSpacingStyles.VerticalSpacing_40}>
            <View style={CommonSpacingStyles.VerticalSpacing_24}>
              <View style={CommonSpacingStyles.VerticalSpacing_16}>
                <Text style={CommonTextStyles.Heding_H5}>
                  Gustos y servicios
                </Text>
                <Text style={CommonTextStyles.SemiBold_L}>
                  Selecciona algunos eventos a los cuales te gusta ir o
                  participar
                </Text>
              </View>

              <View
                style={[
                  CommonStyles.container,
                  { paddingHorizontal: 10, paddingVertical: 10 },
                ]}
              >
                <SeleccionTags OpcSeleccion={preferences} />
              </View>

              {/* Selección de Preferencias */}
              <View style={styles.container}>
                <View style={styles.questionContainer}>
                  <Text style={CommonTextStyles.SemiBold_L}>
                    ¿Te gustaría crear eventos?
                  </Text>
                  <View style={styles.radioContainer}>
                    <RadioButton
                      value="Si"
                      status={
                        responseCreateEvents === "Si" ? "checked" : "unchecked"
                      }
                      onPress={() => setResponseCreateEvents("Si")}
                    />
                    <Text style={styles.radioLabel}>Si</Text>
                    <RadioButton
                      value="No"
                      status={
                        responseCreateEvents === "No" ? "checked" : "unchecked"
                      }
                      onPress={() => setResponseCreateEvents("No")}
                    />
                    <Text style={styles.radioLabel}>No</Text>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={CommonTextStyles.SemiBold_L}>
                    ¿Prestas servicios para eventos?
                  </Text>
                  <View style={styles.radioContainer}>
                    <RadioButton
                      value="Si"
                      status={
                        responseProvideServices === "Si"
                          ? "checked"
                          : "unchecked"
                      }
                      onPress={() => setResponseProvideServices("Si")}
                    />
                    <Text style={styles.radioLabel}>Si</Text>
                    <RadioButton
                      value="No"
                      status={
                        responseProvideServices === "No"
                          ? "checked"
                          : "unchecked"
                      }
                      onPress={() => setResponseProvideServices("No")}
                    />
                    <Text style={styles.radioLabel}>No</Text>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={CommonTextStyles.SemiBold_L}>
                    ¿Cuentas con un lugar/sitio/negocio para realizar eventos?
                  </Text>
                  <View style={styles.radioContainer}>
                    <RadioButton
                      value="Si"
                      status={
                        responseHavePlace === "Si" ? "checked" : "unchecked"
                      }
                      onPress={() => setResponseHavePlace("Si")}
                    />
                    <Text style={styles.radioLabel}>Si</Text>
                    <RadioButton
                      value="No"
                      status={
                        responseHavePlace === "No" ? "checked" : "unchecked"
                      }
                      onPress={() => setResponseHavePlace("No")}
                    />
                    <Text style={styles.radioLabel}>No</Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                marginBottom: 30,
                marginHorizontal: 5,
                maxWidth: 330,
                minWidth: 320,
                alignSelf: "center",
                height: 43,
              }}
            >
              {/* <Boton theme={"Seleccionable"} label={"Continuar"} onPress={() => { }} /> */}

              <Button
                theme="Checked"
                label="Continuar"
                color={Colors.Primary}
                onPress={() => {
                  console.log("Botón presionado");
                }}
                disabled={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
});

export default GustosView;
