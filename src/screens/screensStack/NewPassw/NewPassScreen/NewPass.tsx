import IconSvg from "@/assets/IconSvg";
import BackCheckron from "@/components/CommonComponents/BackCheckron";
import Button from "@/components/CommonComponents/Button";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import Toast from "react-native-toast-message";
import Loguin from "../../Loguin";
import PasswUpdate from "@/Services/UsersServices/PasswUpdate";
import { useNavigation } from "@react-navigation/native";
import useValidation from "../../ValidationCreateAccount";
import SvgLogo from "@/assets/LogoSVG";

interface ForgPassProps {
  navigation: any;
  //route: any;
}

const NewPass = ({ route }) => {
  const navigation = useNavigation();
  const { email } = route.params;
  const [passwword, setPassword] = useState("");

  const Password = (password: string) => {
    setPassword(password);
  };
  const initialState = {
    password: "",
    confirmPassword: "",

    //  Agregar aquí los campos restantes...
  };

  //console.log(email);
  const Validacion = (estado: boolean, message: string) => {
    //setValidado(estado);
    //console.log(estado);
    if (estado === true) {
      Toast.show({
        type: "success",
        text1: message,
        visibilityTime: 4000, // Duración en milisegundos
      });
      navigation.navigate("Loguin");
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message,
        //text2: error.message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };
  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
    useValidation(initialState);

  const handleChange = (name: string, value: any) => {
    setState((prevState: JSON) => ({ ...prevState, [name]: value }));
  };
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View
        style={[
          CommonSpacingStyles.VerticalSpacing_10_16,
          { display: "flex", flexDirection: "row", height: 30, width: "100%" },
        ]}
      >
        <View style={{ flex: 2 }}>
          <BackCheckron navigation={navigation} />
        </View>
      </View>
      <View
        style={[CommonStyles.FullContainer, { paddingVertical: 10, gap: 28 }]}
      >
        <View
          style={{
            gap: 28,
            width: "100%",
            height: 96,
            alignItems: "center",
          }}
        >
          <SvgLogo
            theme="Key"
            progress={0}
            color={Colors.WellDoneGreen}
            ancho="96"
            alto="96"
          />
        </View>
        <View style={[CommonStyles.container, { gap: 32 }]}>
          <InputForm
            Title="Nueva Contraseña"
            label="Utilizar una combinación de letras, numero y caracter especial mayor a 8 caracteres"
            placeholder="Ingresa la nueva contraseña"
            password={Password}
            value={state.password}
            errors={errors.password}
            handleChange={handleChange}
            name={"password"}
          />
          <InputForm
            Title="Confirma la nueva Contraseña"
            label="Utilizar una combinación de letras, numero y caracter especial mayor a 8 caracteres"
            placeholder="Confirma la nueva contraseña"
            password={Password}
            value={state.confirmPassword}
            errors={errors.confirmPassword}
            handleChange={handleChange}
            name={"confirmPassword"}
          />
          <View style={{ height: 43, width: "90%" }}>
            <Button
              theme="Checked"
              label="Generar contraseña"
              disabled={
                state.password !== "" &&
                state.confirmPassword !== "" &&
                !errors.password &&
                !errors.confirmPassword
              }
              onPress={() => [
                console.log(email, state.password),
                PasswUpdate(email, state.password, Validacion),
                // navigation.navigate("Loguin"),
                //navigation.navigate("OtpAdviceRecOtp"),
                //OtpConsumer(correo), servicio de actualizar contraseña
              ]}
              color={Colors.NightBlue_600}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
interface InputFormProp {
  Title?: string;
  label?: string;
  placeholder?: string;
  value?: any;
  errors?: any;
  name: string;
  password: (value: string) => void;
  handleChange: (name: string, value: any) => void;
}
const InputForm: React.FC<InputFormProp> = ({
  Title,
  label,
  placeholder,
  password,
  value,
  errors,
  handleChange,
  name,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={[CommonTextStyles.SemiBold_M, { alignSelf: "flex-start" }]}>
        {Title}
      </Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => [handleChange(name, value)]}
        secureTextEntry={true}
      />
      <Text
        style={[
          CommonTextStyles.Body_S,
          { color: errors ? Colors.Rojo : Colors.TexColor },
        ]}
      >
        {errors ? errors : label}
      </Text>
    </View>
  );
};
export default NewPass;
