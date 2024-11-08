import { IResponse } from "@/interfaces/IResponse";
import axios from "axios";

const urlGetUser = "https://dxskui0le8.execute-api.us-east-1.amazonaws.com";

const GetUserByEmail = {
  async ObtainUserDataByEmail(email: string) {
    const response = await axios.get(`${urlGetUser}/getUserByEmail/${email}`);
    return response.data;
  },
};

export default GetUserByEmail;
