import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Method,
} from "axios";

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
});

defaultInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getLocalStorage(STORAGE_KEYS.TOKEN, "");

    config.headers["Content-Type"] = "application/json";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

defaultInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const statusCode = error.response?.status;

    if (statusCode === 401) {
      error.response.status = 401;
      error.response.statusText = "Unauthorized";
    } else if (statusCode === 404) {
      error.response.status = 404;
      error.response.statusText = "Not Found";
    }

    return Promise.reject(error);
  }
);

// const getRequestConfig = (config: AxiosRequestConfig) => {
//   const token = getLocalStorage(STORAGE_KEYS.TOKEN);

//   return {
//     ...config,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// };

const getDefaultInstance = (method: Method) => (config: AxiosRequestConfig) => {
  return defaultInstance({ ...config, method });
};

const HTTP = {
  get: getDefaultInstance(GET),
  post: getDefaultInstance(POST),
  delete: getDefaultInstance(DELETE),
  put: getDefaultInstance(PUT),
  patch: getDefaultInstance(PATCH),
};

export default HTTP;
