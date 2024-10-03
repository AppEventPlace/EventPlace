import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* 
  Este archivo define un slice de Redux llamado 'auth' que maneja el estado de autenticación de un usuario. 

  1. **AuthState**: Esta interfaz describe la estructura del estado de autenticación. Tiene tres propiedades:
      - `token`: una cadena que representa el token de autenticación.
      - `idUser`: una cadena que representa el ID del usuario autenticado.
      - `isAuthenticated`: un booleano que indica si el usuario está autenticado o no.

  2. **initialState**: Es el estado inicial de la autenticación. Comienza con `token` y `idUser` como `null`, y `isAuthenticated` como `false`, lo que indica que el usuario no está autenticado.

  3. **createSlice**: Aquí se crea un slice llamado 'auth'. Un slice es una colección de reducers y el estado inicial correspondiente a una parte específica del estado global de Redux.

      - **reducers**:
        a. `setAuthData`: Un reducer que recibe el token e ID del usuario desde un `PayloadAction` (que contiene un objeto con `token` e `idUser`) y actualiza el estado con esos valores. Además, establece `isAuthenticated` a `true` porque ahora se considera que el usuario está autenticado.
        
        b. `clearAuthData`: Un reducer que "limpia" o resetea el estado de autenticación, estableciendo el `token` e `idUser` en `null` y marcando `isAuthenticated` como `false`, lo que indica que el usuario ya no está autenticado.

  4. **Exportación**:
      - `setAuthData`: Acción que se utiliza para establecer los datos de autenticación.
      - `clearAuthData`: Acción que se utiliza para borrar los datos de autenticación.
      - Se exporta el reducer (`authSlice.reducer`) para que pueda ser utilizado en el store global de Redux.
*/

interface AuthState {
    token: string | null;
    idUser: string | null;
    isAuthenticated: boolean;
}

// Estado inicial donde no hay token ni idUser, y el usuario no está autenticado
const initialState: AuthState = {
    token: null,
    idUser: null,
    isAuthenticated: false,
};

// Definición del slice de autenticación que contiene los reducers y el estado inicial
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Reducer para establecer los datos de autenticación (token e idUser)
        setAuthData: (state, action: PayloadAction<{ token: string; idUser: string }>) => {
            state.token = action.payload.token; // Actualiza el token
            state.idUser = action.payload.idUser; // Actualiza el idUser
            state.isAuthenticated = true; // Marca al usuario como autenticado
        },
        // Reducer para limpiar los datos de autenticación, reseteando el estado
        clearAuthData: (state) => {
            state.token = null; // Elimina el token
            state.idUser = null; // Elimina el idUser
            state.isAuthenticated = false; // Marca al usuario como no autenticado
        }
    }
});

// Exportación de las acciones y el reducer
export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
