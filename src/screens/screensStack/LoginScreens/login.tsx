import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginView from "./loginView";
import LoginService from "@/Services/LoginServices/loginService";
import { Ilogin, initialLoginState } from "@/interfaces/Login-Interfaces/ILogin";


export type RootParamList = {
    Login: undefined;
    CreateAccount: undefined;
    Gustos: undefined;
    ForgPassword: undefined;
};

const Login: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Login'>>();
    const [login, setLogin] = React.useState<Ilogin>(initialLoginState);

    // Función constante para manejar el login
    const handleLogin = async () => {
        try {
            const response = await LoginService.LoginauthenticateUser(login);  
            console.log('Token recibido:', response.token);  
        } catch (error: any) {
            console.error('Error al iniciar sesión:', error.message);
        }
    };

    return (
        <LoginView
            navigation={navigation}
            handleLogin={handleLogin}
            login={login}
            setLogin={setLogin}
        />
    );
};

export default Login;
