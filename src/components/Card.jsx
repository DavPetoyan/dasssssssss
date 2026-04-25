
function Card({img,text}) {
  return (
    <div className="w-80 border-2">
      <div className="w-full h-1/2">
        <img src={img} alt="" className="w-full h-full object-contain"/>
      </div>
      <div className="w-full h-1/2 p-4">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
