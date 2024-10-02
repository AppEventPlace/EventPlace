import React, { useState } from "react";

import {
  Text,
  Platform,
  StyleSheet,
  View,
  useAnimatedValue,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreacionStack from "./src/screens/CreateUserStack/LoginStack";
import Toast from "react-native-toast-message";

//import MenuWeb from "./src/menu/MenuWeb";
import {
  createBottomTabNavigator,
  focused,
  color,
} from "@react-navigation/bottom-tabs";
import PerfilScreen from "./src/screens/screensMenu/Perfil";
import NotificacionesScreen from "./src/screens/screensMenu/Notificaciones";
import WallScreen from "./src/screens/screensMenu/Wall";
import Chat from "./src/screens/screensMenu/ChatScreens/chatScreen";
import BoletasScreen from "./src/screens/screensMenu/Boletas";
import TabItems from "./src/constants/TabItems";

//import isUserAuthenticated from "./src/EstadoAuth";
import SvgLogo from "./src/components/assets/LogoSVG";
import { Colors } from "./src/components/CommonStyles/CommonStyles";
import ConstAuthentic from "src/ConstAuthentic";
import EstadoAuth from "@/EstadoAuth";

//Creación de menú a partir --------------------
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
            tabBarActiveBackgroundColor: Colors.MidnightDreams_200,
            tabBarStyle: {
              //height: 80,

              gap: 10,
            },
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? Colors.NightBlue_600 : Colors.Negro,
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
                color={focused ? Colors.NightBlue_600 : Colors.TexColor}
                ancho="24"
                alto="24"
              />
            ),
          }}
          component={
            Items.name === "Notificaciones"
              ? NotificacionesScreen
              : Items.name === "Chat"
              ? Chat
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

const Menu = ({}) => {
  if (Platform.OS === "android") {
    return <MenuMovil />;
  } else {
    return <MenuMovil />;
  }
};

const Pantalla = ({ IsUserAuthenticated, ChangeState }) => {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Menu" options={{ headerShown: false }}>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            cardStyle: { flex: 1 },
          }}
        />
        <Stack.Screen
          name="CreationStack"
          component={CreacionStack}
          options={{
            headerShown: false,
            cardStyle: { flex: 1 },
          }}
        />
      </Stack.Navigator>

      <Toast />
    </NavigationContainer>
  );
};

export default function App() {
  return <Pantalla />;
}
