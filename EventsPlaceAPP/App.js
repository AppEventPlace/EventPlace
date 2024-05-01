import React from "react";

import { Platform, StyleSheet, View } from "react-native";
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

const StackCreacion = () => {
  return (
    <Tab.Navigator>
      {StackInit.map((Items) => (
        <Tab.Screen
          key={Items.name}
          name={Items.name}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarButton: () => (
              <View style={{ width: 0, height: "0%" }}></View>
            ),
            //tabBarVisible: false,
            //tabBarActiveBackgroundColor: "#E4E5E5",
          }}
          component={CreacionStack}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//Iconos que se muestran en el menú inferior
