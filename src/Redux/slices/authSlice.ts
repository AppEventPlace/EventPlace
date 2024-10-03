import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    idUser: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    idUser: null,
    isAuthenticated: false,
};

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
            state.token = null;
            state.idUser = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
