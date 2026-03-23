import { CircleUser } from "lucide-react";

export default function Header() {
  return(
    <header className="flex justify-between items-center py-4 px-6 border-b h-15 w-full">
      <h1 className="text-xl font-bold ">Dashboard</h1>
      <CircleUser size={30}/>
    </header>
  )
}