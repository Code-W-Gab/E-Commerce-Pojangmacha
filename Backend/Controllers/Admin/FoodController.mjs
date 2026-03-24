import FoodSchema from "../../Models/FoodSchema.mjs";

const FoodController = {
  async AddFood (req, res, next){
    try {
      const {FoodName, Price, Descriptions, Category, Image} = req.body;
      const newFood = await FoodSchema.create({FoodName, Price, Descriptions, Category, Image})
      res.status(201).json(newFood)
    } catch (error) {
      next(error)
    }
  },

  async GetFood (req, res, next){
    try {
      const food = await FoodSchema.find()
      res.status(200).json(food)
    } catch (error) {
      next(error)
    }
  }
}

export default FoodController;