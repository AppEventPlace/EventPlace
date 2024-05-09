import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

import IconSVG from "../assets/LogoSVG";

export default ({ Title, SubTitle }) => {
  return (
    <View style={styles.DropdownContainer}>
      <View style={styles.SubContainer}>
        <Text style={styles.TexContainer}>{Title}</Text>
        <Pressable style={{ width: "100%" }}>
          <View style={styles.PressableContainer}>
            <TextInput placeholder={SubTitle} style={styles.TexInput} />
            <View style={styles.Circulo} />
            <View style={styles.IconContainer}>
              <IconSVG theme={"ExpandMore"} color={"#6979F8"} />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DropdownContainer: {
    height: "auto",
    alignSelf: "stretch",
  },
  SubContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 79,
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  TexContainer: {
    width: "100%",
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#0F172A",
  },
  PressableContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative", // Establecer un contexto de apilamiento para elementos absolutos
  },
  TexInput: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#72767A",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  Circulo: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#E9EAFE",
    zIndex: 10, // Asegura que el círculo esté debajo del icono
    position: "absolute",
    right: 0,
  },
  IconContainer: {
    position: "absolute", // Asegura que el contenedor tenga una posición definida
    right: 0,
    width: 35,
    height: 35,
    justifyContent: "center", // Centrado vertical
    alignItems: "center", // Centrado horizontal
    zIndex: 20, // Ajustado para estar encima del círculo
  },
});
