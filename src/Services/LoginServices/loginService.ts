import { Ilogin } from '@/interfaces/Login-Interfaces/ILogin';
import axios from 'axios';

const urlLogin = 'https://rjawirvmga.execute-api.us-east-1.amazonaws.com';

const LoginService = {
    async LoginauthenticateUser(login: Ilogin): Promise<{ token: string }> {
        try {
            const response = await axios.post<{ token: string }>(`${urlLogin}/login`, login);
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                // Manejar cuando el usuario no está registrado
                throw new Error('El usuario no se encuentra registrado.');
            }
            console.error('Error al intentar iniciar sesión:', error);
            throw new Error('Ocurrió un error al procesar el inicio de sesión. Inténtalo nuevamente.');
        }
    }
};

export default LoginService;
