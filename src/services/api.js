import axios from "axios"

let baseURL

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:9999"; 
} else {
  baseURL = "https://food-app-back-5b83.onrender.com";
}

export const api = axios.create({
  baseURL,
  withCredentials: true
});