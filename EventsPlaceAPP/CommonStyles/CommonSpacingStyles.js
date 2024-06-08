import { StyleSheet } from "react-native";

// Espaciado vertical sin bordes
const CommonSpacingStyles = StyleSheet.create({
  // Espaciado vertical y borde horizontal del 16
  VerticalSpacing_10_16: {
    width: "100%",
    rowGap: 10,
    paddingHorizontal: 16,
  },
  VerticalSpacing_32: {
    width: "100%",
    rowGap: 32,
  },
});

export default CommonSpacingStyles;
