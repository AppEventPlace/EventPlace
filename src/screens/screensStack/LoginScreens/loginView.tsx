import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import CommonStyles, { Colors, TexColor } from "@/components/CommonStyles/CommonStyles";
import IconSvg from "@/assets/IconSvg";
import AnotherLoginMethod from "@/components/CommonComponents/AnotherLoginMethod";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "./login";
import { Ilogin } from "@/interfaces/Login-Interfaces/ILogin";
import { Text_Button } from "@/components/CommonStyles/CommonButtonStyles";

interface LoginViewProps {
    navigation: NativeStackNavigationProp<RootParamList, 'Login'>;
    LoginauthenticateUser: () => Promise<void>;
    login: Ilogin;
    setLogin: React.Dispatch<React.SetStateAction<Ilogin>>;
}

const LoginView: React.FC<LoginViewProps> = ({
    navigation,
    login,
    setLogin,
    LoginauthenticateUser,
}) => {
    const isButtonEnabled = login.email.trim() !== "" && login.password.trim() !== "";
    return (
        <SafeAreaView style={[styles.AreaView, { backgroundColor: Colors.Primary }]}>
            <View style={styles.LogoContainer}>
                <IconSvg theme="LogoSvg" progress={0} />
            </View>
            <View style={styles.Container}>
                <View style={[CommonStyles.SubContainer, { height: 79 }]}>
                    <Text style={CommonStyles.TexContainer}>Correo electrónico</Text>
                    <TextInput
                        placeholder="Ingresa tu correo electrónico"
                        style={CommonStyles.TexInput}
                        value={login.email}
                        onChangeText={(text) => setLogin({ ...login, email: text })}
                    />
                </View>
                <View style={[CommonStyles.SubContainer, { height: 79 }]}>
                    <Text style={CommonStyles.TexContainer}>Contraseña</Text>
                    <TextInput
                        placeholder="Ingresa la contraseña"
                        style={CommonStyles.TexInput}
                        secureTextEntry={true}
                        value={login.password}
                        onChangeText={(text) => setLogin({ ...login, password: text })}
                    />
                </View>
                <View style={CommonStyles.BotonContainer}>
                    <TouchableOpacity
                        style={[styles.LoginButton, { backgroundColor: isButtonEnabled ? Colors.NightBlue_600 : 'grey' }]}
                        onPress={LoginauthenticateUser}
                        disabled={!isButtonEnabled}
                    >
                        <Text style={styles.LoginButtonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={CommonStyles.BotonContainer}>
                    <TouchableOpacity
                        style={styles.CreateAccountButtonContainer}
                        onPress={() => navigation.navigate("CreateAccount")}
                    >
                        <Text style={styles.CreateAccountButtonText}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ForgotPasswordContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgPassword")}>
                        <Text style={styles.ForgotPasswordText}>Olvide mi contraseña</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.AnotherLogin}>
                <View style={CommonStyles.Underscore} />
                <Text style={styles.TexAnotherLogin}>Inicio sesión con otro medio</Text>
                <View style={CommonStyles.Underscore} />
            </View>
            <View style={styles.AnotherLoginContainer}>
                <AnotherLoginMethod />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AreaView: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    LogoContainer: {
        width: 218,
        height: 64,
        alignSelf: "center",
    },
    Container: {
        gap: 24,
        marginTop: 24,
        width: "100%",
        maxWidth: 358,
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: "white",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        borderRadius: 12,
    },
    AnotherLogin: {
        marginTop: 24,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxWidth: 358,
    },
    TexAnotherLogin: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        alignItems: "center",
        letterSpacing: 0.0044,
        color: TexColor.AnotherLogin,
        paddingHorizontal: 15,
    },
    AnotherLoginContainer: {
        justifyContent: "center",
        gap: 12,
        width: "100%",
        maxWidth: 358,
        marginTop: 24,
        flexDirection: "row",
        alignSelf: "center",
    },
    LoginButton: {
        width: '100%',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    LoginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    CreateAccountButtonContainer: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.NightBlue_600,
        backgroundColor: 'transparent',
    },
    CreateAccountButtonText: {
        fontSize: Text_Button.FontSizesButton,
        fontWeight: "700",
        lineHeight: 19,
        color: Colors.NightBlue_600,
    },
    ForgotPasswordContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    ForgotPasswordText: {
        fontSize: Text_Button.FontSizesButton,
        color: Colors.NightBlue_600,
        textDecorationLine: "underline",
    },
});

export default LoginView;
