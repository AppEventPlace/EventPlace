import { StyleSheet } from "react-native";
import { Colors } from "./CommonStyles";

const CommonTextStyles = StyleSheet.create({
  // -->
  Heding_H5: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    color: Colors.NightBlue_800,
    letterSpacing: 0.01,
  },
  // --> SemiBold-L
  SemiBold_L: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.TexColor,
    letterSpacing: 0.0044,
  },
});

export default CommonTextStyles;
