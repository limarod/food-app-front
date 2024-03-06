import axios from "axios"

export const api = axios.create({
  baseURL: "https://food-app-api-rf50.onrender.com",
  withCredentials: true
});