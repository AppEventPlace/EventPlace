import { StyleSheet, View, Pressable, Text } from "react-native";
import IconSVG from "../assets/LogoSVG";
const FondImage = require("../assets/adaptive-icon.png"); // Espesificar ruta de la imagen

export default function Button({ label, theme, onPress }) {
  if (theme === "StyleBoton1") {
    return (
      <View style={styles.StyleBoton1}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.StyleButtonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "StyleBoton2") {
    return (
      <View style={styles.StyleBoton2}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.StyleButtonLabel2}>{label}</Text>
        </Pressable>
      </View>
    );
  }
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
  if (theme === "Google") {
    return (
      <Pressable
        style={[styles.AnotherLoginButton, { backgroundColor: "#FFFFFF" }]}
        onPress={() => alert("You pressed a button1.")}
      >
        <IconSVG theme="Google" />
      </Pressable>
    );
  }
  if (theme === "Facebook") {
    return (
      <Pressable
        style={[styles.AnotherLoginButton, { backgroundColor: "#1877F2" }]}
        onPress={() => alert("You pressed a button1.")}
      >
        <IconSVG theme="Facebook" />
      </Pressable>
    );
  }
  if (theme === "IOS") {
    return (
      <Pressable
        style={[styles.AnotherLoginButton, { backgroundColor: "#000000" }]}
        onPress={() => alert("You pressed a button1.")}
      >
        <IconSVG theme="IOS" />
      </Pressable>
    );
  }
  // if (theme === "Registrarme") {
  //   return (
  //     <Pressable style={styles.RegisterButton} onPress={onPress}>
  //       <Text style={styles.RegisterText}>{label}</Text>
  //     </Pressable>
  //   );
  // }

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
  if (theme === "Imagen") {
    return (
      <Pressable
        style={[{ width: 96, height: 96, position: "absolute" }]}
        onPress={onPress}
      ></Pressable>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button2.")}
      >
        <Text style={styles.StyleButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  StyleBoton1: {
    width: 326,
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#6979F8",
  },
  StyleBoton2: {
    width: 326,
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#F4F5FE",
    borderWidth: 2,
    borderColor: "#6979F8",
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //borderWidth:1,
  },
  StyleButtonLabel: {
    color: "#FBFBFE",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
  },
  StyleButtonLabel2: {
    color: "#6979F8",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
  },
  AnotherLoginButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  ForgetPassword: {
    width: 200,
    height: 19,
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
  buttonLabel_1: {
    display: "flex",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
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
    fontSize: 16,
    fontWeight: "500",
    color: "#0F172A",
    lineHeight: 22,
    letterSpacing: 0.0044,
  },
});
