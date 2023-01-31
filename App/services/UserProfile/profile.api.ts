import { IUser } from "@/App/shared/interfaces/user.interface";
import { classicAxios, getKeyHeaders } from "./../axios/axios";

export const profileApi = {
  async getProfile(key: string) {
    return await classicAxios.get<IUser>("profile", {
      headers: getKeyHeaders(key),
    });
  },
};
