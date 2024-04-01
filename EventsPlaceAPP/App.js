import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import MenuWeb from "./src/menu/MenuWeb";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilScreen from "./screens/Perfil";
import NotificacionesScreen from "./screens/Notificaciones";
import WallScreen from "./screens/Wall";
import BoletasScreen from "./screens/Boletas";
import ChatScreen from "./screens/Chat";


const Tab = createBottomTabNavigator();


const MenuMovil = () =>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Wall" component={WallScreen} />
        <Tab.Screen name="Mis Boletas" component={BoletasScreen} />
        <Tab.Screen name="Mi Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Menu = () =>{
  
   if(Platform.OS === 'android') { 
    return <MenuMovil />; 
  } else{
    
    return (
  <MenuMovil /> 
  );}
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
