import { IUser } from "@/App/shared/interfaces/user.interface";
import { classicAxios } from "./../axios/axios";

export const UsersApi = {
  async getUsers() {
    return await classicAxios.get<IUser[]>("user").then((data) => data.data);
  },
};
