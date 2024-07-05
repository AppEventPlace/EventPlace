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
  SemiBold_M: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16.8,

    letterSpacing: 0.0044,
    color: Colors.Placeholder,
  },
  Subtitle_16: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: Colors.NightBlue_600,
  },
  Subtitle_18: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.6,
    color: Colors.TexColor,
  },
  Body_M: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.TexColor,
  },
  Body_S: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: Colors.TexColor,
  },
});

export default CommonTextStyles;
