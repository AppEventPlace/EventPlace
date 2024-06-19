import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CommonStyles from "../CommonStyles/CommonStyles";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import CalificacionEst from "./CalificacionEst";

const TarjetaOrganizador = ({
  imagen,
  Calificacion,
  Nombre,
  EventosRealizados,
  experiencia,
}) => {
  const FondImage = require("../assets/PerfilGenerico.png");
  return (
    <View
      key={"Tarjeta"}
      style={[
        CommonStyles.container,
        { display: "flex", flexDirection: "row", paddingVertical: 16 },
      ]}
    >
      <View key={"ContenedorImgNbr"} style={styles.ContenedorImgNbr}>
        <View key={"ContenedorFoto"} style={styles.Imagen}>
          <Image
            source={FondImage}
            style={{ width: 68, height: 68, borderRadius: 34 }}
          />
        </View>
        <View key={"NombreOrganizador"} style={styles.ContenedorNombre}>
          <Text style={CommonTextStyles.SemiBold_L}>{Nombre}</Text>
        </View>
      </View>
      <View key={"ContenedorDetalle"} style={styles.ContenedorDetalle}>
        <View key={"TituloCalificacion"}>
          <Text style={CommonTextStyles.SemiBold_M}>Calificación</Text>
        </View>
        <View key={"Calificacion"}>
          <CalificacionEst
            key={"CalificacionOrganizador"}
            califi={Calificacion}
          />
        </View>
        <View
          key={"MetricasOrg"}
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-end",
          }}
        >
          <View key={EventosRealizados} style={styles.TarjetaFooter}>
            <Text key={"NumeroEventos"} style={CommonTextStyles.SemiBold_L}>
              {EventosRealizados}
            </Text>
            <Text key={"TextoEventos"} style={CommonTextStyles.SemiBold_M}>
              Eventos realizados
            </Text>
          </View>
          <View key={"PorcentajeExp"} style={styles.TarjetaFooter}>
            <Text key={"ValorPorcentaje"} style={CommonTextStyles.SemiBold_L}>
              &#37;{experiencia}
            </Text>
            <Text key={"TextoExperiencia"} style={CommonTextStyles.SemiBold_M}>
              Experiencia
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Imagen: {
    alignSelf: "center",
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  ContenedorImgNbr: {
    //marginVertical: -6,
    //marginLeft: 16,
    width: "25%",
    // alignSelf: "flex-start",
    gap: 8,
  },
  ContenedorNombre: { alignItems: "center" },
  ContenedorDetalle: {
    alignItems: "flex-end",
    gap: 16,
    width: "75%",
  },
  TarjetaFooter: {
    display: "flex",
    flexDirection: "column",
    //width: "45%",
    columnGapGap: 8,
    alignItems: "center",
    //justifyContent: "space-around",
    marginLeft: 10,
  },
});

export default TarjetaOrganizador;
