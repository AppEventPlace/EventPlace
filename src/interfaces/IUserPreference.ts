export interface IUserPreference {
    userId: string;
    preferences: [];
}


export const initialUserPreferences: IUserPreference = {
    userId: "",
    preferences: []
};
