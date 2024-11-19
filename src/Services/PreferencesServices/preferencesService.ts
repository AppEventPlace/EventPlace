import { IResponse } from '@/interfaces/IResponse';
import axios from 'axios';


const urlPreferences = 'https://jjn44qyoab.execute-api.us-east-1.amazonaws.com'; 

const PreferencesService = {
    async ObtainPreferences(): Promise<IResponse> {
            const response = await axios.get<IResponse>(`${urlPreferences}/preference`);
            return response.data; 
    },
};

export default PreferencesService;
