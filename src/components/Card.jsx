import { useState } from "react"
import { Link } from "react-router-dom"

function Card({ img, text, price, returnPolicy, id }) {

  // const [id,setId] = useState(null)


  return (
    <div className="card w-88 p-4 rounded-3xl bg-white">
      <div className="w-full h-1/2 overflow-hidden">
        <Link to={`/single/${id}`}> <img src={img} alt="product" className="w-full h-full object-contain hover:scale-110 transition-all duration-300 cursor-pointer" /></Link>
      </div>
      <div className="w-full h-1/2 p-4 flex flex-col gap-3">
        <p className=" font-bold tracking-[1px] text-[16px]  ">{text}</p>
        <p className="font-medium">${price}</p>
        <p className="font-semibold">Return: {returnPolicy} !</p>
      </div>
    </div>
  )
}

export default Card
