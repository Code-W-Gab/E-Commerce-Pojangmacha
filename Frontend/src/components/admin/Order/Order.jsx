import { Box } from "lucide-react"
export default function Order() {
  return(
    <main className="p-4">
      <h1 className="font-bold text-lg">Manage Order</h1>
      <div className="mt-6 border flex justify-between rounded-md px-6 py-4">
        <div className="flex gap-15">
          <div>
          <Box size={80} />
          </div>
          <div className="flex gap-40">
            <div>
              <p>Gabriel Concepcion</p>
              <p>Polangui, Albay</p>
              <p>Uranus St. 081</p>
              <p>09197264496</p>
            </div>
            <div>
              <p>Buldak x 2, Ramen x 3</p>
              <p>Items: 2</p>
              <p>Total: 65 pesos</p>
            </div>
          </div>
        </div>
        <div>
          <select className="border px-2 py-1 rounded-sm bg-amber-300">
            <option value="process">Food Processing</option>
            <option value="deliver">Out of Delivery</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
    </main>
  )
}