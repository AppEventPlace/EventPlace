import React from "react";
import Toast from "react-native-toast-message";

interface OtpConsumerProp {
  correo: string;
}

const OtpValidate = async (
  correo: string,
  otp: string,
  validado: (estado: boolean) => void
) => {
  try {
    const response = await fetch(
      "https://vvq67ontm5.execute-api.us-east-1.amazonaws.com/generateOtp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJraWQiOiJxWlJqZmhIK2FkQnl2ZGJRaTFuWE5vd1wvK3JcL2xhR3NUOTJoNFRJRW44dHc9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNDQ4MjQxOC03MGUxLTcwODQtOGYyNC1jNDlhYzg3ZTU4NmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9XRHBTdzZkZVkiLCJjbGllbnRfaWQiOiI1OG5uaDZhM2g5ZDV2MG5nNjZiYXIydDAwdiIsIm9yaWdpbl9qdGkiOiIzYTRlMTAyMy01Y2M0LTQ2YmQtOGZjMS1kMDE0OWNmOWJkMDMiLCJldmVudF9pZCI6IjZlMTQ2ZDg2LWU2YTktNDU3My05YjljLTdkODYwYzE5MTg0ZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjMxNjgxNDYsImV4cCI6MTcyMzE3MTc0NiwiaWF0IjoxNzIzMTY4MTQ2LCJqdGkiOiI0YzU3MjdiZi1hYzY4LTQwYWQtYmI5OS04MDk0ZWYyN2VlOGUiLCJ1c2VybmFtZSI6Im1hbmFnZXVzZXIifQ.ZqvA2KCfpE2oT4uBSCpuQFQoJRKuBGMIH5E_GKvbLrrnPhpH1y_O_VgOOdimHQWECmsXz1OfZVA5HpNxg7Egze6TIb6cGh6FA3aqBL3rMEVOyeNvclimfZv90LHMu8QS6Ol87J1uLXTQEqQrmc-cUFYYcvjOmrnprUFWUEFCea2I6NYshj2nJvN0ubEt3wuUf_J70yZIHt4jYg7hWZTRY86mAEwjlBQU76IXTYeFgevWQ8Nut5LWDuhIVatXhpJKpHXA60UCMsuZLWdKFEgkpBVjLVyrXsT3bgHlU_PBz2xX6Mi0FDnl3-C7theVqADf6eUIsRpyXvvv2d1HoXGnxw",
          // rquid: "fsdgf6854sahgdf5243",
        },
        body: JSON.stringify({
          action: "verify",
          email: correo,
          userId: correo,
          otp: otp,
        }),
      }
    );
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    validado(true);
    return result;
    // Mostrar mensaje de éxito

    console.log(response);
  } catch (error) {
    validado(false);
  }
};
export default OtpValidate;
