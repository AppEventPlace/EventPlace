import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StackCreateEvent from "../../constants/StackCreateEvent";
import CreateEvent from "./Step1";
import Boleteria from "./Step2";
import Resumen from "./Step3";

const Stack = createStackNavigator();

const StackCreateEventNavigator = () => {
  return (
    <Stack.Navigator>
      {StackCreateEvent.map((Create) => (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          key={Create.name}
          name={Create.label}
          component={
            Create.name === "Step1"
              ? CreateEvent
              : Create.name === "Step2"
              ? Boleteria
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
