import React from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import Logo from "../../assets/LogoSVG"
import Utton from "../../components/Button"

// npx expo install react-native-svg
const Gustos = ({ navigation }) => {
    return (
        <View style={style.PerfilContainer}>
            <View style={style.LogoContainer}>
                <Logo />
            </View>
            <View style={style.LoginContainer}>
                <View style={style.Input}>
                    <Text style={style.TexLogin}>Correo electrónico</Text>
                    <TextInput
                        placeholder="Ingresa tu correo electrónico"
                        style={style.TexInput}
                    />
                </View>
                <View style={[style.Input, { marginTop: 24, }]}>
                    <Text style={style.TexLogin}>Contraseña</Text>
                    <TextInput
                        placeholder="Ingresa la contraseña"
                        style={style.TexInput}
                    />
                    <View style={[style.footerContainer, { marginTop: 24, }]}>
                        <Utton label="Iniciar sesión" />
                    </View>

                    {/* <Button
                        title="Iniciar sesión"
                        onPress={() => navigation.navigate("Crea tu contraseña")}
                    /> */}
                </View>
            </View>
            <View style={[style.forget_password, { marginTop: 24, }]}>
                <Utton theme="primary" label="Olvide mi contraseña" />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    PerfilContainer: {
        backgroundColor: "#F4F5FE",
        width: '100%',         // Ancho de a imagen
        height: '100%',        // Alto de la imagen
        alignItems: 'center',
    },
    LogoContainer: {
        marginTop: 89,
    },
    LoginContainer: {
        marginTop: 40,
        //backgroundColor: "#FFFFFF",
        width: 358,         // Ancho de a imagen
        height: 303,        // Alto de la imagen
        paddingTop: 24,     // Bajar imagen
        paddingLeft: 16,
    },
    Input: {
        // borderWidth: 1,
        // borderColor: "#ffd33d",
        width: 326,         // Ancho de a imagen
        height: 86,        // Alto de la imagen
    },
    TexLogin: {
        fontSize: 16,
        color: '#0F172A',
        fontWeight: 'medium',
        //fontFamily:"'Urbanist'",
        fontStyle: "normal",
    },

    TexInput: {
        fontSize: 14,
        borderWidth: 3,
        borderBottomColor: '#A1A5A9',
        borderLeftColor: '#F4F5FE',
        borderRightColor: '#F4F5FE',
        borderTopColor: '#F4F5FE',
        color: '#72767A',
        paddingHorizontal: 8,
        paddingVertical: 16,

    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },

    forget_password: {
        marginTop: 40,
        fontSize: 16,

    }
});

export default Gustos;






