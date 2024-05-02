import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/*---------------------------------------------------------------------------
Importar componentes propios requeridos para el Loguin / creación de usuario
---------------------------------------------------------------------------*/
import Loguin from "../screens/screensStack/Loguin";
import CreaCuenta from "../screens/screensStack/CreaCuenta";
import TermsAndConditions from "../screens/screensStack/TermsAndConditions";
import VerifyIdentity from "../screens/screensStack/VerifyIdentity";
import Gustos from "../screens/screensStack/Gustos";
import Successful from "../screens/screensStack/successful";

const Stack = createStackNavigator();

const CreacionStack = () => {
  const screens = {
    Loguin: Loguin,
    CreaCuenta: CreaCuenta,
    TermsAndConditions: TermsAndConditions,
    VerifyIdentity: VerifyIdentity,
    Gustos: Gustos,
    Successful: Successful,
  };

  const getScreenComponent = (name) => {
    return screens[name] || Successful; // Si no se encuentra la pantalla, se muestra Successful
  };

  return (
    <Stack.Navigator>
      {Object.keys(screens).map((name) => (
        <Stack.Screen
          options={{
            headerShown: false,
            cardStyle: { flex: 1 },
          }}
          key={name}
          name={name}
          component={getScreenComponent(name)}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CreacionStack;
