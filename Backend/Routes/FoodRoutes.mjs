import express from 'express';
const router = express.Router();
import FoodController from '../Controllers/Admin/FoodController.mjs';

router.post('/addFood', FoodController.AddFood)

export default router;