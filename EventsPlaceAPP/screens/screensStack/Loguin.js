import React from "react";
import { Text, View, StyleSheet, Pressable, TextInput, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import IconSVG from "../../assets/LogoSVG"
import Boton from "../../components/Button"

// npx expo install react-native-svg

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={style.PerfilContainer}>
            {/* <View style={style.RegisterContainer}>
                <Boton theme="Registrarme" label="Registrarme" onPress={() => navigation.navigate("Crea tu cuenta")} />
            </View> */}
            <View style={style.LogoContainer} >
                <IconSVG theme='LogoSvg' />
            </View>
            <View style={style.LogionContainer}>
                <View style={style.SubContainer}>
                    <Text style={style.TexContainer}>Ingresa tu correo electrónico</Text>
                    <TextInput
                        placeholder="Ingresa tu correo electrónico"
                        style={style.TexInput}
                    />
                </View>
                <View style={style.SubContainer}>
                    <Text style={style.TexContainer}>Contraseña</Text>
                    <TextInput
                        placeholder="Ingresa la contraseña"
                        secureTextEntry={true}
                        style={style.TexInput}
                    />
                </View>
                <View style={style.ButonMarginTop} >
                    <Boton label="Iniciar sesión" theme='StyleBoton1' />
                    <Boton label="Crear cuenta" theme='StyleBoton2' onPress={() => navigation.navigate("Crea tu cuenta")} />
                    <View style={style.ForgetPassword}>
                        <Boton theme="primary" label="Olvide mi contraseña" />
                    </View>
                </View>
            </View>
            <View style={style.AnotherLogin}>
                <View style={style.Underscore} />
                <View>
                    <Text style={style.TexAnotherLogin}>Inicio sesion con otro medio</Text>
                </View>
                <View style={style.Underscore} />
            </View>
            <View style={style.AnotherLoginContainer}>
                <View style={style.AnotherLoginSubContainer}>
                    <Boton theme='Google' />
                </View>
                <View style={style.AnotherLoginSubContainer}>
                <Boton theme='Facebook' />
                </View>
                <View style={style.AnotherLoginSubContainer}>
                <Boton theme='IOS' />
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    PerfilContainer: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: "#F4F5FE",
        justifyContent: 'center'
    },
    LogoContainer: {
        width: 218,
        height: 64,
        //borderWidth: 1,
        //marginTop: 66
    },
    LogionContainer: {
        display: 'flex',
        width: 358,
        height: 413,
        elevation: 1,
        marginTop: 40,
        //borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#FBFBFE',
    },
    SubContainer: {
        height: 82,
        width: "100%",
        marginTop: 24,
        //borderWidth: 1,
        display: "flex",
        alignItems: "center",
    },
    TexContainer: {
        height: 22,
        fontSize: 16,
        width: '100%',
        lineHeight: 22,
        //borderWidth: 1,
        color: '#0F172A',
        fontWeight: '500',
    },
    TexInput: {
        flex: 1,
        width: 326,
        marginTop: 8,
        fontSize: 14,
        //borderWidth: 1,
        lineHeight: 20,
        color: '#72767A',
        fontWeight: '500',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomColor: '#A1A5A9',
        borderBottomWidth: StyleSheet.hairlineWidth = 3,
    },
    ButonMarginTop: {
        rowGap: 24,
        marginTop: 24,
    },
    ForgetPassword: {
        //borderWidth: 1,
        height: 19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AnotherLogin: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        width: 358,  //326
        //borderWidth: 1,
    },
    Underscore: {
        flex: 1,
        height: 2,
        backgroundColor: '#BDBDBD'
    },
    TexAnotherLogin: {
        display: 'flex',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        alignItems: 'center',
        letterSpacing: 0.0044,
        color: '#0F172A',
        paddingHorizontal: 10,
    },
    AnotherLoginContainer: {
        columnGap: 12,
        width: 326,
        marginTop: 20,
        //borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    AnotherLoginSubContainer: {
        height: 44,
        width: 101,
        //borderWidth:1
    }
});

export default Login;