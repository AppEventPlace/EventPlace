export interface AuthState {
    token: string;
    idUser: string;
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    token: '',
    idUser: '',
    isAuthenticated: false,
};