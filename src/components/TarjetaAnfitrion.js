import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CommonStyles from "../components/CommonStyles/CommonStyles";
import CommonTextStyles from "../components/CommonStyles/CommonTextStyles";

const TarjetaAnfitrion = ({ imagen, Nombre, Correo, Celular }) => {
  const FondImage = require("../assets/PerfilGenerico.png");
  return (
    <View
      key={"TarjetaAnfitrion"}
      style={[CommonStyles.container, { rowGap: 16 }]}
    >
      <View
        key={"AnfitrionImgNbr"}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignSelf: "flex-start",
        }}
      >
        <View key={"ContenedorFoto"} style={styles.Imagen}>
          <Image
            source={FondImage}
            style={{ width: 68, height: 68, borderRadius: 34 }}
          />
        </View>
        <View key={"Nombre"} style={{ gap: 8, alignSelf: "center" }}>
          <Text style={CommonTextStyles.SemiBold_M}> Nombre</Text>
          <Text style={CommonTextStyles.SemiBold_L}>{Nombre}</Text>
        </View>
      </View>
      <View
        key={"InformacionAnfitrion"}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignSelf: "flex-start",
        }}
      >
        <View key={"CorreoAnfitrion"} style={styles.ContenedorTextos}>
          <Text style={CommonTextStyles.SemiBold_M}> Correo electrónico</Text>

          <Text style={CommonTextStyles.SemiBold_L}>{Correo}</Text>
        </View>
        <View key={"NumeroAnfitrion"} style={styles.ContenedorTextos}>
          <Text style={CommonTextStyles.SemiBold_M}> Número de teléfono</Text>
          <Text style={CommonTextStyles.SemiBold_L}>{Celular}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Imagen: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  ContenedorTextos: {
    gap: 8,
    alignSelf: "center",
    alignItems: "flex-start",
    width: "50%",
  },
});
export default TarjetaAnfitrion;
