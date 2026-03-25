import api from "../api/axios.mjs";

export const addFood = (FoodName, Descriptions, Price, Category, Image) => api.post('/api/food/addFood', {FoodName, Descriptions, Price, Category, Image})
export const GetFood = () => api.get('/api/food/getFood')