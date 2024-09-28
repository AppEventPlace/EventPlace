import React from "react";
import { Text, View, ScrollView } from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgLogo from "../../assets/LogoSVG";

import OpcionesSeleccion from "../../constants/OpcionesSeleccion";

import { RadioButton } from "react-native-paper";

import Seleccionable from "../../components/Seleccionable";
import SeleccionTags from "../../components/SeleccionTags";
import CommonStyles, {
  Colors,
} from "../../components/CommonStyles/CommonStyles";
import CommonSpacingStyles from "../../components/CommonStyles/CommonSpacingStyles";
import BackCheckron from "../../components/CommonComponents/BackCheckron";
import { LinearProgress } from "@rneui/themed";
import CommonTextStyles from "../../components/CommonStyles/CommonTextStyles";

const Gustos = ({ navigation }) => {
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
          <BackCheckron navigation={navigation} />
        </View>
        <View style={{ width: 60, alignItems: "flex-end" }}>
          <Boton
            theme={"botonSubRay"}
            label={"Saltar"}
            onPress={() => navigation.navigate("Successful")}
          />
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
                <SeleccionTags OpcSeleccion={OpcionesSeleccion} />
              </View>
              <View
                style={[
                  CommonStyles.container,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    rowGap: 0,
                  },
                ]}
              >
                <View>
                  <SeleccionPreferencias label={"¿Te gusta crear eventos?"} />
                </View>
                <View>
                  <SeleccionPreferencias
                    label={"¿Prestas servicios para eventos?"}
                  />
                </View>
                <View>
                  <SeleccionPreferencias
                    label={
                      "¿Cuentas con un lugar/sitio/negocio para realizar eventos?"
                    }
                  />
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
              }}
            >
              <Boton
                theme={"Seleccionable"}
                label={"Continuar"}
                onPress={() => navigation.navigate("Successful")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//const selectedButton = ["0", "hola"];

/*const Seleccionados = () => {
  const [selectedeButton, setSelectedButton] = useState([]);

  function Escoger() {
    setSelectedButton(selectedeButton.concat(id));
  }
};*/
/*const Seleccion = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {OpcionesSeleccion.map((Selec) => (
        <Seleccionable key={Selec.name} id={Selec.name} label={Selec.label} />
      ))}
    </View>
  );
};*/

const SeleccionPreferencias = ({ label }) => {
  const [checked, setChecked] = React.useState("Si");

  return (
    <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
      <Text style={[CommonTextStyles.Body_L, { color: Colors.TexColor }]}>
        {label}
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            color={Colors.NightBlue_600}
            value="Si"
            status={checked === "Si" ? "checked" : "unchecked"}
            onPress={() => setChecked("Si")}
          />
          <Text style={[CommonTextStyles.Body_L, { color: Colors.TexColor }]}>
            Si
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            color={Colors.NightBlue_600}
            value="No"
            status={checked === "No" ? "checked" : "unchecked"}
            onPress={() => setChecked("No")}
          />
          <Text style={[CommonTextStyles.Body_L, { color: Colors.TexColor }]}>
            No
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Gustos;
