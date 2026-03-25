import api from "../api/axios.mjs";

export const addFood = (formData) =>
  api.post("/api/food/addFood", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const GetFood = () => api.get("/api/food/getFood");