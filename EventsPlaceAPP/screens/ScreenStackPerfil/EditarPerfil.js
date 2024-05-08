import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import DatePickerComponent from "../../components/datepicke";
import IndicativosTel from "../../constants/IndicativosTel";
import { SelectList } from "react-native-dropdown-select-list";
import SelectorIndicativo from "../../constants/IndicativosTel";

const EditarPerfilScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  //Variable de estado que contenga el valor de la imagen seleccionada.

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "#032030", flex: 1 }}>
        <ScrollView style={style.PerfilContainer}>
          <View style={style.PageContainer}>
            <View key={"CabeceraPagina"} style={style.HeaderContainer}>
              <Boton
                theme="BackCheckron"
                label="Volver"
                onPress={() => navigation.navigate("Mi perfil")}
              />
            </View>
            <View key={"TituloPaginaEditar"} style={{ marginTop: 15 }}>
              <Text style={style.Titulo}>Editar mis datos</Text>
            </View>
            <View key={"FormularioEdicionPerfil"} style={{ marginTop: 30 }}>
              <Text
                key={"TituloFormulario"}
                style={{ fontSize: 16, color: "#0F172A", fontWeight: "bold" }}
              >
                Datos de contacto
              </Text>
              {DatosClientePrueba.map((DCliente) => (
                <View
                  key={"FormularioEdicionContacto"}
                  style={style.ContenedorFormularioContacto}
                >
                  <View key={"EditarNombres"} style={style.SubForms}>
                    <Text key={"labelNombres"} style={style.SubFormsTitulo}>
                      Nombre y apellido
                    </Text>
                    <TextInput
                      key={"InputNombres"}
                      placeholder={DCliente.UserName}
                      style={style.TexInput}
                    />
                  </View>
                  <View style={style.SubForms}>
                    <Text style={style.SubFormsTitulo}>
                      Fecha de nacimiento
                    </Text>
                    <View style={style.SubContainer2}>
                      <View style={style.SubContainer3}>
                        <TextInput
                          placeholder={
                            selectedDate
                              ? selectedDate.toLocaleDateString()
                              : DCliente.FechaNacimiento
                          }
                          //editable={false}
                          style={[style.TexInput, { textAlign: "left" }]}
                        />
                      </View>
                      <View
                        style={[
                          style.SubContainer4,
                          {
                            borderBottomColor: "#A1A5A9",
                          },
                        ]}
                      >
                        <DatePickerComponent
                          value={selectedDate}
                          onDateChange={handleDateChange}
                          IconColor="#6979F8" // Color del icono SVG
                        />
                      </View>
                    </View>
                  </View>
                  <View style={style.SubForms}>
                    <Text style={style.SubFormsTitulo}>Número de celular</Text>
                    <View style={style.SubContainer2}>
                      <View style={style.SubContainer5}>
                        <SelectorIndicativo />
                      </View>
                      <View
                        style={{
                          width: "70%",
                          height: "100%",
                          //borderWidth: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TextInput
                          placeholder="Ingresa tu número celular"
                          style={style.TexInput}
                        />
                      </View>
                    </View>
                  </View>
                  <View key={"Correo"} style={style.SubForms}>
                    <Text key={"labelCorreo"} style={style.SubFormsTitulo}>
                      Correo electrónico
                    </Text>
                    <TextInput
                      key={"InputCorreo"}
                      placeholder={DCliente.CorreoUsuario}
                      style={style.TexInput}
                      editable={false}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    marginTop: 0,
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
  },
  PageContainer: {
    marginHorizontal: 10,
  },
  Titulo: {
    fontSize: 24,

    fontWeight: "bold",
    color: "#515EC0",
  },
  HeaderContainer: {
    marginTop: 10,
    width: "100%",
    height: 25,
    ////borderWidth: 1,
    //position: 'absolute',
  },
  ContenedorFormularioContacto: {
    borderRadius: 12,
    backgroundColor: "#FBFBFB",
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    marginHorizontal: 10,
    marginTop: 20,
  },
  SubForms: {
    marginTop: 20,
    //width: "95%",
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: "#A1A5A9",

    height: 70,
  },
  SubFormsTitulo: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0F172A",
  },
  TexInput: {
    //borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "500",
    //lineHeight: 20,
  },
  SubContainer2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //borderWidth: 1,
    gap: 8,
  },
  SubContainer3: {
    width: "80%",
    height: "100%",
    //borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SubContainer4: {
    width: "20%",
    height: "100%",
    //borderWidth: 1,
    //justifyContent: "center",
  },
  SubContainer5: {
    width: "30%",
    height: "100%",
    //borderWidth: 1,
    //justifyContent: "center",
  },
});

export default EditarPerfilScreen;
