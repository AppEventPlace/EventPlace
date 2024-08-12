// CommonStyles.js
import { StyleSheet } from "react-native";

// Lista de colores
export const Colors = {
  // -->
  Primary: "#F4F5FE",
  TexColor: "#0F172A",
  Placeholder: "#72767A",
  Line: "#A1A5A9",
  FondoPressed: "#E3E2FC",
  // --> NightBlue
  NightBlue_200: "#E9EAFE",
  NightBlue_300: "#D0D4FC",
  NightBlue_400: "#B5BBFB",
  NightBlue_500: "#949DF9",
  NightBlue_600: "#6979F8",
  NightBlue_700: "#5E6CDE",
  NightBlue_800: "#515EC0",

  // --> Azul
  Azul_Facebook: "#1877F2",
  // --> Gris
  Grey_04: "#BDBDBD",
  Grey_300: "#C6C7C8",
  Grey_07: "#333333",
  Grey_Soft: "#828282",
  MidnightDreams_200: "#E4E5E5",
  // -->
  Blanco: "#FBFBFE",
  // -->
  Negro: "#000000",
  Rojo: "red",
  Grey_Top: "#032030",
};

// Lista de tamaños de fuente
export const FontSizes = {
  extrasmall: 10,
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
  megaLarge: 34,
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
    paddingTop: 30,
  },

  // --> Estilo definido para <ScrollView>
  ScrollView: {
    flex: 1,
    width: "100%",
  },

  // --> Contenedro principal
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
    backgroundColor: Colors.Blanco,
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
    width: "100%",
    alignItems: "flex-start",
  },

  // --> Contenedor secundario par el diseño de Input Text (Usar Para agregar iconos en el Input Text)
  SubContainer_2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: Colors.Line,
    borderBottomWidth: (StyleSheet.hairlineWidth = 1),
  },

  // --> Contenedor secundario par el diseño de Input Text (Contenedor del icono )
  SubContainer_3: {
    marginHorizontal: 10,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  // --> Stilo  de Texto - Titulo:  Usar en conjunto con SubContainer
  TexContainer: {
    height: 17,
    width: "100%",
    fontWeight: "600",
    fontSize: FontSizes.small_14,
    lineHeight: 17,
    color: Colors.TexColor,
  },

  // --> Estilo de Texto – Contenido del Input Text
  TexInput: {
    flex: 1,
    width: "100%",
    fontWeight: "500",
    fontSize: FontSizes.medium,
    lineHeight: 22,
    color: Colors.Placeholder,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: Colors.Line,
    borderBottomWidth: (StyleSheet.hairlineWidth = 1),
  },

  // --> Estilo de Texto – Contenido en el SubContainer_2
  TexInput_1: {
    flex: 1,
    width: "100%",
    fontWeight: "500",
    fontSize: FontSizes.medium,
    lineHeight: 22,
    color: Colors.Placeholder,
    paddingVertical: 16,
    paddingHorizontal: 8,
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

  // --> Contenedor para la  barra de progreso ViewProgressBar y ProgressBar
  ViewProgressBar: {
    width: "100%",
    height: 16,
    alignItems: "center",
    flexDirection: "row",
    columnGap: 8,
  },
  // --> Estilo para el progreso bar
  ProgressBar: {
    marginVertical: 10,
    borderRadius: 20,
    height: 4,
    flex: 1,
  },

  // -->
  AmpliarInfo: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    columnGap: 18,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default CommonStyles;