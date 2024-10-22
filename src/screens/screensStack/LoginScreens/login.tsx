import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginView from "./loginView";
import LoginService from "@/Services/LoginServices/loginService";
import { Ilogin, initialLoginState } from "@/interfaces/Login-Interfaces/ILogin";
import Toast from "react-native-toast-message";
import { setAuthData } from "@/Redux/slices/authSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/atoms/Loader";



export type RootParamList = {
    Login: undefined;
    CreateAccount: undefined;
    Gustos: undefined;
    ForgPassword: undefined;
    WallPrincipal: undefined;
};

const Login: React.FC = () => {
    const dispatch = useDispatch(); 
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Login'>>();
    const [login, setLogin] = React.useState<Ilogin>(initialLoginState);
    const [loading, setLoading] = React.useState<boolean>(false);

    const LoginauthenticateUser = async () => {
        setLoading(true);
        try {
            const response: any = await LoginService.LoginauthenticateUser(login);

            const toastConfig = {
                type: response.success ? 'success' : 'error',
                text1: response.message,
            };
            if (response.success) {
                const token = response.data.token;
                const userId = response.data.user.userId;
                dispatch(setAuthData({ token: token, idUser: userId }));
                navigation.navigate('WallPrincipal');
            }
            Toast.show(toastConfig);
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Error al iniciar sesión',
                text2: error.response?.data?.message,
            });
        } finally {
            setLoading(false); 
        }
    };

    if (loading) {
        return <Loader />; 
    }

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

