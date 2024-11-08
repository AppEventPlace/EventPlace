import { IResponse } from "@/interfaces/IResponse";
import axios from "axios";

const urlGetUser = "https://dxskui0le8.execute-api.us-east-1.amazonaws.com";
const id = "f";
const GetUser = {
  async ObtainUserData(): Promise<IResponse> {
    const response = await axios.get<IResponse>(`${urlGetUser}/getUser/${id}`);
    return response.data;
  },
};

export default GetUser;
