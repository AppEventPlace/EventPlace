import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import DatePickerComponent from "../../components/datepicke";
import IndicativosTel from "../../constants/IndicativosTel";
import { SelectList } from "react-native-dropdown-select-list";
import SelectorIndicativo from "../../constants/IndicativosTel";
import SvgLogo from "../../assets/LogoSVG";
import Direccionador from "../../components/Direccionador";

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
                      placeholderTextColor="#0F172A"
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
                          placeholderTextColor="#0F172A"
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
                  <View
                    key={"TelefonoCelular1"}
                    style={{
                      marginTop: 20,
                      //width: "95%",
                      marginLeft: 15,
                      marginRight: 15,
                    }}
                  >
                    <Text style={style.SubFormsTitulo}>Número de celular</Text>
                  </View>
                  <View style={style.SubContainer5}>
                    <SelectorIndicativo />
                  </View>

                  <View style={style.SubContainer2}>
                    <View
                      style={{
                        width: "60%",
                        height: "100%",
                        //borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomWidth: 1.5,
                        borderBottomColor: "#A1A5A9",
                        marginLeft: 100,
                      }}
                    >
                      <TextInput
                        placeholder={DCliente.Celular}
                        style={style.TexInput}
                        placeholderTextColor="#0F172A"
                      />
                    </View>
                  </View>

                  <View key={"Correo"} style={style.SubFormsDisable}>
                    <Text
                      key={"labelCorreo"}
                      style={style.SubFormsTituloDisable}
                    >
                      Correo electrónico
                    </Text>
                    <TextInput
                      key={"InputCorreo"}
                      placeholder={DCliente.CorreoUsuario}
                      placeholderTextColor="#A1A3A6"
                      style={style.TexInputDisable}
                      editable={false}
                    />
                  </View>
                  <View
                    key={"Apodo"}
                    style={[style.SubForms, { marginBottom: 30 }]}
                  >
                    <Text key={"TituloApodo"} style={style.SubFormsTitulo}>
                      Nombre de usuario &#40;Opcional&#41;
                    </Text>
                    <View key={"ComponentesApodo"} style={style.SubContainer2}>
                      <View
                        key={"ContenedorinputApodo"}
                        style={{
                          width: "86.5%",
                          height: "100%",
                          marginLeft: 0,
                          //borderWidth: 1,
                          //alignItems: "center",
                          //justifyContent: "center",
                        }}
                      >
                        <TextInput
                          placeholder={DCliente.NombrePersonalizado}
                          style={[style.TexInput, { textAlign: "left" }]}
                          placeholderTextColor="#0F172A"
                        />
                      </View>
                      <View key={"ContainerCheck"} style={{ width: "13.5%" }}>
                        <SvgLogo theme={"Check"} />
                      </View>
                    </View>
                  </View>
                </View>
              ))}
              <View style={{ marginTop: 20 }}>
                <Direccionador
                  key={"ActualizarContraseña"}
                  logo={"Key"}
                  label={"Cambiar Contraseña"}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Direccionador
                  Key={"EditarGustos"}
                  logo={"HappyFace"}
                  label={"Editar gustos"}
                />
              </View>
              <View style={{ marginTop: 15 }}>
                <Direccionador
                  key={"EditarServicios"}
                  logo={"Recaudo"}
                  label={"Editar servicios"}
                />
              </View>
              <View style={{ marginTop: 15, marginBottom: 15 }}>
                <Direccionador
                  key={"EditarHorario"}
                  logo={"CalendarClock"}
                  label={"Editar Horario de disponibilidad"}
                />
              </View>
              <View style={style.lineaSeparacion} />
              <View
                key={"ContenedorBoton"}
                style={{
                  marginTop: 10,
                  marginBottom: 15,
                  alignSelf: "center",
                  width: "100%",
                  maxWidth: 320,
                  height: 45,
                }}
              >
                <Boton
                  key={"Cerrar sesión"}
                  theme={"StyleBoton"}
                  color={"#6979F8"}
                  label={"Guardar cambios"}
                  onPress={() => alert("cerrar sesión")}
                />
              </View>
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
    elevation: 5,
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
    fontWeight: "600",
    //lineHeight: 20,
  },
  SubFormsDisable: {
    marginTop: 20,
    //width: "95%",
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: "#A1A3A6",

    height: 70,
  },
  SubFormsTituloDisable: {
    fontSize: 14,
    fontWeight: "500",
    color: "#A1A3A6",
  },
  TexInputDisable: {
    //borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#A1A3A6",
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
    // height: "100%",
    //borderWidth: 1,
    //justifyContent: "center",
  },
  lineaSeparacion: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#72767A",
    width: "95%",
    //maxWidth: 294,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default EditarPerfilScreen;
