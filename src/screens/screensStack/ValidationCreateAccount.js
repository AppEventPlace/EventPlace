import { useState, useCallback, useEffect } from "react";

const useValidation = (initialState) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const passwordValidation = {
    regex:
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?:{}|<>+\-¬])[A-Za-z0-9!@#$%^&*(),.?:{}|<>+\-¬]{8,}$/,
    message:
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial",
  };

  const validations = {
    phone: {
      regex: /^[0-9]*$/,
      message: "El número de celular debe ser numérico",
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Ingrese un correo electrónico válido",
    },
    password: passwordValidation,
    confirmPassword: passwordValidation,
    date: {
      regex:
        /^(19|20)(((([02468][048])|([13579][26]))(\/)02(\/)29)|(\d{2})(\/)((02(\/)((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))(\/)((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))(\/)31)))$/,
      message: "La fecha no coincide con el formato YYYY/MM/DD",
    },
    default: {
      regex: /^[a-zA-ZñÑ\s]*$/,
      message: "Este campo solo puede contener letras",
    },
  };

  const validarCampos = useCallback(() => {
    let newErrors = {};

    for (let key in state) {
      const { regex, message } = validations[key] || validations.default;
      if (key === "email") {
        if (state[key] && !regex.test(state[key])) {
          newErrors[key] = message;
        }
      } else if (key === "password" || key === "confirmPassword") {
        if (state[key] && !regex.test(state[key])) {
          newErrors[key] = message;
        }
      } else if (key === "date") {
        if (state[key] && !regex.test(state[key])) {
          newErrors[key] = message;
        }
      } else if (key === "fotoPerfilBase64") {
      } else {
        if (!regex.test(state[key])) {
          newErrors[key] = message;
        }
      }
    }

    if (state.confirmPassword && state.password !== state.confirmPassword) {
      newErrors.confirmPassword =
        "La contraseña y la confirmación de la contraseña deben ser iguales";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  }, [state]);

  useEffect(() => {
    validarCampos();
  }, [state, validarCampos]);

  const getStateAsJson = () => {
    return JSON.stringify(state);
  };

  return {
    state,
    setState,
    errors,
    setErrors,
    validarCampos,
    getStateAsJson,
  };
};

export default useValidation;
