export interface IPreference {
    preference_name: string;
    updated_at: string;
    preference_id: number;
    created_at: string; 
    preference_status: boolean;
    preference_description: string;
  }
  
  // Initial state for IPreference
  export const initialStatePreference: IPreference = {
    preference_name: "",
    updated_at: "",
    preference_id: 0,
    created_at: "",
    preference_status: false,
    preference_description: "",
  };
  