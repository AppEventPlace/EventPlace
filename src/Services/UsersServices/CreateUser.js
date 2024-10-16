import Toast from "react-native-toast-message";

const CreateUser = async (stateJson, Validacion) => {
  let result;
  try {
    const response = await fetch(
      "https://5yofmbz7k8.execute-api.us-east-1.amazonaws.com/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJraWQiOiJxWlJqZmhIK2FkQnl2ZGJRaTFuWE5vd1wvK3JcL2xhR3NUOTJoNFRJRW44dHc9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNDQ4MjQxOC03MGUxLTcwODQtOGYyNC1jNDlhYzg3ZTU4NmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9XRHBTdzZkZVkiLCJjbGllbnRfaWQiOiI1OG5uaDZhM2g5ZDV2MG5nNjZiYXIydDAwdiIsIm9yaWdpbl9qdGkiOiJlYmI2ZjE2ZS1mOTc2LTQyZjAtYTY0NS0yMWYyMWYxZTUxYmMiLCJldmVudF9pZCI6IjI2MmZkMzJlLWZkY2YtNDkwYy1hYmI1LTliMzRhNmY4MWI4NyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjQ4MDQwNTksImV4cCI6MTcyNDgwNzY1OSwiaWF0IjoxNzI0ODA0MDU5LCJqdGkiOiJjNTJiOWYxNS0wM2YyLTRkZTktYmYwNi0zMTkyMGI5NjY0MjciLCJ1c2VybmFtZSI6Im1hbmFnZXVzZXIifQ.mYvaGy2sIk-MoANSfGS5BMmGP2diSegzu_2M475uYmyQ7xxhyMQXjRGqb-R9aU2jip-A9NNNU92pZfGUy7hTI2sMF_JXZ19t2wstym176VrwJdm34nw2pFYSTrexdCrRd4thmQ-hAJkJptVss94r6uZEyepYTgz9aJmeVwdBLpK9EVd4dK5zSzxu_n38wPhSrI7WDnHYkS56ZDbmf3ziaLILIcl371nk5b4pCq_QiLhtP9m6u6sxPFcogSb42c1ewt-_EX_Gpr7XA07xZSMXOh8SjOtnazXJtYHieCQsOveD3qvsq-xpMn10NZezKWT8Wblx4FJtpFOpe6VJN7jkdQ",
          // rquid: "fsdgf6854sahgdf5243",
        },
        body: stateJson, // Asegúrate de stringify el cuerpo JSON
      }
    );

    result = await response.json();
    console.log(result);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Mostrar mensaje de éxito

    Validacion(true, result.statusDesc, result.userID);
    //console.log(stateJson);
  } catch (error) {
    // console.error("Error al crear usuario:", error);
    Validacion(false, result.statusDesc);
  }
};

export default CreateUser;
