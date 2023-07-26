import axios from "axios";

const BASE_URL = "https://6375e206b5f0e1eb85fbfcdc.mockapi.io/hamrahtel/";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

export { api };
