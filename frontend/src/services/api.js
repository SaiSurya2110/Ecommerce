import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-uc50.onrender.com./api/products",
});

export default API;