import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import CommonStyles, { Colors, TexColor } from "@/components/CommonStyles/CommonStyles";
import IconSvg from "@/assets/IconSvg";
import Button from "@/components/CommonComponents/Button";
import { Color_Button } from "@/components/CommonStyles/CommonButtonStyles";
import AnotherLoginMethod from "@/components/CommonComponents/AnotherLoginMethod";
import Boton from "../../../components/CommonComponents/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "./login";
import { Ilogin } from "@/interfaces/Login-Interfaces/ILogin";

interface LoginViewProps {
    navigation: NativeStackNavigationProp<RootParamList, 'Login'>;
    handleLogin: () => Promise<void>;
    login: Ilogin;
    setLogin: React.Dispatch<React.SetStateAction<Ilogin>>;
}

const LoginView: React.FC<LoginViewProps> = ({
    navigation,
    login,
    setLogin,
    handleLogin
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
                        style={[styles.button, { backgroundColor: isButtonEnabled ? Color_Button.Default : 'grey' }]}
                        onPress={handleLogin}
                        disabled={!isButtonEnabled}
                    >
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={CommonStyles.BotonContainer}>
                    <Button
                        label="Iniciar sesión"
                        color={Color_Button.Default}
                        theme="StyleBoton"
                        onPress={() => navigation.navigate("Gustos")} 
                    />
                </View> */}
                <View style={CommonStyles.BotonContainer_1}>
                    <Button
                        label="Crear cuenta"
                        color={Color_Button.Secondary}
                        theme="StyleBoton_1"
                        onPress={() => navigation.navigate("CreateAccount")}
                    />
                </View>
                <View style={styles.ForgetPassword}>
                    <Boton
                        theme="botonSubRay"
                        label="Olvide mi contraseña"
                        onPress={() => navigation.navigate("ForgPassword")}
                        color={Color_Button.Secondary}
                    />
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
    ForgetPassword: {
        width: 200,
        height: 19,
        alignItems: "center",
        justifyContent: "center",
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
    button: {
        width: '100%',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default LoginView;
