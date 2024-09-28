export interface IPreference {
  preference_id: number;
  preference_name_en: string;
  preference_name_es: string;
  preference_status: boolean;
  preference_description: string;
}

export const initialStatePreference: IPreference = {
  preference_id: 0,
  preference_name_en: '',
  preference_name_es: '',
  preference_status: false,
  preference_description: ''
};
