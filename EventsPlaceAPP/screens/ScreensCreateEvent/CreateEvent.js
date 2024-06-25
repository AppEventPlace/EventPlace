import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StackCreateEvent from "../../constants/StackCreateEvent";
import CreateEvent from "./Step1";
import Boleteria from "./Step2";
import Resumen from "./Step3";
import WallPrincipal from "./WallPrincipal";
import SearchPage from "./SearchPage";
import DetalleEvento from "./DetalleEvento";
import Filtros from "../Filtros";

const Stack = createStackNavigator();

const StackCreateEventNavigator = () => {
  return (
    <Stack.Navigator>
      {StackCreateEvent.map((Create) => (
        <Stack.Screen
          initialRouteName="WallPrincipal"
          options={{
            headerShown: false,
          }}
          key={Create.name}
          name={Create.label}
          component={
            Create.name === "WallPrincipal"
              ? WallPrincipal
              : Create.name === "Step1"
              ? CreateEvent
              : Create.name === "Step2"
              ? Boleteria
              : Create.name === "SearchPage"
              ? SearchPage
              : Create.name === "DetalleEvento"
              ? DetalleEvento
              : Create.name === "Filtros"
              ? Filtros
              : Resumen
          }
        />
      ))}
    </Stack.Navigator>
  );
};

const Event = () => {
  return <StackCreateEvent />;
};

export default StackCreateEventNavigator;
