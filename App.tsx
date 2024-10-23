import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CreacionStack from "./src/screens/CreateUserStack/CreacionStack";
import Toast from "react-native-toast-message";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilScreen from "./src/screens/screensMenu/Perfil";
import NotificacionesScreen from "./src/screens/screensMenu/Notificaciones";
import WallScreen from "./src/screens/screensMenu/Wall";
import Chat from "./src/screens/screensMenu/ChatScreens/chatScreen";
import BoletasScreen from "./src/screens/screensMenu/Boletas";
import TabItems from "./src/constants/TabItems";
import SvgLogo from "./src/assets/LogoSVG";
import { Colors } from "./src/components/CommonStyles/CommonStyles";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

const Tab = createBottomTabNavigator();

const renderTabLabel = (focused: boolean, name: string) => (
  <Text
    style={{
      color: focused ? Colors.NightBlue_600 : Colors.Negro,
      fontSize: 10,
      marginBottom: 10,
    }}
  >
    {name}
  </Text>
);

const renderTabIcon = (focused: boolean, source: string) => (
  <SvgLogo
    theme={source}
    color={focused ? Colors.NightBlue_600 : Colors.TexColor}
    ancho="24"
    alto="24"
    progress={0}
  />
);

const MenuMovil = () => (
  <Tab.Navigator initialRouteName="Wall">
    {TabItems.map(({ name, source }) => (
      <Tab.Screen
        key={name}
        name={name}
        component={
          name === "Notificaciones"
            ? NotificacionesScreen
            : name === "Chat"
            ? Chat
            : name === "Wall"
            ? WallScreen
            : name === "Mis Boletas"
            ? BoletasScreen
            : PerfilScreen
        }
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: Colors.MidnightDreams_200,
          tabBarStyle: { height: 60 },
          tabBarLabel: ({ focused }) => renderTabLabel(focused, name),
          tabBarIcon: ({ focused }) => renderTabIcon(focused, source),
        }}
      />
    ))}
  </Tab.Navigator>
);

const Pantalla = () => {
  const isUserAuthenticated = false; // Cambiar a true si se necesita autenticación

  return (
    <NavigationContainer>
      {isUserAuthenticated ? <MenuMovil /> : <CreacionStack />}
      <Toast />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Pantalla />
    </Provider>
  );
}
