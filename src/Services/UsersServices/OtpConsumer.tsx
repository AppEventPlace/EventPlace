import React from "react";

interface OtpConsumerProp {
  correo: string;
}

const OtpConsumer = async (email: string) => {
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
    const result = await response.json();
    console.log(result);
  } catch (error) {}
};

export default OtpConsumer;
