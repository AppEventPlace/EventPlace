import React, { ReactNode } from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

// --> Importar estilos comunes
import { Colors } from "../CommonStyles/CommonStyles";
import { BackCheckron } from "../CommonStyles/CommonStyles";

import { Text_Button } from "../CommonStyles/CommonButtonStyles";
import IconSvg from "../assets/IconSvg";

/*---------------------------------------------------------------------------
Componente  Diseñado renderizar botones de forma predeterminada.
-	theme: 	  Dtermina el estilo de botón que se desea usar 
-	label: 		Usar para definir el Texto del botón 
-	color: 		Define el color de fondo 
-	onPress:	Acción  al oprimir el botón 
- Icon:     Nombre del Icono a mostrar dentro del botón (Usar IconSvg)
- disabled: Estado del botón tru = activo o false = inactivo
---------------------------------------------------------------------------*/
interface ButtonProps {
  theme?: string;
  label: string;
  color: string;
  onPress: () => void;
  Icon?: string;
  IconColor?: string;
  disabled?: string;
}
interface getStyleProp {
  color: string;
}
const Button: React.FC<ButtonProps> = ({
  theme,
  label,
  color,
  onPress,
  Icon,
  IconColor,
  disabled,
}) => {
  const styler = getStyles(color);
  switch (theme) {
    // --> Botón principal
    case "StyleBoton":
      return (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? Colors.NightBlue_800 : color },
          ]}
          onPress={onPress}
        >
          <Text style={styles.StyleButtonLabel_1}>{label}</Text>
        </Pressable>
      );

    // --> Botón secundario + borde
    case "StyleBoton_1":
      return (
        <Pressable
          style={[styles.button, { backgroundColor: color }]}
          onPress={onPress}
        >
          <Text style={styles.StyleButtonLabel_2}>{label}</Text>
          {/* <IconSVG theme={Icon} color={IconColor} /> */}
        </Pressable>
      );

    // -->
    case "IconPressable":
      return (
        <Pressable
          style={[styles.AnotherLoginButton, { backgroundColor: color }]}
          onPress={() => alert("You pressed a button1.")}
        >
          <IconSvg theme={Icon} progress={0} />
        </Pressable>
      );

    // --> ImagePicker
    case "ImagePicker":
      return (
        <Pressable
          style={[styles.button, { position: "absolute" }]}
          onPress={onPress}
        ></Pressable>
      );

    // --> Genérico: Se adapta al contenedor principal, usar este estilo de botón , en caracteres  que realicen  alguna acción.
    case "Generico":
      return (
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button1.")}
        >
          <Text style={styles.StyleButtonLabel_3}>{label}</Text>
        </Pressable>
      );

    // --> Botón: Regresar a la pantalla anterior
    case "BackCheckron":
      return (
        <Pressable style={styles.BackButton} onPress={onPress}>
          <IconSvg
            theme="BackCheckron"
            IconColor={BackCheckron.Color}
            progress={0}
          />
          <Text style={styles.BackButtonTex}>{label}</Text>
        </Pressable>
      );

    case "TexTerms":
      return (
        <Pressable style={{ width: "100%" }} onPress={onPress}>
          <Text style={styler.StyleButtonLabel_3}>{label}</Text>
        </Pressable>
      );

    case "Checked":
      return (
        <View
          style={[
            styles.StyleBoton,
            {
              backgroundColor: disabled
                ? Colors.NightBlue_600
                : Colors.NightBlue_300,
            },
          ]}
        >
          <Pressable
            style={styles.button}
            onPress={onPress}
            disabled={!disabled}
          >
            <Text style={styles.StyleButtonLabel_1}>{label}</Text>
          </Pressable>
        </View>
      );

    // --> Por defecto
    default:
      return (
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button2.")}
        >
          <Text style={styles.StyleButtonLabel_1}>{label}</Text>
        </Pressable>
      );
  }
};
const getStyles = (color: string) => {
  return StyleSheet.create({
    StyleButtonLabel_3: {
      color: color || Text_Button.StyleButtonLabel_3,
      fontSize: Text_Button.FontSizesButton,
      fontWeight: "500",
      lineHeight: 19,
      textDecorationLine: "underline",
    },
  });
};

const styles = StyleSheet.create({
  StyleBoton: {
    width: "100%",
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 50,
    columnGap: 5,
  },
  StyleButtonLabel_1: {
    color: Text_Button.StyleButtonLabel_1,
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "700",
    lineHeight: 19,
  },
  StyleButtonLabel_2: {
    color: Text_Button.StyleButtonLabel_2,
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "700",
    lineHeight: 19,
  },
  StyleButtonLabel_3: {
    color: Text_Button.StyleButtonLabel_3,
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "500",
    lineHeight: 19,
    textDecorationLine: "underline",
  },
  AnotherLoginButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  BackButton: {
    width: 75,
    height: 25,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  BackButtonTex: {
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "500",
    color: Text_Button.BackButtonTex,
    lineHeight: 22,
    letterSpacing: 0.0044,
  },
});
export default Button;