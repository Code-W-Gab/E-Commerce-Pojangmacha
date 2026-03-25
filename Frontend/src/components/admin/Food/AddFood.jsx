import { useState } from "react"
import { AddFood } from "../../../service/foodService";
import toast from "react-hot-toast";

export default function AddFood({onClose}) {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  function handleAddFood() {
    AddFood(foodName, description, price, category, image)
      .then(res => {
        toast.success("Food Added")
        
      }).catch(err => console.log(err))
  }
  
  return(
    <main className="bg-white w-100 p-5 rounded-md">
      <h1 className="font-bold text-lg mb-2 text-center tex-t">ADD FOOD</h1>
      <label className="flex flex-col gap-1 mb-3">
        Food Name:
        <input
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          type="text" 
          placeholder="Food Name"
          className="border rounded-sm px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-1 mb-3">
        Descriptions:
        <input 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text" 
          placeholder="Description"
          className="border rounded-sm px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-1 mb-3">
        Price:
        <input 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number" 
          placeholder="Price"
          className="border rounded-sm px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-1 mb-3">
        Category:
        <select onChange={(e) => setCategory(e.target.value)} className="border rounded-sm px-2 py-1">
          <option value="KBowl">K-Bowl</option>
          <option value="Combo">Combo</option>
          <option value="Noodles">Noodles</option>
          <option value="Drinks">Drinks</option>
          <option value="AddOns">AddOns</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        Select Image:
        <input 
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="file" 
          placeholder="Select Image"
          className="border px-2 py-2 rounded-sm bg-gray-300 text-center"
        />
      </label>
      <div className="flex items-center gap-3 justify-end mt-6">
        <button 
          onClick={onClose}
          className="border px-3 py-0.5 rounded-sm"
        >
          Cancel
        </button>
        <button 
          onClick={handleAddFood}
          className="border border-orange-500 px-4 py-0.5 rounded-sm bg-orange-500 text-white"
        >
          Add
        </button>
      </div>
    </main>
  )
}