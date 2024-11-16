import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginView from "./loginView";
import LoginService from "@/Services/LoginServices/loginService";
import {
  Ilogin,
  initialLoginState,
} from "@/interfaces/Login-Interfaces/ILogin";
import Toast from "react-native-toast-message";
import { setAuthData } from "@/Redux/slices/authSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/atoms/Loader";
import { setSecureData } from "@/Redux/slices/secureDataSlice";
import OtpConsumer from "@/Services/UsersServices/OtpConsumer";

export type RootParamList = {
  Login: undefined;
  CreateAccount: undefined;
  Gustos: undefined;
  ForgPassword: undefined;
  WallPrincipal: undefined;
  VerifyIdentity: undefined;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootParamList, "Login">>();
  const [login, setLogin] = React.useState<Ilogin>(initialLoginState);
  const [loading, setLoading] = React.useState<boolean>(false);

  const LoginauthenticateUser = async () => {
    setLoading(true);
    try {
      const response: any = await LoginService.LoginauthenticateUser(login);

      const toastConfig = {
        type: response.success ? "success" : "error",
        text1: response.message,
      };
      if (response.success) {
        const token = response.data.token;
        const userId = response.data.user.userId;
        dispatch(setAuthData({ token: token, idUser: userId }));
        navigation.navigate("WallPrincipal");
      }
      Toast.show(toastConfig);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error al iniciar sesión",
        text2: error.response?.data?.message,
      });
      const codigoRespuesta = error.response.data.data.codigoRespuesta;
      if (codigoRespuesta == 2) {
        const userId = error.response.data.data.userId;
        const phone = error.response.data.data.phone;
        const email = error.response.data.data.email;
        console.log(userId);
        dispatch(setAuthData({ token: "", idUser: userId }));
        dispatch(setSecureData({ phone: phone, email: email }));
        OtpConsumer(ValidacionEnvioOtp);
      }
      if (codigoRespuesta == 3) {
        navigation.navigate("Gustos");
        const userId = error.response.data.data.userId;

        dispatch(setAuthData({ token: "", idUser: userId }));
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  const ValidacionEnvioOtp = (estado: boolean, message: string) => {
    //setValidado(estado);

    if (estado === true) {
      Toast.show({
        type: "success",
        text1: message,
        visibilityTime: 4000, // Duración en milisegundos
      });
      navigation.navigate("VerifyIdentity");
    } else if (estado === false) {
      Toast.show({
        type: "error",
        text1: message,
        //text2: error.message, // Detalles del error
        visibilityTime: 4000, // Duración en milisegundos
      });
    }
  };
  return (
    <LoginView
      navigation={navigation}
      LoginauthenticateUser={LoginauthenticateUser}
      login={login}
      setLogin={setLogin}
    />
  );
};

export default Login;
