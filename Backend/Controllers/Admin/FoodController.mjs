import FoodSchema from "../../Models/FoodSchema.mjs";

const FoodController = {
  async AddFood(req, res, next) {
    try {
      const { FoodName, Price, Descriptions, Category } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
      }

      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

      const newFood = await FoodSchema.create({
        FoodName,
        Price,
        Descriptions,
        Category,
        Image: imageUrl,
      });

      res.status(201).json(newFood);
    } catch (error) {
      next(error);
    }
  },

  async GetFood(req, res, next) {
    try {
      const food = await FoodSchema.find();
      res.status(200).json(food);
    } catch (error) {
      next(error);
    }
  },

  async GetFoodById(req, res, next){
    try {
      const food = await FoodSchema.findByIdAndUpdate(req.params.id);
      if (!food) return res.status(400).json({ message: "Food not found!"})
      res.status(200).json(food)
    } catch (error) {
      next(error)
    }
  },

  async DeleteFood(req, res, next){
    try {
      const food = await FoodSchema.findByIdAndDelete(req.params.id);
      if (!food) return res.status(404).json({ message: "Food not found"});
      res.status(200).json({ message: "Food Successfully Deleted!"})
    } catch (error) {
      next(error)
    }
  }
};

export default FoodController;