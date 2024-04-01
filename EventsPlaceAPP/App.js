import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import MenuWeb from "./src/menu/MenuWeb";
import {
  createBottomTabNavigator,
  focused,
  color,
} from "@react-navigation/bottom-tabs";
import PerfilScreen from "./screens/Perfil";
import NotificacionesScreen from "./screens/Notificaciones";
import WallScreen from "./screens/Wall";
import BoletasScreen from "./screens/Boletas";
import ChatScreen from "./screens/Chat";
import TabItems from "./constants/TabItems";
import PropTypes from "prop-types";

const Tab = createBottomTabNavigator();

const MenuMovil = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Wall">
        {TabItems.map((Items) => (
          <Tab.Screen
            key={Items.name}
            name={Items.name}
            options={{
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: "#E4E5E5",
              tabBarIcon: () => cargarIcono(Items.source),
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
    </NavigationContainer>
  );
};

const Menu = () => {
  if (Platform.OS === "android") {
    return <MenuMovil />;
  } else {
    return <MenuMovil />;
  }
};

export default function App() {
  return <Menu />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const cargarIcono = (imagen) => {
  return (
    <Image
      source={imagen}
      style={{
        resizeMode: "contain",
        tintColor: "#0F172A",
      }}
    />
  );
};
