import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import Toast from "react-native-toast-message";
import PasswordUpdateService from "@/Services/UsersServices/PasswUpdate";
import SvgLogo from "@/assets/LogoSVG";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import BackButton from "@/components/CommonComponents/BackCheckron";
import CustomButton from "@/components/CommonComponents/Button";
import useFormValidation from "../../ValidationCreateAccount";

interface ForgotPasswordProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{ params: { email: string } }, 'params'>;
}

const initialFormState = {
  password: "",
  confirmPassword: "",
};

const NewPasswordScreen: React.FC<ForgotPasswordProps> = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { email } = route.params;
  const { state, setState, errors } = useFormValidation(initialFormState);

  const handleInputChange = (fieldName: string, value: any) => {
    setState((prevState: any) => ({ ...prevState, [fieldName]: value }));
  };

  const handleValidationResponse = (isSuccess: boolean, message: string) => {
    Toast.show({
      type: isSuccess ? "success" : "error",
      text1: message,
      visibilityTime: 4000,
    });

    if (isSuccess) {
      navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}>
      <View style={[CommonSpacingStyles.VerticalSpacing_10_16, { display: "flex", flexDirection: "row", height: 30, width: "100%" }]}>
        <View style={{ flex: 2 }}>
          <BackButton navigation={navigation} />
        </View>
      </View>
      <View style={[CommonStyles.FullContainer, { paddingVertical: 10, gap: 28 }]}>
        <View style={{ gap: 28, width: "100%", height: 96, alignItems: "center" }}>
          <SvgLogo theme="Key" progress={0} color={Colors.WellDoneGreen} ancho="96" alto="96" />
        </View>
        <View style={[CommonStyles.container, { gap: 32 }]}>
          <InputField
            title="Nueva Contraseña"
            label="Utilizar una combinación de letras, números y caracteres especiales mayor a 8 caracteres"
            placeholder="Ingresa la nueva contraseña"
            value={state.password}
            errors={errors.password}
            handleChange={handleInputChange}
            name="password"
          />
          <InputField
            title="Confirma la nueva Contraseña"
            label="Utilizar una combinación de letras, números y caracteres especiales mayor a 8 caracteres"
            placeholder="Confirma la nueva contraseña"
            value={state.confirmPassword}
            errors={errors.confirmPassword}
            handleChange={handleInputChange}
            name="confirmPassword"
          />
          <View style={{ height: 43, width: "90%" }}>
            <CustomButton
              theme="Checked"
              label="Generar contraseña"
              disabled={
                state.password === "" ||
                state.confirmPassword === "" ||
                errors.password ||
                errors.confirmPassword
              }
              onPress={() => {
                console.log(email, state.password);
                PasswordUpdateService(email, state.password, handleValidationResponse);
              }}
              color={Colors.NightBlue_600}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

interface InputFieldProps {
  title?: string;
  label?: string;
  placeholder?: string;
  value?: any;
  errors?: any;
  name: string;
  handleChange: (name: string, value: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  title,
  label,
  placeholder,
  value,
  errors,
  handleChange,
  name,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={[CommonTextStyles.SemiBold_M, { alignSelf: "flex-start" }]}>
        {title}
      </Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => handleChange(name, value)}
        secureTextEntry={true}
      />
      <Text
        style={[CommonTextStyles.Body_S, { color: errors ? Colors.Rojo : Colors.TexColor }]}
      >
        {errors ? errors : label}
      </Text>
    </View>
  );
};

export default NewPasswordScreen;
