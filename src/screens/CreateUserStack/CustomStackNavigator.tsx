import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

interface CustomStackNavigatorProps {
  screens: { [key: string]: React.ComponentType<any> };
  defaultScreen?: string;
  options?: StackNavigationOptions;
}

const Stack = createStackNavigator();

const CustomStackNavigator: React.FC<CustomStackNavigatorProps> = ({ screens, defaultScreen, options }) => {
  const getScreenComponent = (name: string) => {
    return screens[name] || screens[defaultScreen || Object.keys(screens)[0]]; // Si no se encuentra, usa la pantalla por defecto
  };

  return (
    <Stack.Navigator>
      {Object.keys(screens).map((name) => (
        <Stack.Screen
          key={name}
          name={name}
          component={getScreenComponent(name)}
          options={{
            headerShown: false,
            ...options, // Permite agregar más opciones si se pasan como prop
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CustomStackNavigator;
