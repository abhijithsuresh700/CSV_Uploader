import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://csv-uploader1-tq05.onrender.com",
});