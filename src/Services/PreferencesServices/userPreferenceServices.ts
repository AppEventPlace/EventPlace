import { IUserPreference } from '@/interfaces/IUserPreference';
import axios from 'axios';


const urlUserPreferences = 'https://vdde3o2p7k.execute-api.us-east-1.amazonaws.com'; 

const PreferencesService = {

    async postUserPreferences(UserPreferences: IUserPreference): Promise<{ message: string }> {
        try {
            const response = await axios.post<{ message: string }>(`${urlUserPreferences}/userPreference`, UserPreferences);
            return response.data; 
        } catch (error) {
            console.error('Error creating user preferences:', error);
            throw error;
        }
    }
};

export default PreferencesService;