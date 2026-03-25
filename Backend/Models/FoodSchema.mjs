import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
	{
		FoodName: {
			type: String,
			required: true,
			trim: true,
		},
		Price: {
			type: Number,
			required: true,
			min: 0,
		},
		Descriptions: {
			type: String,
			required: true,
			trim: true,
		},
		Category: {
			type: String,
			required: true,
			enum: ["KBowl", "Combo", "Noodles", "Drinks", "AddOns"],
			default: "KBowl"
		},
		Image: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Food", foodSchema);
