import React from "react";
import { Text, View } from "react-native";

const CreateUser = async (
  nombre,
  apellido,
  fechaNacimiento,
  celular,
  email,
  usuario,
  contraseña
) => {
  await fetch(
    "https://v8gfptr7d7.execute-api.us-east-1.amazonaws.com/createUser",
    {
      method: "POST",
      headers: {
        //date: "Fri, 24 May 2024 00",
        "Content-Type": "application/json",
        //rquid: "fsdgf6854sahgdf5243",
        //"Access-Control-Allow-Origin": "http://localhost:8081",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        fechaNacimiento,
        celular,
        email,
        usuario,
        contraseña,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => [console.log(result), alert("Creacion hecha")]);
  return null;
};

export default CreateUser;
