import { store } from "@/Redux/store";
import React, { useState, useSyncExternalStore } from "react";

const OtpConsumer = async (
  Validacion: (estado: boolean, message: string) => void
) => {
  const email = store.getState().secureData.email!;
  const userID = store.getState().auth.idUser!;
  let result;
  console.log(email, userID);
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
          userId: userID,
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
  } catch (error) {
    //console.log(result.message);

    Validacion(false, result.message);
  }
};

export default OtpConsumer;
