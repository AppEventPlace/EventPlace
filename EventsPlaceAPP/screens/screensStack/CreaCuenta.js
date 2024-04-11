import React, { useState } from "react";
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from "react-native-modern-datepicker";


import IconSVG from "../../assets/LogoSVG"
import Boton from "../../components/Button"

const Separator = () => <View style={style.separator} />;
const CreaCuenta = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChanged(propDate) {
    setDate(propDate);
  }

  return (
    <SafeAreaView backgroundColor="#F4F5FE">
      <ScrollView style={style.PerfilContainer}>
        <View style={style.HeaderContainer}>
          <Boton theme="BackCheckron" label="Atras" onPress={() => navigation.navigate("Iniciar sesion")} />
        </View>
        <View style={style.ProgressBar}>
          <IconSVG theme='ProgressBar' progress='90' />
        </View>
        <Text style={style.RegisterTex}>Crear cuenta</Text>
        <Text style={style.ContainerTex}>Crear la cuenta con tus redes o ingresar tu correo electrónico</Text>
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
        <View style={style.AnotherLogin}>
          <View style={style.Underscore} />
          <View>
            <Text style={style.TexAnotherLogin}>Crea cuenta con correo electrónico</Text>
          </View>
          <View style={style.Underscore} />
        </View>
        <View style={style.RegisterContainer}>
          <View style={style.Container}>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Nombre y apellido</Text>
              <TextInput
                placeholder="Ingresa tu correo electrónico"
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Fecha de nacimiento</Text>
              <TextInput
                placeholder="Ingresa la fecha de nacimiento"
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Número de celular</Text>
              <TextInput
                placeholder="Ingresa tu número celular"
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Correo electrónico</Text>
              <TextInput
                placeholder="Ingresa tu nombre correo electrónico"
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Correo electrónico</Text>
              <TextInput
                placeholder="Ingresa tu nombre correo electrónico"
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Crea contraseña</Text>
              <TextInput
                placeholder="Ingresa tu nueva contraseña "
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Confirma contraseña</Text>
              <TextInput
                placeholder="Confirma tu nueva contraseña"
                style={style.TexInput}
              />
            </View>
            <View style={style.SubContainer}>
              <Text style={style.TexContainer}>Nombre de usuario</Text>
              <TextInput
                placeholder="Ingresa tu nombre de usuario"
                style={style.TexInput}
              />
            </View>
          </View>
          <View style={style.ButonMarginTop} >
            <Boton label="Aceptar términos y condiciones y tratamiento de datos personales." />
          </View>
          <View style={style.ButonMarginTop} >
            <Boton label="Continuar" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingBottom: 200,
  },
  HeaderContainer: {
    marginTop: 20,
    height: 25,
    //borderWidth: 1,
  },
  ProgressBar: {
    marginTop: 24,
    width: '100%',
    height: 10,
    //borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegisterTex: {
    marginTop: 24,
    height: 29,
    //borderWidth: 1,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    color: '#515EC0',
    letterSpacing: 0.01,
  },
  ContainerTex: {
    marginTop: 16,
    //borderWidth: 1,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#0F172A',
    letterSpacing: 0.0044,
  },
  AnotherLoginContainer: {
    columnGap: 12,
    width: '100%',
    marginTop: 20,
    //borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  AnotherLoginSubContainer: {
    height: 44,
    width: 111,
    //borderWidth: 1
  },
  AnotherLogin: {
    marginTop: 32,
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
  RegisterContainer: {
    marginTop: 24,
    display: 'flex',
    borderWidth: 1,
    alignItems: 'center',
    width: '100%',
    height: '99%',
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    //borderWidth: 1,
    width: '100%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 12,
  },
  SubContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 82,
    //borderWidth: 1,
    marginTop: 24,
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
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    borderBottomColor: '#A1A5A9',
    borderBottomWidth: StyleSheet.hairlineWidth = 3,
  },
  ButonMarginTop: {
    marginTop: 24,
  },
});

export default CreaCuenta;
