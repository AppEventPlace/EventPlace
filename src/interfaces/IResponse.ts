export interface IResponse {
  success: boolean;
  message: string;
  data: [];
}

// Initial state for IResponse
export const initialStateResponse: IResponse = {
  success: true,
  message: "",
  data: [],
};
