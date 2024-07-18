import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Linking,
  Platform,
} from "react-native";
import BackCheckron from "../../components/BackCheckron";
import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";
import CommonTextStyles from "../../CommonStyles/CommonTextStyles";
import SeleccionTags from "../../components/SeleccionTags";
import OpcionesSeleccion from "../../constants/OpcionesSeleccion";
import SvgLogo from "../../assets/LogoSVG";
import Froms from "../../components/Form";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

const Filtros = ({ navigation }) => {
  const preguntas = [
    {
      Title: "Desde",
      SubTitle: "DD/MM/AAAA",
      logo1: "Calendario",
      type: "1",
      Title_1: "Hasta",
      SubTitle_1: "DD/MM/AAAA",
      logo2: "Calendario",
    },
    {
      Title: "Hora",
      SubTitle: "00:00 AM",
      logo1: "Clock",
      type: "2",
    },
  ];
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Grey_Top }]}
    >
      <ScrollView
        style={[
          CommonStyles.ScrollView,
          { backgroundColor: Colors.Primary, marginTop: 0 },
        ]}
      >
        <View
          key={"PaginaPrincipalDetalleEvt"}
          style={[
            CommonStyles.FullContainer,
            { marginTop: 10, gap: 24, marginBottom: 10 },
          ]}
        >
          <View key={"BotonVolver"}>
            <BackCheckron
              theme={"BackCheckron"}
              label={"Volver"}
              navigation={navigation}
            />
          </View>
          <View
            key={"CabeceraFiltros"}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View key={"Titulo"} style={{ width: "65%" }}>
              <Text style={CommonTextStyles.Heding_H5}>Filtros</Text>
            </View>
            <View
              key={"BorrarFiltros"}
              style={[
                styles.ContenedorLogoTitulo,
                { width: "35%", alignItems: "flex-end" },
              ]}
            >
              <Pressable
                key={"BotonBorrarFiltro"}
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#E3E2FC" : null },
                  styles.ContenedorLogoTitulo,
                  {
                    borderRadius: 12,
                    width: "100%",
                    height: 30,
                    alignItems: "center",
                    gap: 8,
                    paddingHorizontal: 10,
                  },
                ]}
                onPress={() => navigation.navigate("Filtros")}
              >
                <View>
                  <Text style={[CommonTextStyles.Subtitle_16]}>
                    Borrar Filtros
                  </Text>
                </View>
                <View>
                  <SvgLogo theme={"Delete"} color={Colors.NightBlue_600} />
                </View>
              </Pressable>
            </View>
          </View>
          <View key={"TituloFiltroTipo"} style={styles.ContenedorLogoTitulo}>
            <View>
              <SvgLogo theme={"Sell"} color={Colors.NightBlue_600} />
            </View>
            <View>
              <Text style={CommonTextStyles.Subtitle_18}>Tipo de evento</Text>
            </View>
          </View>
          <View
            key={"FiltroTipo"}
            style={[
              CommonStyles.container,
              { paddingVertical: 0, paddingHorizontal: 5 },
            ]}
          >
            <SeleccionTags OpcSeleccion={OpcionesSeleccion} />
          </View>
          <View key={"TituloFiltroCategor"} style={styles.ContenedorLogoTitulo}>
            <View>
              <SvgLogo theme={"CategoriaLogo"} color={Colors.NightBlue_600} />
            </View>
            <View>
              <Text style={CommonTextStyles.Subtitle_18}>Categoria</Text>
            </View>
          </View>
          <View
            key={"FiltroTipoCateg"}
            style={[
              CommonStyles.container,
              { paddingVertical: 0, paddingHorizontal: 5 },
            ]}
          >
            <SeleccionTags OpcSeleccion={OpcionesSeleccion} />
          </View>
          <View
            key={"TituloFiltroUbicacion"}
            style={styles.ContenedorLogoTitulo}
          >
            <View>
              <SvgLogo theme={"Ubicacion"} color={Colors.NightBlue_600} />
            </View>
            <View>
              <Text style={CommonTextStyles.Subtitle_18}>Ubicación</Text>
            </View>
          </View>
          <View
            key={"FiltroUbicacion"}
            style={[
              CommonStyles.container,
              //{ paddingVertical: 0, paddingHorizontal: 5 },
            ]}
          >
            <Dropdown
              key={"UbicacionDepartamento"}
              Title={"Departamento"}
              SubTitle={"Selecciona un departamento"}
            />
            <Dropdown
              key={"UbicacionCiudad"}
              Title={"Ciudad"}
              SubTitle={"Selecciona una ciudad"}
            />
          </View>
          <View key={"TituloFiltroHorario"} style={styles.ContenedorLogoTitulo}>
            <View>
              <SvgLogo theme={"Calendario"} color={Colors.NightBlue_600} />
            </View>
            <View>
              <Text style={CommonTextStyles.Subtitle_18}>Fecha y Hora</Text>
            </View>
          </View>
          <View key={"FiltroFecha"} style={CommonStyles.container}>
            {[...preguntas].map((pregunta, index) => (
              <Froms
                key={index}
                Title={pregunta.Title}
                SubTitle={pregunta.SubTitle}
                logo1={pregunta.logo1}
                logo2={pregunta.logo2}
                Title_1={pregunta.Title_1}
                SubTitle_1={pregunta.SubTitle_1}
                type={pregunta.type}
              />
            ))}
          </View>
          <View key={"TituloFiltroPrecio"} style={styles.ContenedorLogoTitulo}>
            <View>
              <SvgLogo theme={"Moneda"} color={Colors.NightBlue_600} />
            </View>
            <View>
              <Text style={CommonTextStyles.Subtitle_18}>Precio</Text>
            </View>
          </View>
          <View
            key={"FiltroPrecio"}
            style={[
              CommonStyles.container,
              { paddingVertical: 0, paddingHorizontal: 5 },
            ]}
          >
            <SeleccionTags OpcSeleccion={OpcionesSeleccion} />
          </View>
          <View key={"BotonBuscar"} style={{ height: 43 }}>
            <Button
              theme={"StyleBoton"}
              label={"Aplicar filtros y buscar"}
              color={Colors.NightBlue_600}
              onPress={() => alert("Buscar")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ContenedorLogoTitulo: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    //justifyContent: "center",
  },
});
export default Filtros;
