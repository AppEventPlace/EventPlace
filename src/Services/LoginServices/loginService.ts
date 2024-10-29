import { IResponse } from '@/interfaces/IResponse';
import { Ilogin } from '@/interfaces/Login-Interfaces/ILogin';
import axios from 'axios';

const urlLogin = 'https://rjawirvmga.execute-api.us-east-1.amazonaws.com';

const LoginService = {
  async LoginauthenticateUser(login: Ilogin): Promise<IResponse> {
    const response = await axios.post<IResponse>(`${urlLogin}/login`, login);
    return response.data;
  },
};

export default LoginService;
