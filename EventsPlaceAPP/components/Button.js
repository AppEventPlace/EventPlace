import { StyleSheet, View, Pressable, Text } from "react-native";
import IconSVG from "../assets/LogoSVG";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View style={styles.ForgetPassword}>
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button1.")}
        >
          <Text style={styles.buttonLabel_1}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "Registrarme") {
    return (
      <Pressable style={styles.RegisterButton} onPress={onPress}>
        <Text style={styles.RegisterText}>{label}</Text>
      </Pressable>
    );
  }

  if (theme === "BackCheckron") {
    return (
      <Pressable style={styles.BackButton} onPress={onPress}>
        <IconSVG theme="BackCheckron" />
        <Text style={styles.BackButtonTex}>{label}</Text>
      </Pressable>
    );
  }
  if (theme === "EditarPerfil") {
    return (
      <Pressable style={{ width: 22, height: 22 }} onPress={onPress}>
        <IconSVG theme="Editar" />
      </Pressable>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button2.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 326,
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#6979F8",
  },
  ForgetPassword: {
    width: 200,
    height: 43,
    backgroundColor: "#F4F5FE",
    //borderWidth: 1,
  },
  RegisterButton: {
    width: 110,
    height: "100%",
    //borderWidth: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  RegisterText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    color: "#515EC0",
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //borderWidth:1,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  buttonLabel_1: {
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
    color: "#515EC0",
  },
  BackButton: {
    width: 75,
    height: 25,
    //borderWidth: 1,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  BackButtonTex: {
    fontSize: 12,
    fontWeight: "500",
    color: "#0F172A",
    lineHeight: 15,
  },
});
