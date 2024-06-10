// CommonStyles.js
import { StyleSheet } from "react-native";

// Lista de colores
export const Colors = {
  // -->
  Primary: "#F4F5FE",
  TexColor: "#0F172A",
  Placeholder: "#72767A",
  Line: "#A1A5A9",
  // -->
  NightBlue_600: "#6979F8",
  NightBlue_800: "#515EC0",
  // --> Azul
  Azul_Facebook: "#1877F2",
  // --> Gris
  Grey_04: "#BDBDBD",
  // -->
  Blanco: "#FBFBFE",
  // -->
  Negro: "#000000",
};

// Lista de tamaños de fuente
export const FontSizes = {
  small: 12,
  small_13: 13,
  small_14: 14,
  small_15: 15,
  medium: 16,
  medium_17: 17,
  medium_18: 18,
  medium_19: 19,
  large: 20,
  extraLarge: 24,
};

// Color BackCheckron
export const BackCheckron = {
  Color: Colors.NightBlue_600,
};

export const TexColor = {
  AnotherLogin: Colors.TexColor,
};

const CommonStyles = StyleSheet.create({
  // --> Estilo definido para <SafeAreaView>
  AreaView: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  AreaView_Full: {
    flex: 1,
    paddingVertical: 10,
  },

  ScrollView: {
    flex: 1,
    width: "100%",
  },

  // -->
  FullContainer: {
    backgroundColor: Colors.Primary,
    width: "100%",
    maxWidth: 800, //Esto evita que tome toda la pantalla
    alignSelf: "center",
    paddingHorizontal: 16,
  },
  // --> Contenedor Flexible de fondo blanco (Alto y ancho adaptativo)
  container: {
    rowGap: 24,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "white",
    // Android
    elevation: 5,
    // iOS
    shadowColor: "#000", // -->  Sombra
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    borderRadius: 12,
  },

  // --> Contenedor principal del diseño de Input Text
  SubContainer: {
    rowGap: 8,
    height: 82,
    width: "100%",
    alignItems: "flex-start",
  },

  // --> Stilo  de Texto - Titulo:  Usar en conjunto con SubContainer
  TexContainer: {
    height: 22,
    fontSize: FontSizes.medium,
    width: "100%",
    lineHeight: 22,
    color: Colors.TexColor,
    fontWeight: "500",
  },

  // --> Estilo de Texto – Contenido del Input Text
  TexInput: {
    flex: 1,
    minWidth: "100%",
    fontSize: FontSizes.small_14,
    lineHeight: 20,
    color: Colors.Placeholder,
    fontWeight: "500",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: Colors.Line,
    borderBottomWidth: (StyleSheet.hairlineWidth = 1),
  },

  // --> Estilo predeterminado para (Button theme="StyleBoton") botón principal .
  BotonContainer: {
    width: "100%",
    height: 43,
  },

  // --> Estilo predeterminado para (Button theme="StyleBoton_1") botón secundario.
  BotonContainer_1: {
    width: "100%",
    height: 43,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.NightBlue_600,
  },
  // -->
  Underscore: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.Grey_04,
  },

  // --> Contenedor parala  barra de progreso
  ProgressBar: {
    width: "100%",
    height: 10,
    alignItems: "center",
  },
});

export default CommonStyles;