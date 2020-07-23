import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", //hard code it for exercise purposes.
});

export const makeGetAPICall = (path: string) => {
  return api.get(path);
};

export const makePutAPICall = (path: string, data: any) => {
  return api.put(path, data);
};
