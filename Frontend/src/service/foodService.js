import api from "../api/axios.mjs";

export const AddFood = () => api.post('/api/food/addFood', {})
export const GetFood = () => api.get('/api/food/getFood')