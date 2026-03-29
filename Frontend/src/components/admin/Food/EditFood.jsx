import { useEffect, useState } from "react"
import { GetFoodById } from "../../../service/foodService";
import toast from "react-hot-toast";

export default function EditFood({onClose, fetchFood, foodId}) {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetFoodById(foodId)
      .then(res => {
        setFoodName(res.data.FoodName)
        setDescription(res.data.Descriptions)
        setPrice(res.data.Price)
        setCategory(res.data.Category)
        setImageUrl(res.data.Image)
      })
      .catch(err => {
        toast.error("Failed to fetch account.")
        console.log(err)
      })
  }, [foodId])

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl("");
      return;
    }

    const objectUrl = URL.createObjectURL(imageFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);
  
  return(
    <div>
      <main className="bg-white w-100 p-5 rounded-md">
        <h1 className="font-bold text-lg mb-2 text-center tex-t">UPDATE FOOD</h1>
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
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded-sm px-2 py-1">
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
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            type="file"
            accept="image/*"
            className="border px-2 py-2 rounded-sm bg-gray-300 text-center"
          />
        </label>
        {(previewUrl || imageUrl) && (
          <div className="mt-3">
            <p className="mb-1">Image Preview:</p>
            <img
              src={previewUrl || imageUrl}
              alt="Food Preview"
              className="size-20 object-cover rounded-sm border border-gray-400"
            />
          </div>
        )}
        <div className="flex items-center gap-3 justify-end mt-6">
          <button 
            onClick={onClose}
            className="border px-3 py-0.5 rounded-sm"
          >
            Cancel
          </button>
          <button
            className="border border-orange-500 px-4 py-0.5 rounded-sm bg-orange-500 text-white"
          >
            Update
          </button>
        </div>
      </main>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500"></div>
            <p className="mt-4 text-gray-700 font-semibold">Loading...</p>
          </div>
        </div>
      )}
    </div>
  )
}