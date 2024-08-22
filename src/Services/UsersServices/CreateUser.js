import Toast from "react-native-toast-message";

const CreateUser = async (stateJson) => {
  try {
    const response = await fetch(
      "https://5yofmbz7k8.execute-api.us-east-1.amazonaws.com/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          // rquid: "fsdgf6854sahgdf5243",
        },
        body: stateJson, // Asegúrate de stringify el cuerpo JSON
      }
    );

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Mostrar mensaje de éxito
    Toast.show({
      type: "success",
      text1: "Creación exitosa",
      visibilityTime: 2000, // Duración en milisegundos
    });

    console.log(stateJson);
  } catch (error) {
    // console.error("Error al crear usuario:", error);
    console.log(result);
    // Mostrar mensaje de error
    Toast.show({
      type: "error",
      text1: "Error al crear usuario",
      text2: error.message, // Detalles del error
      visibilityTime: 3000,
    });
  }
};

export default CreateUser;

// import { ToastAndroid } from "react-native";

// const CreateUser = async (stateJson) => {
//   try {
//     const response = await fetch(
//       "https://v8gfptr7d7.execute-api.us-east-1.amazonaws.com/createUser",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // rquid: "fsdgf6854sahgdf5243",
//         },
//         body: stateJson,
//       }
//     );

//     const result = await response.json();
//     console.log(result);
//     ToastAndroid.show("Creacion hecha", ToastAndroid.SHORT);
//     console.log(stateJson);
//   } catch (error) {
//     console.error("Error al crear usuario:", error);
//     ToastAndroid.show("Error al crear usuario", ToastAndroid.SHORT);
//   }
// };

// export default CreateUser;
