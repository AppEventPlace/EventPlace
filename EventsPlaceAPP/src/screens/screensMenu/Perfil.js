import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StackPerfil from "../../constants/StackPerfil";
import EditarPerfilScreen from "../ScreenStackPerfil/EditarPerfil";
import EstadisticasScreen from "../ScreenStackPerfil/EstadisticasPerfil";
import EventosPerfilScreen from "../ScreenStackPerfil/EventosPerfil";
import PerfilPrincipalScreen from "../ScreenStackPerfil/PerfilPrincipal";

const Stack = createStackNavigator();

const StackPerfilScreen = () => {
  return (
    <Stack.Navigator>
      {StackPerfil.map((Perfil) => (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          key={Perfil.name}
          name={Perfil.label}
          component={
            Perfil.name === "PerfilPrincipal"
              ? PerfilPrincipalScreen
              : Perfil.name === "EditarPerfil"
              ? EditarPerfilScreen
              : Perfil.name === "EventosCreados"
              ? EventosPerfilScreen
              : EstadisticasScreen
          }
        />
      ))}
    </Stack.Navigator>
  );
};

const PerfilScreen = () => {
  return <StackPerfilScreen />;
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
  },
});
export default PerfilScreen;
