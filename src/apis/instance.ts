import axios, { AxiosRequestConfig, Method } from "axios";

import { STORAGE_KEYS } from "../utils/constants";
import { getLocalStorage } from "../utils/storage";

const API_END_POINT = "https://www.pre-onboarding-selection-task.shop/";

const METHOD: Record<string, Method> = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
};

const { GET, POST, DELETE, PUT, PATCH } = METHOD;

const defaultInstance = axios.create({
  baseURL: API_END_POINT,
  headers: {
    "Content-Type": "application/json",
  },
});

const getRequestConfig = (config: AxiosRequestConfig) => {
  const token = getLocalStorage(STORAGE_KEYS.TOKEN);

  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

const getDefaultInstance = (method: Method) => (config: AxiosRequestConfig) => {
  return defaultInstance({ ...getRequestConfig(config), method });
};

const HTTP = {
  get: getDefaultInstance(GET),
  post: getDefaultInstance(POST),
  delete: getDefaultInstance(DELETE),
  put: getDefaultInstance(PUT),
  patch: getDefaultInstance(PATCH),
};

export default HTTP;
