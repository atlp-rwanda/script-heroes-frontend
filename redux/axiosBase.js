import axios from "axios";

const url = process.env.URL;
const token = localStorage.getItem("token");

const axiosBase = axios.create({
  baseURL: url,
  headers: {
    "x-auth-token": token,
    "Content-Type": "application/json",
  },
});

export default axiosBase;
