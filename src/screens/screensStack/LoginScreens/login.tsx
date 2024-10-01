// Login.tsx
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginView from "./loginView";

export type RootParamList = {
    Login: undefined;
    CreateAccount: undefined;
    Gustos: undefined;
    ForgPassword: undefined;
};

const Login: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Login'>>(); 

    return (
        <LoginView navigation={navigation} /> 
    );
};

export default Login;
