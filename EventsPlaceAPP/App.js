import React from "react";

import { Text, Platform, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import CreacionStack from "./Navigation/LoginStack";

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

//import isUserAuthenticated from "./src/EstadoAuth";
import SvgLogo from "./assets/LogoSVG";
import StackInit from "./constants/StackInit";

//Creación de menú a partir --------------------
const Tab = createBottomTabNavigator();

const MenuMovil = () => {
  return (
    <Tab.Navigator initialRouteName="Wall">
      {TabItems.map((Items) => (
        <Tab.Screen
          key={Items.name}
          name={Items.name}
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveBackgroundColor: "#E4E5E5",
            tabBarStyle: {
              height: 60,
            },
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "#6979F8" : "#000000",
                  fontSize: 10,
                  marginBottom: 10,
                }}
              >
                {Items.name}
              </Text>
            ),

            tabBarIcon: ({ focused }) => (
              <SvgLogo
                theme={Items.source}
                color={focused ? "#6979F8" : "#0F172A"}
                ancho="24"
                alto="24"
              />
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

//fin creacion stack
//constante autenticacion

let isUserAuthenticated = false;

const Pantalla = () => {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      {isUserAuthenticated ? <Menu /> : <CreacionStack />}
    </NavigationContainer>
  );
};
//fin constante autenticacion
export default function App() {
  return <Pantalla />;
}
