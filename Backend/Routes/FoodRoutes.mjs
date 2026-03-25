import express from "express";
const router = express.Router();
import FoodController from "../Controllers/Admin/FoodController.mjs";
import upload from "../Middleware/upload.mjs";

router.post("/addFood", upload.single("Image"), FoodController.AddFood);
router.get("/getFood", FoodController.GetFood);
router.delete("/deleteFood/:id", FoodController.DeleteFood);

export default router;