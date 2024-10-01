import React from "react";
import Login from "../screensStack/LoginScreens/login";
import CreateAccount from "../screensStack/CreateAccount";
import TermsAndConditions from "../screensStack/TermsAndConditions";
import VerifyIdentity from "../screensStack/VerifyIdentity";
import Successful from "../screensStack/Successful";
import ForgPassword from "../screensStack/ForgetPassword/ForgetPassScreen/ForgPassword";
import Gustos from "../screensStack/GustosScreens/gustos";
import OtpAdviceRecOtp from "../screensStack/RecoverPssAdviceOTP/OtpAdviceRecOtp";
import OtpValidatorPassword from "../screensStack/OtpValidator/OtpValidatorScreen/OtpValidatorPassword";
import NewPass from "../screensStack/NewPassw/NewPassScreen/NewPass";

import CustomStackNavigator from "./CustomStackNavigator";


const CreacionStack = () => {
  const screens = {
    Login: Login,
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
    <CustomStackNavigator
      screens={screens}
      defaultScreen="Successful"
      options={{
        cardStyle: { flex: 1 },
      }}
    />
  );
};

export default CreacionStack;
