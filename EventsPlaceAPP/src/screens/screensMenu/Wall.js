import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import CreateEvent from "../ScreensCreateEvent/Step1";
import Boleteria from "../ScreensCreateEvent/Step2";
import Resumen from "../ScreensCreateEvent/Step3";
import WallPrincipal from "../ScreensCreateEvent/WallPrincipal";
import SearchPage from "../ScreensCreateEvent/SearchPage";
import DetalleEvento from "../ScreensCreateEvent/DetalleEvento";
import Filtros from "../ScreensCreateEvent/Filtros";
import FAQ from "../ScreensCreateEvent/FAQ";
import Politica from "../ScreensCreateEvent/Politica";
import ConfirmacionBoleta from "../ScreensCreateEvent/ConfirmacionBoleta";
import ChatScreen from "../screensMenu/ChatScreens/chatScreen";

const Stack = createStackNavigator();

const WallScreen = () => {
  const screens = {
    WallPrincipal: WallPrincipal,
    CreateEvent: CreateEvent,
    Boleteria: Boleteria,
    SearchPage: SearchPage,
    DetalleEvento: DetalleEvento,
    Filtros: Filtros,
    FAQ: FAQ,
    Politica: Politica,
    ConfirmacionBoleta: ConfirmacionBoleta,
    Resumen: Resumen,
    Chat: ChatScreen,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { flex: 1 },
      }}
    >
      {Object.keys(screens).map((name) => (
        <Stack.Screen key={name} name={name} component={screens[name]} />
      ))}
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
    height: "100%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default WallScreen;
