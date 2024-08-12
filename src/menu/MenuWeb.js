import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function CreacionEventoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createDrawerNavigator();

const MenuWeb =()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Creación Evento" component={CreacionEventoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MenuWeb;