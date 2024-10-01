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
import ConstAuthentic from "@/ConstAuthentic";
import CreacionStack from "../CreateUserStack/LoginStack";
import WallScreenAuth from "./WallAuth";
import Loguin from "../screensStack/Loguin";
import CreateAccount from "../screensStack/CreateAccount";
import TermsAndConditions from "../screensStack/TermsAndConditions";
import VerifyIdentity from "../screensStack/VerifyIdentity";
import Successful from "../screensStack/Successful";
import ForgPassword from "../screensStack/ForgetPassword/ForgetPassScreen/ForgPassword";
import Gustos from "../screensStack/GustosScreens/gustos";
import OtpAdviceRecOtp from "../screensStack/RecoverPssAdviceOTP/OtpAdviceRecOtp";
import OtpValidatorPassword from "../screensStack/OtpValidator/OtpValidatorScreen/OtpValidatorPassword";
import NewPass from "../screensStack/NewPassw/NewPassScreen/NewPass";

const Stack = createStackNavigator();
let isAuthenticated = false;
const WallScreen = () => {
  const screens = {
    WallPrincipal: WallPrincipal,
    //CreateEvent: CreateEvent,
    //Boleteria: Boleteria,
    SearchPage: SearchPage,
    DetalleEvento: DetalleEvento,
    Filtros: Filtros,
    FAQ: FAQ,
    Politica: Politica,
    ConfirmacionBoleta: ConfirmacionBoleta,
    //Resumen: Resumen,
    Chat: ChatScreen,
  };
  const screensAuth = {
    CreateEvent: CreateEvent,
    Boleteria: Boleteria,
    Resumen: Resumen,
  };
  const screensCreate = {
    Loguin: Loguin,
    CreateAccount: CreateAccount,
    TermsAndConditions: TermsAndConditions,
    VerifyIdentity: VerifyIdentity,
    Gustos: Gustos,
    Successful: Successful,
    ForgPassword: ForgPassword,
    OtpAdviceRecOtp: OtpAdviceRecOtp,
    OtpValidatorPassword: OtpValidatorPassword,
    NewPass: NewPass,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { flex: 1 },
      }}
      initialRouteName="WallPrincipal"
    >
      {ConstAuthentic.map((c) =>
        c.isAuthenticated
          ? Object.keys(screensAuth).map((name) => (
              <Stack.Screen
                key={name}
                name={name}
                component={screensAuth[name]}
              ></Stack.Screen>
            ))
          : Object.keys(screensCreate).map((name) => (
              <Stack.Screen
                key={name}
                name={name}
                component={screensCreate[name]}
              ></Stack.Screen>
            ))
      )}

      {Object.keys(screens).map((name) => (
        <Stack.Screen
          key={name}
          name={name}
          component={screens[name]}
        ></Stack.Screen>
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
