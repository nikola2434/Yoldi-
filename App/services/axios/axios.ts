import axios from "axios";

export const classicAxios = axios.create({
  baseURL: "https://frontend-test-api.yoldi.agency/api/",
});

export const getContentType = () => {
  return { "Content-Type": "application/json" };
};
