import axios from "axios";
import { getLocalStorage } from "../utils/storage";

const API_END_POINT = "https://www.pre-onboarding-selection-task.shop/";

const METHOD = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
};

const { GET, POST, DELETE, PUT, PATCH } = METHOD;

const getDefaultInstance = (method) => {
  const token = getLocalStorage("token");

  const defaultInstance = axios.create({
    baseURL: API_END_POINT,
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return defaultInstance;
};

const HTTP = {
  get: getDefaultInstance(GET),
  post: getDefaultInstance(POST),
  delete: getDefaultInstance(DELETE),
  put: getDefaultInstance(PUT),
  patch: getDefaultInstance(PATCH),
};

export default HTTP;
