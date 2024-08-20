import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/*---------------------------------------------------------------------------
Importar componentes propios requeridos para el Loguin / creación de usuario
---------------------------------------------------------------------------*/
import Loguin from "../screensStack/Loguin";
import CreateAccount from "../screensStack/CreateAccount";
import TermsAndConditions from "../screensStack/TermsAndConditions";
import VerifyIdentity from "../screensStack/VerifyIdentity";
import Gustos from "../screensStack/Gustos";
import Successful from "../screensStack/Successful";
import ForgPassword from "../screensStack/ForgetPassword/ForgetPassScreen/ForgPassword";
import OtpAdviceRecOtp from "../screensStack/RecoverPssAdviceOTP/OtpAdviceRecOtp";

const Stack = createStackNavigator();

const CreacionStack = () => {
  const screens = {
    Loguin: Loguin,
    CreateAccount: CreateAccount,
    TermsAndConditions: TermsAndConditions,
    VerifyIdentity: VerifyIdentity,
    Gustos: Gustos,
    Successful: Successful,
    ForgPassword: ForgPassword,
    OtpAdviceRecOtp: OtpAdviceRecOtp,
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
