import { initialState } from '@/interfaces/Redux-Interfaces/AuthState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<{ token: string; idUser: string }>) => {
            state.token = action.payload.token;
            state.idUser = action.payload.idUser;
            state.isAuthenticated = true;
        },
        clearAuthData: (state) => {
            state.token = '';
            state.idUser = '';
            state.isAuthenticated = false;
        }
    }
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;

