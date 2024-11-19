import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface secureDataState {
  email: string | null;
  phone: string | null;
}

// Estado inicial donde no hay email ni phone
const initialState: secureDataState = {
  email: null,
  phone: null,
};

// Definición del slice de autenticación que contiene los reducers y el estado inicial
const secureDataslice = createSlice({
  name: "secureData",
  initialState,
  reducers: {
    // Reducer para establecer los datos de conctacto Dato seguro (email, phone)
    setSecureData: (
      state,
      action: PayloadAction<{ email: string; phone: string }>
    ) => {
      state.email = action.payload.email; // Actualiza el email
      state.phone = action.payload.phone; // Actualiza el phone
    },
    // Reducer para limpiar los datos de autenticación, reseteando el estado
    clearSecureData: (state) => {
      state.email = null; // Elimina el email
      state.phone = null; // Elimina el phone
    },
  },
});

// Exportación de las acciones y el reducer
export const { setSecureData, clearSecureData } = secureDataslice.actions;
export default secureDataslice.reducer;
