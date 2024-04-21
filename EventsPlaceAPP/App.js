import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import MenuWeb from "./src/menu/MenuWeb";
import {
  createBottomTabNavigator,
  focused,
  color,
} from "@react-navigation/bottom-tabs";
import PerfilScreen from "./screens/screensMenu/Perfil";
import NotificacionesScreen from "./screens/screensMenu/Notificaciones";
import WallScreen from "./screens/screensMenu/Wall";
import BoletasScreen from "./screens/screensMenu/Boletas";
import ChatScreen from "./screens/screensMenu/Chat";
import TabItems from "./constants/TabItems";
import PropTypes from "prop-types";
import StackCreacionUsuario from "./constants/StackCreacionUsuario";
import CreaCuenta from "./screens/screensStack/CreaCuenta";
import Loguin from "./screens/screensStack/Loguin";
import Gustos from "./screens/screensStack/Gustos";
import VerifyIdentity from "./screens/screensStack/VerifyIdentity";
import TermsAndConditions from "./screens/screensStack/TermsAndConditions";
import successful from "./screens/screensStack/successful";
import EstadoAuth from "./src/EstadoAuth";
import SvgLogo from "./assets/LogoSVG";
//Creación de menú a partir --------------------
const Tab = createBottomTabNavigator();

const MenuMovil = () => {
  return (
    <Tab.Navigator initialRouteName="Mi Perfil">
      {TabItems.map((Items) => (
        <Tab.Screen
          key={Items.name}
          name={Items.name}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#E4E5E5",
            tabBarIcon: ({ fill, size }) => (
              <SvgLogo theme={Items.source} color="#0F172A" />
            ),
          }}
          component={
            Items.name === "Notificaciones"
              ? NotificacionesScreen
              : Items.name === "Chat"
              ? ChatScreen
              : Items.name === "Wall"
              ? WallScreen
              : Items.name === "Mis Boletas"
              ? BoletasScreen
              : PerfilScreen
          }
        />
      ))}
    </Tab.Navigator>
  );
};

const Menu = () => {
  if (Platform.OS === "android") {
    return <MenuMovil />;
  } else {
    return <MenuMovil />;
  }
};
//fin de creación menú ---------------------
//Creación de stack de screens--------------
const Stack = createStackNavigator();

const CreacionStack = () => {
  return (
    <Stack.Navigator>
      {StackCreacionUsuario.map((creacion) => (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          key={creacion.name}
          name={creacion.label}
          component={
            creacion.name === "Loguin"
              ? Loguin
              : creacion.name === "CreaCuenta"
              ? CreaCuenta
              : creacion.name === "TermsAndConditions"
              ? TermsAndConditions
              : creacion.name === "VerifyIdentity"
              ? VerifyIdentity
              : creacion.name === "Gustos"
              ? Gustos
              : successful
          }
        />
      ))}
    </Stack.Navigator>
  );
};
//fin creacion stack
//constante autenticacion
const isUserAuthenticated = false;

const Pantalla = () => {
  return (
    <NavigationContainer>
      {isUserAuthenticated ? <Menu /> : <CreacionStack />}
    </NavigationContainer>
  );
};
//fin constante autenticacion
export default function App() {
  return <Pantalla />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//Iconos que se muestran en el menú inferior
