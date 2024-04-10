import React from "react";
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import DatePicker from "react-native-modern-datepicker";
import { useState } from "react";

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
    <SafeAreaView>
    <ScrollView>
      <View style={style.PerfilContainer}>
        <View style={style.HeaderContainer}>
          <Boton theme="BackCheckron" label="Atras" onPress={() => navigation.navigate("Iniciar sesion")} />
        </View>
        <View style={style.ProgressBar}>
          <IconSVG theme='ProgressBar' progress='90' />
        </View>
        <Text style={style.RegisterTex}>Registrarme</Text>
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
        {/* <Text> Nombre y apellido </Text>
      <TextInput placeholder="Ingresa tu nombre y apellido" />
      <Text>Fecha de nacimiento</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Seleccionar fecha</Text>
      </TouchableOpacity> */}
        {/* <Modal animationType="slide" transparent={true} visible={open}>
        <View style={{ position: "center" }}>
          <View>
            <DatePicker
              mode="calendar"
              selected={date}
              onDateChange={handleChanged}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
        {/* <Button
        title="Continuar"
        onPress={() => navigation.navigate("Crea tu contraseña")}
      /> */}
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
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 16,
    paddingBottom: 200,
  },
  HeaderContainer: {
    marginTop: 20,
    width: '100%',
    height: 25,
    ////borderWidth: 1,
    //position: 'absolute',
  },
  ProgressBar: {
    marginTop: 16,
    width: '100%',
    height: 10,
    ////borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegisterTex: {
    top: 16,
    width: '100%',
    height: 29,
    //borderWidth: 1,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    color: '#515EC0',
    letterSpacing: 0.01,
  },
  RegisterContainer: {
    top: 16, //top: 32,
    display: 'flex',
    //borderWidth: 1,
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
    height: '83.4%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 12,
    marginTop: 16,
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
