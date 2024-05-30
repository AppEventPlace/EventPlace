import React, { memo } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Alert,
  Pressable,
} from "react-native";
import DatosClientePrueba from "../../constants/DatosClientePrueba";
import Categorias from "../../constants/Categorias";
import Boton from "../../components/Button";
import EventosCercanos from "../../constants/EventosCercanos";
import TarjetaWall from "../../components/TarjetaWall";
import TusEventos from "../../constants/TusEventos";
import SvgLogo from "../../assets/LogoSVG";

const BoletasScreen = ({ navigation }) => {
  return (
    <View style={style.PerfilContainer}>
      <Text> Chat </Text>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});

export default BoletasScreen;
