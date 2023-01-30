import Cookies from "js-cookie";

export const saveTokenCookie = (value: string) => {
  Cookies.set("key", value);
};

export const removeTokenCookie = () => {
  Cookies.remove("key");
};

export const saveToLocalStorage = (value: string) => {
  if (typeof window !== "undefined") localStorage.setItem("key", value);
};
