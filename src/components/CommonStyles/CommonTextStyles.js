import { StyleSheet } from "react-native";
import { Colors, FontSizes } from "./CommonStyles";

const CommonTextStyles = StyleSheet.create({
  // --> Heding_H5
  Heding_H5: {
    fontWeight: "700",
    fontSize: FontSizes.extraLarge,
    lineHeight: 29,
    color: Colors.NightBlue_800,
    letterSpacing: 0.01,
  },

  // --> Heding_H6
  Heding_H6: {
    fontWeight: "700",
    fontSize: FontSizes.large,
    lineHeight: 24,
    color: Colors.NightBlue_800,
    letterSpacing: 0.005,
  },

  // --> Heding_14
  Heding_H14: {
    fontWeight: "700",
    fontSize: FontSizes.megaLarge,
    lineHeight: 41,
    color: Colors.Negro,
    letterSpacing: 0.01,
  },

  // --> Body-S;
  Body_S: {
    fontWeight: "500",
    fontSize: FontSizes.small,
    lineHeight: 15,
    color: "red",
    letterSpacing: 0.01,
  },

  // --> Body-M;
  Body_M: {
    fontWeight: "500",
    fontSize: FontSizes.small_14,
    lineHeight: 20,
    color: Colors.TexColor,
  },

  // --> Body-L;
  Body_L: {
    fontWeight: "500",
    fontSize: FontSizes.medium,
    lineHeight: 22,
    color: Colors.Placeholder,
    letterSpacing: 0.0044,
  },
  Body_XL: {
    fontWeight: "500",
    fontSize: FontSizes.medium_18,
    lineHeight: 24,
    color: Colors.Placeholder,
    letterSpacing: 0.0044,
  },
  Body_XS: {
    fontWeight: "500",
    fontSize: FontSizes.extrasmall,
    lineHeight: 14,
    color: Colors.Placeholder,
    letterSpacing: 0.0044,
  },

  // --> SemiBold-M
  SemiBold_M: {
    fontWeight: "600",
    fontSize: FontSizes.small_14,
    lineHeight: 17,
    color: Colors.TexColor,
  },

  // --> SemiBold-L
  SemiBold_L: {
    fontWeight: "600",
    fontSize: FontSizes.medium,
    lineHeight: 24,
    color: Colors.TexColor,
    letterSpacing: 0.0044,
  },

  // --> Subtitle_16
  Subtitle_16: {
    fontWeight: "700",
    fontSize: FontSizes.medium,
    lineHeight: 19,
    color: Colors.NightBlue_600,
  },

  // --> Subtitle_18
  Subtitle_18: {
    fontSize: FontSizes.medium_18,
    fontWeight: "700",
    lineHeight: 21.6,
    color: Colors.TexColor,
  },
});

export default CommonTextStyles;
