import { IPreference } from './IPreference'; 

export interface IResponse {
  success: boolean;
  message: string;
  data: IPreference[];
}

// Initial state for IResponse
export const initialStateResponse: IResponse = {
  success: true,
  message: "Preferences fetched successfully!",
  data: [],
};
