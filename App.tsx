import React from "react";
import { Text, Platform, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CreacionStack from "./src/screens/CreateUserStack/CreacionStack";
import Toast from "react-native-toast-message";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import PerfilScreen from "./src/screens/screensMenu/Perfil";
import NotificacionesScreen from "./src/screens/screensMenu/Notificaciones";
import WallScreen from "./src/screens/screensMenu/Wall";
import Chat from "./src/screens/screensMenu/ChatScreens/chatScreen";
import BoletasScreen from "./src/screens/screensMenu/Boletas";
import TabItems from "./src/constants/TabItems";
import SvgLogo from "./src/assets/LogoSVG";
import { Colors } from "./src/components/CommonStyles/CommonStyles";

const Tab = createBottomTabNavigator();

type TabItem = {
  name: string;
  source: string; 
};

const MenuMovil = () => {
  return (
    <Tab.Navigator initialRouteName="Wall">
      {TabItems.map((item: TabItem) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveBackgroundColor: Colors.MidnightDreams_200,
            tabBarStyle: {
              height: 60,
            },
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? Colors.NightBlue_600 : Colors.Negro,
                  fontSize: 10,
                  marginBottom: 10,
                }}
              >
                {item.name}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <SvgLogo
                theme={item.source}
                color={focused ? Colors.NightBlue_600 : Colors.TexColor}
                ancho="24"
                alto="24" progress={0}              
                />
            ),
          }}
          component={
            item.name === "Notificaciones"
              ? NotificacionesScreen
              : item.name === "Chat"
              ? Chat
              : item.name === "Wall"
              ? WallScreen
              : item.name === "Mis Boletas"
              ? BoletasScreen
              : PerfilScreen
          }
        />
      ))}
    </Tab.Navigator>
  );
};

const Menu = () => {
  return <MenuMovil />;
};

let isUserAuthenticated = false;

const Pantalla = () => {
  return (
    <NavigationContainer>
      {isUserAuthenticated ? <Menu /> : <CreacionStack />}
      <Toast />
    </NavigationContainer>
  );
};

export default function App() {
  return <Pantalla />;
}
