export interface IUserPreference {
    userId: string;
    preferences: number[];
}


export const initialUserPreferences: IUserPreference = {
    userId: "",
    preferences: []
};
