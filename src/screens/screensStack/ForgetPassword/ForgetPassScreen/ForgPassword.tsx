import BackCheckron from "@/components/CommonComponents/BackCheckron";
import Button from "@/components/CommonComponents/Button";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";
import useValidation from "../../ValidationCreateAccount";
import { err } from "react-native-svg";
import Toast, { BaseToast } from "react-native-toast-message";
import ForgPasswordView from "./ForgPasswordView";
import { IResponse } from "@/interfaces/IResponse";
import GetUserByEmail from "@/Services/UsersServices/getUserByEmail";
import { setSecureData } from "@/Redux/slices/secureDataSlice";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/Redux/slices/authSlice";
import { IUserDataInterface } from "@/interfaces/UserDataInterfaces/IUserDataInterface";

interface ForgPassProps {
  navigation: any;
}

const ForgPassword: React.FC<ForgPassProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<IUserDataInterface[]>([]);
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: () => (
      <BaseToast
        //{...props}
        style={{ borderLeftColor: "pink" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: "400",
        }}
      />
    ),
  };

  /*const ValidateEmail = {
    email: "",
  };
  const [activo, setActivo] = useState(false);

  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
    useValidation(ValidateEmail);

  const handleChange = (name: string, value: any) => {
    setState((prevState: JSON) => ({ ...prevState, [name]: value }));
  };*/

  const Validacion = (estado: boolean, message?: string) => {
    //setValidado(estado);
    //console.log(estado);
    if (estado === true) {
      Toast.show({
        type: "success",
        swipeable: true,
        text1: message,

        visibilityTime: 4000, // Duración en milisegundos
      });
      navigation.navigate("OtpAdviceRecOtp");
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };
  const getUserId = async (email: string) => {
    console.log(email);
    try {
      const response = await GetUserByEmail.ObtainUserDataByEmail(email);
      const idUser = response.map((obj: any) => obj.id);
      //setUserData(response);
      console.log(idUser.toString());
      dispatch(setSecureData({ email: email, phone: "" }));
      dispatch(setAuthData({ token: "", idUser: idUser.toString() }));
      console.log(idUser);
      OtpConsumer(Validacion);
      //setId();
      //dispatch(setAuthData({token:"", idUser:}))
    } catch (error) {
      console.error("Error fetching userID:", error);
    }
  };
  const setId = () => {
    const idUser = userData.map((obj) => obj.id);

    console.log(idUser);
    OtpConsumer(Validacion);
  };
  return (
    <ForgPasswordView
      navigation={navigation}
      Validacion={Validacion}
      getUserId={getUserId}
    />
  );
};

const styles = StyleSheet.create({
  inputError: {
    borderColor: "red",
  },
});
export default ForgPassword;
