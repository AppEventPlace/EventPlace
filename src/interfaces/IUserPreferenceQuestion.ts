export interface IUserPreferenceQuestion {
    createEvents: string | null;
    provideServices: string | null;
    havePlace: string | null;
}

export const initialUserPreferenceQuestion: IUserPreferenceQuestion = {
    createEvents: null,
    provideServices: null,
    havePlace: null,
  };
  