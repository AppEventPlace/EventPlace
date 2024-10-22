import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginView from "./loginView";
import LoginService from "@/Services/LoginServices/loginService";
import { Ilogin, initialLoginState } from "@/interfaces/Login-Interfaces/ILogin";
import Toast from "react-native-toast-message";
import { setAuthData } from "@/Redux/slices/authSlice";
import { useDispatch } from "react-redux";


export type RootParamList = {
    Login: undefined;
    CreateAccount: undefined;
    Gustos: undefined;
    ForgPassword: undefined;
};

const Login: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Login'>>();
    const [login, setLogin] = React.useState<Ilogin>(initialLoginState);
    
    const dispatch = useDispatch(); // Utilizamos dispatch para disparar la acción de Redux

    // Función constante para manejar el login
    const LoginauthenticateUser = async () => {

        try {
            const response: any = await LoginService.LoginauthenticateUser(login);

            // Si el login es exitoso
            if (response.success) {
                const token = response.data.token;
                const userId = response.data.user.userId;
                // Despachamos la acción para almacenar los datos de autenticación en el estado global
                dispatch(setAuthData({
                    token: token,
                    idUser: userId,
                }));

                console.log('Token guardado:', token);
                console.log('ID de usuario guardado:', userId);

                // Mostramos el Toast de éxito
                Toast.show({
                    type: 'success',
                    text1: response.message,  // Mensaje de éxito
                });
            } else {
                // Mostrar un Toast de error en caso de que el login no sea exitoso
                Toast.show({
                    type: 'error',
                    text1: response.message,
                });
            }
        } catch (error: any) {
            // Manejo de errores con mensaje personalizado
            Toast.show({
                type: 'error',
                text1: 'Error al iniciar sesión',
                text2: error.response?.data?.message || 'Credenciales incorrectas. Por favor, inténtelo de nuevo.',
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

