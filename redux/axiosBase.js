import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.getItem("x-auth-token");

const axiosBase = axios.create({
  baseURL: url,
  headers: {
    "x-auth-token": token,
    "Content-Type": "application/json",
  },
});

export default axiosBase;
