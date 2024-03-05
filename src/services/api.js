import axios from "axios"

export const api = axios.create({
  baseURL: "https://foodapp-api-3d9f.onrender.com",
  withCredentials: true
});