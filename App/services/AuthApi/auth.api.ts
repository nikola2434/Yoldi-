import { removeTokenCookie, saveToLocalStorage } from "./auth-helper.api";
import { IResponseLogin } from "./authApi.interface";
import { classicAxios } from "./../axios/axios";

export const authApi = {
  async login(email: string, password: string) {
    const value = await classicAxios
      .post<IResponseLogin>("auth/login", {
        email,
        password,
      })
      .then((data) => data.data);
    if (value) saveToLocalStorage(value.value);
    return value;
  },

  async register(email: string, password: string, name: string) {
    const value = await classicAxios
      .post<IResponseLogin>("auth/sign-up", {
        email,
        password,
        name,
      })
      .then((data) => data.data);
    debugger;
    if (value) saveToLocalStorage(value.value);
    return value;
  },

  logout() {
    removeTokenCookie();
    if (typeof window !== "undefined") localStorage.removeItem("key");
  },
};
