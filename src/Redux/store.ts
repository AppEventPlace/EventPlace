import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

/*
  Este archivo configura el store de Redux, que es el contenedor global del estado de la aplicación. 
  Aquí se combinan los reducers y se exportan tipos útiles para su uso en toda la aplicación.

  1. **configureStore**: Es una función proporcionada por Redux Toolkit para crear y configurar el store.
     - **reducer**: Es un objeto donde cada clave representa un slice del estado global. En este caso, 
       se tiene solo el reducer `auth` que maneja el estado de autenticación.

  2. **store**: Esta es la instancia del store creada usando `configureStore`, donde se define `authReducer`
     como el manejador del estado de autenticación. Este store se usará en la aplicación para gestionar los datos globales.

  3. **RootState**: Un tipo que infiere la estructura completa del estado global del store. 
     - Se genera automáticamente con base en el estado que manejan los reducers. En este caso, incluirá el slice `auth`.

  4. **AppDispatch**: Un tipo para el dispatch, que es la función que se utiliza para disparar acciones en Redux.
     - Se utiliza para que el dispatch pueda manejar correctamente las acciones definidas en los reducers.
*/

export const store = configureStore({
    // Definición de los reducers. Aquí solo tenemos el authReducer para manejar el estado de autenticación.
    reducer: {
        auth: authReducer,
    },
});

// Tipos que se utilizan en otras partes de la aplicación para tipar correctamente el estado y el dispatch
export type RootState = ReturnType<typeof store.getState>; // Infiere el tipo del estado global
export type AppDispatch = typeof store.dispatch; // Infiere el tipo del dispatch
