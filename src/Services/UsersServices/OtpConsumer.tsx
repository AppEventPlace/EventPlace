import React, { useState, useSyncExternalStore } from "react";

interface OtpConsumerProp {
  correo: string;
}

const OtpConsumer = async (
  email: string,
  Validacion: (estado: boolean, message: string) => void
) => {
  let result;
  try {
    const response = await fetch(
      "https://vvq67ontm5.execute-api.us-east-1.amazonaws.com/generateOtp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          // rquid: "fsdgf6854sahgdf5243",
        },
        body: JSON.stringify({
          action: "generate",
          email: email,
          userId: email,
        }),
      }
    );
    result = await response.json();
    //console.log(result.message);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    Validacion(true, result.message);
    return result;
    // Mostrar mensaje de éxito
  } catch (error: any) {
    //console.log(result.message);

    Validacion(false, result.message);
  }
};

export default OtpConsumer;
