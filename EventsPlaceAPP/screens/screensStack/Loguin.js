import React from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import IconSVG from "../../assets/LogoSVG"
import Boton from "../../components/Button"
import Button from "../../components/Button";

// npx expo install react-native-svg

const Login = ({ navigation }) => {
    return (
        <View style={style.PerfilContainer}>
            <View style={style.RegisterContainer}>
                <Boton theme="Registrarme" label="Registrarme" onPress={() => navigation.navigate("Crea tu cuenta")} />
            </View>
            <View style={style.LogoMarginTop} >
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
                    <Boton label="Iniciar sesión" />
                </View>
            </View>
            <View style={style.ForgetPassword}>
                <Boton theme="primary" label="Olvide mi contraseña" />
            </View>
            <View style={style.AnotherLogin}>
                <View style={style.Underscore} />
                <View>
                    <Text style={style.TexAnotherLogin}>Inicio sesion con otro medio</Text>
                </View>
                <View style={style.Underscore} />
            </View>
        </View>
    );
};

// const Login = ({navigation}) => {
//     return (
//         <View style={style.PerfilContainer}>
//             <View style={style.Registrarme}>
//                 <Boton theme="Registrarme" label="Registrarme" onPress={() => navigation.navigate("Crea tu cuenta")} />
//             </View>
//             <View style={style.LogoContainer}>
//                 <IconSVG theme='LogoSvg' />
//             </View>
//             <View style={style.LoginContainer}>
//                 <View style={style.Input}>
//                     <Text style={style.TexLogin}>Correo electrónico</Text>
//                     <TextInput
//                         placeholder="Ingresa tu correo electrónico"
//                         style={style.TexInput}
//                     />
//                 </View>
//                 <View style={[style.Input, { marginTop: 24, }]}>
//                     <Text style={style.TexLogin}>Contraseña</Text>
//                     <TextInput
//                         placeholder="Ingresa la contraseña"
//                         style={style.TexInput}
//                     />
//                     <View style={[style.footerContainer, { marginTop: 24, }]}>
//                         <Boton label="Iniciar sesión" />
//                     </View>
//                 </View>
//             </View>
//             <View style={[style.forget_password, { marginTop: 18.5, }]}>
//                 <Boton theme="primary" label="Olvide mi contraseña" />
//             </View>
//             <View style={style.AnotherLogin}>
//                 <View style={style.Underscore} />
//                 <View>
//                     <Text style={style.TexAnotherLogin}>Inicio sesion con otro medio</Text>
//                 </View>
//                 <View style={style.Underscore} />
//             </View>
//             <View style={style.AnotherLoginButton}>
//                 <Pressable style={[style.styleButton, { backgroundColor: '#FFFFFF' }]}>
//                     <IconSVG theme='Google' />
//                 </Pressable>
//                 <Pressable style={[style.styleButton, { backgroundColor: '#1877F2' }]}>
//                     <View><IconSVG theme='Facebook' /></View>

//                 </Pressable>
//             </View>
//         </View>
//     );
// };

const style = StyleSheet.create({
    PerfilContainer: {
        backgroundColor: "#F4F5FE",
        width: '100%',         // Ancho de a imagen
        height: '100%',        // Alto de la imagen
        alignItems: 'center',
    },
    RegisterContainer: {
        width: 390,         // Ancho de
        height: 25,        // Alto
        marginTop: 67,
        //borderWidth: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 23,
    },
    LogoMarginTop: {
        marginTop: 32,
    },
    LogionContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 16,
        //gap: 24,
        width: 358,
        height: 303,
        //borderWidth: 1,
        marginTop: 40
    },
    SubContainer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 82,
        marginTop: 24,
        //borderWidth: 1,
    },
    TexContainer: {
        //borderWidth: 1,
        display: "flex",
        width: '100%',
        height: 22,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 22,
        color: '#0F172A',
    },
    TexInput: {
        //borderWidth: 1,
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 16,
        color: '#72767A',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        borderBottomColor: '#A1A5A9',
        borderBottomWidth: StyleSheet.hairlineWidth = 3,
    },
    ButonMarginTop: {
        marginTop: 24,
    },
    ForgetPassword: {
        //borderWidth: 1,
        width: 326,
        height: 98,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AnotherLogin: {
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
});
// const style = StyleSheet.create({
//     PerfilContainer: {
//         backgroundColor: "#F4F5FE",
//         width: '100%',         // Ancho de a imagen
//         height: '100%',        // Alto de la imagen
//         alignItems: 'center',
//     },
//     LogoContainer: {
//         marginTop: 23,
//     },
//     LoginContainer: {
//         marginTop: 40,
//         //backgroundColor: "#FFFFFF",
//         width: 358,         // Ancho de a imagen
//         height: 303,        // Alto de la imagen
//         paddingTop: 24,     // Bajar imagen
//         paddingLeft: 16,
//     },
//     Input: {
//         // //borderWidth: 1,
//         // borderColor: "#ffd33d",
//         width: 326,         // Ancho de a imagen
//         height: 86,        // Alto de la imagen
//     },
//     TexLogin: {
//         fontSize: 16,
//         color: '#0F172A',
//         fontWeight: 'medium',
//         //fontFamily:"'Urbanist'",
//         fontStyle: "normal",
//     },

//     TexInput: {
//         fontSize: 14,
//         borderWidth: 3,
//         borderBottomColor: '#A1A5A9',
//         borderLeftColor: '#F4F5FE',
//         borderRightColor: '#F4F5FE',
//         borderTopColor: '#F4F5FE',
//         color: '#72767A',
//         paddingHorizontal: 8,
//         paddingVertical: 16,

//     },
//     footerContainer: {
//         flex: 1 / 3,
//         alignItems: 'center',
//     },

//     forget_password: {
//         marginTop: 40,
//         fontSize: 16,

//     },
//     AnotherLogin: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: 326,
//         marginTop: 18.5
//     },
//     Underscore: {
//         flex: 1,
//         height: 1,
//         backgroundColor: '#BDBDBD'
//     },
//     TexAnotherLogin: {
//         width: 195,
//         textAlign: 'center'
//     },
//     AnotherLoginButton: {
//         paddingTop: 20,     // Bajar imagen
//         height: 86,
//         //width: '83%',
//         width: 326,
//         ////borderWidth: 1,
//         flexDirection: 'row',
//         //alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 22,
//     },
//     styleButton: {
//         borderRadius: 10,
//         //width: '47%',
//         width: 132,
//         height: 44,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//     Registrarme: {
//         marginTop: 107,
//         width: '100%',
//         height: 22,
//         ////borderWidth: 1,
//         paddingRight: 28,
//         alignItems: 'flex-end',
//         justifyContent: 'center',
//     },
// });

export default Login;