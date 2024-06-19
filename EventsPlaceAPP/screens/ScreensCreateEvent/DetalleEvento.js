import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Button from "../../components/Button";
import CommonStyles, { Colors } from "../../CommonStyles/CommonStyles";
import BackCheckron from "../../components/BackCheckron";
import EventosCercanos from "../../constants/EventosCercanos";
import CommonTextStyles from "../../CommonStyles/CommonTextStyles";
import EjemploDetalleEvento from "../../constants/EjemploDetalleEvento";
import SvgLogo from "../../assets/LogoSVG";
import Direccionador from "../../components/Direccionador";
import TarjetaOrganizador from "../../components/TarjetaOrganizador";
import TarjetaAnfitrion from "../../components/TarjetaAnfitrion";

const DetalleEvento = ({ navigation }) => {
  const Imagen_width = Dimensions.get("window").width * 0.85;
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView_Full, { backgroundColor: Colors.Grey_Top }]}
    >
      <ScrollView
        style={[
          CommonStyles.ScrollView,
          { backgroundColor: Colors.Primary, marginTop: 20 },
        ]}
      >
        <View
          key={"PaginaPrincipalDetalleEvt"}
          style={[CommonStyles.FullContainer, { marginTop: 20 }]}
        >
          <View key={"BotonVolver"}>
            <BackCheckron
              theme={"BackCheckron"}
              label={"Volver"}
              navigation={navigation}
            />
          </View>
          <View key={"CabeceraGaleríaEvt"} style={{ marginTop: 20 }}>
            <ScrollView
              style={styles.ScrollGaleriaEvt}
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              snapToInterval={Imagen_width + 20}
              snapToAlignment="center"
            >
              {EventosCercanos.map((Galeria) => (
                <View
                  key={"ContenedorImagEvt" + Galeria.Id}
                  style={{
                    borderRadius: 12,
                    width: Imagen_width,
                    maxWidth: 348,
                    height: 151,
                    marginRight: 16,
                  }}
                >
                  <Image
                    key={"ImagenEvt" + Galeria.Id}
                    source={Galeria.Imagen}
                    style={{
                      width: Imagen_width,
                      maxWidth: 310,
                      height: 151,
                      marginHorizontal: 16,
                      borderRadius: 12,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          {EjemploDetalleEvento.map((DatEvt) => (
            <View key={"ContenedorDetalle"} style={styles.DetalleEvtContainer}>
              <View key="TituloDetalle">
                <Text
                  key="TextoTituloDetalle"
                  style={CommonTextStyles.Heding_H5}
                >
                  {DatEvt.Titulo}
                </Text>
              </View>
              <View key="DetalleTarjeta" style={[CommonStyles.container]}>
                <View
                  key={"TarjetaDetalleTiempo"}
                  style={styles.ContenedorColumnasTarjeta}
                >
                  <View key={"DetalleFecha"} style={styles.ColumnaIzquierda}>
                    <View
                      key="TituloColumnaIzq"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 8,
                      }}
                    >
                      <SvgLogo
                        key={"LogoFecha"}
                        theme={"Calendario"}
                        color={Colors.NightBlue_600}
                      />
                      <Text
                        key={"TextoFecha"}
                        style={CommonTextStyles.SemiBold_L}
                      >
                        Fecha
                      </Text>
                    </View>
                    <View key={"fechaInicio"}>
                      <Text
                        key={"TituloFechaIni"}
                        style={CommonTextStyles.SemiBold_M}
                      >
                        Inicio
                      </Text>
                      <Text
                        key={"FechaIni"}
                        style={CommonTextStyles.SemiBold_L}
                      >
                        {DatEvt.FechaInicio}
                      </Text>
                    </View>
                    <View key={"fechaFin"}>
                      <Text
                        key={"TituloFechaFin"}
                        style={CommonTextStyles.SemiBold_M}
                      >
                        Fin
                      </Text>
                      <Text
                        key={"FechaFin"}
                        style={CommonTextStyles.SemiBold_L}
                      >
                        {DatEvt.FechaFin}
                      </Text>
                    </View>
                  </View>
                  <View key={"DetalleHora"} style={styles.ColumnaDerecha}>
                    <View
                      key="TituloColumnaDer"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 8,
                      }}
                    >
                      <SvgLogo
                        key={"LogoHora"}
                        theme={"Clock"}
                        color={Colors.NightBlue_600}
                      />
                      <Text
                        key={"TextoHora"}
                        style={CommonTextStyles.SemiBold_L}
                      >
                        Hora
                      </Text>
                    </View>
                    <View key={"horaInicio"} style={{ alignItems: "flex-end" }}>
                      <Text
                        key={"TituloHoraIni"}
                        style={CommonTextStyles.SemiBold_M}
                      >
                        Inicio
                      </Text>
                      <Text key={"HoraIni"} style={CommonTextStyles.SemiBold_L}>
                        {DatEvt.FechaInicio}
                      </Text>
                    </View>
                    <View key={"HoraFin"} style={{ alignItems: "flex-end" }}>
                      <Text
                        key={"TituloHoraFin"}
                        style={CommonTextStyles.SemiBold_M}
                      >
                        Fin
                      </Text>
                      <Text
                        key={"FechaFin"}
                        style={CommonTextStyles.SemiBold_L}
                      >
                        {DatEvt.FechaFin}
                      </Text>
                    </View>
                  </View>
                </View>
                <View key="LineaSeparación1" style={styles.LineaSeparacion} />
                <View
                  key={"DatosEvento"}
                  style={styles.ContenedorColumnasTarjeta}
                >
                  <View
                    key={"ColumnaIzquierdDetall"}
                    style={styles.ColumnaIzquierda}
                  >
                    <CajaDetalleIzq
                      key={"CategoriaDetall"}
                      logo={"CategoriaLogo"}
                      Titulo={"Categoria"}
                      Valor={DatEvt.Categoria}
                    />
                    <CajaDetalleIzq
                      key={"AforoDetall"}
                      logo={"Aforo"}
                      Titulo={"Aforo"}
                      Valor={DatEvt.Aforo}
                    />
                    <CajaDetalleIzq
                      key={"TipoLugarDetall"}
                      logo={"TipoLugar"}
                      Titulo={"Tipo de lugar"}
                      Valor={DatEvt.TipoLugar}
                    />
                  </View>
                  <View
                    key={"ColumnaDerechaDetall"}
                    style={styles.ColumnaDerecha}
                  >
                    <CajaDetalleDer
                      key={"ClaseEventoDetall"}
                      logo={"Sell"}
                      Titulo={"Clase de evento"}
                      Valor={DatEvt.ClaseEvento}
                      ubicacionCol={true}
                    />
                    <CajaDetalleDer
                      key={"AforoDispoDetall"}
                      logo={"AforoDisponible"}
                      Titulo={"Aforo disponible"}
                      Valor={DatEvt.AforoDisponible}
                      ubicacionCol={true}
                    />
                  </View>
                </View>
                <View key="LineaSeparación2" style={styles.LineaSeparacion} />
                <View key={"MasDetalle"} style={[CommonStyles.AmpliarInfo, {}]}>
                  <Text style={CommonTextStyles.Subtitle_16}>
                    Más detalle del evento
                  </Text>
                  <Text style={CommonTextStyles.Subtitle_16}>+</Text>
                </View>
              </View>
              <View key={"UbicacionDireccionador"}>
                <Direccionador
                  key={"UbicacionDetalle"}
                  logo={"Ubicacion"}
                  color={Colors.NightBlue_600}
                  label={"Ubicación del evento"}
                />
              </View>
              <View key={"TituloOrganizadorEvt"}>
                <Text style={CommonTextStyles.SemiBold_L}>
                  Organizador del evento
                </Text>
              </View>
              <View key={"TarjetaOrganizador"}>
                <TarjetaOrganizador
                  Nombre={DatEvt.NombreOrganizador}
                  Calificacion={DatEvt.CalificacionOrganizador}
                  experiencia={DatEvt.ExpOrganizador}
                  EventosRealizados={DatEvt.EventosRealizadorOrg}
                />
              </View>
              <View key={"TituloAnfitrionEvt"}>
                <Text style={CommonTextStyles.SemiBold_L}>
                  Anfitrión del evento
                </Text>
              </View>
              <View key={"TarjetaAnfitrion"}>
                <TarjetaAnfitrion
                  Nombre={DatEvt.NombreOrganizador}
                  Correo={DatEvt.CorreoAnfitrion}
                  Celular={DatEvt.CelularAnfitrion}
                />
              </View>
              <View key={"DireccionadorPolitica"}>
                <Direccionador
                  key={"Politica"}
                  logo={null}
                  color={Colors.NightBlue_600}
                  label={"Conoce nuestra politica de reembolso"}
                />
              </View>
              <View key={"FaqDireccionador"}>
                <Direccionador
                  key={"PoliticaDir"}
                  logo={null}
                  color={Colors.NightBlue_600}
                  label={"Preguntas frecuentes"}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CajaDetalleIzq = ({ logo, Titulo, Valor }) => {
  return (
    <View
      key={"ClaseEvtDet"}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}
    >
      <View key={"ContenedorLogoClaseEvt"} style={{ justifyContent: "center" }}>
        <SvgLogo key={"logoCate"} theme={logo} color={Colors.NightBlue_600} />
      </View>
      <View key={"DatosClaseEvt"} style={{ gap: 4 }}>
        <Text style={CommonTextStyles.SemiBold_M}>{Titulo}</Text>
        <Text style={[CommonTextStyles.SemiBold_M, { color: Colors.Grey_07 }]}>
          {Valor}
        </Text>
      </View>
    </View>
  );
};
const CajaDetalleDer = ({ logo, Titulo, Valor }) => {
  return (
    <View
      key={"ClaseEvtDet"}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}
    >
      <View key={"ContenedorLogoClaseEvt"} style={{ justifyContent: "center" }}>
        <SvgLogo key={"logoCate"} theme={logo} color={Colors.NightBlue_600} />
      </View>
      <View key={"DatosClaseEvt"} style={{ gap: 4, alignItems: "flex-end" }}>
        <Text style={CommonTextStyles.SemiBold_M}>{Titulo}</Text>
        <Text style={[CommonTextStyles.SemiBold_M, { color: Colors.Grey_07 }]}>
          {Valor}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ScrollGaleriaEvt: {
    height: 171,
    paddingEnd: 16,
    width: "100%",
  },
  DetalleEvtContainer: {
    marginTop: 20,
    gap: 25,
    //paddingHorizontal: 16,
  },
  TarjetaDetalle: {
    //marginTop: 20,
    paddingBottom: 20,
    width: "100%",
    backgroundColor: Colors.Blanco,
    borderRadius: 12,
    elevation: 5,
  },
  ContenedorColumnasTarjeta: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    marginHorizontal: 15,
    //marginVertical: 20,
  },
  ColumnaDerecha: {
    width: "50%",
    rowGap: 24,
    alignItems: "flex-end",
  },
  ColumnaIzquierda: {
    width: "50%",
    rowGap: 24,
    alignItems: "flex-start",
  },
  LineaSeparacion: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Grey_300,
    width: "100%",
    alignSelf: "center",
  },
});

export default DetalleEvento;
