export default function SingleCard({ title, img, price, ret, desc, images, rating, category , setSelectImg}) {

    return (
        <>
            <div className="prod w-full flex rounded-3xl">
                <div className="image w-1/2 h-full flex  ">
                    <div className="imgsside  h-full  p-5 rounded-3xl">
                        {images.map((e, i) => <img src={e} key={i} alt="" onClick={() => setSelectImg(e)} className="sideImg h-full object-contain w-40 cursor-pointer" />)}
                    </div>
                    <div className="w-full">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>

                </div>
                <div className="textCard w-1/2 h-full p-5 flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <p className="font-medium text-3xl tracking-[1px] "> {title} </p>
                        <p className="text-black"> ${price} USD </p>
                        <p className="text-black"> <span className="font-bold tracking-[1px] ">Category:</span> {category}  </p>
                        <p className="text-black"> <span className="font-bold tracking-[1px] ">Rating:</span> {rating}  <i class="fas text-yellow-300 text-[14px]  fa-solid fa-star"></i></p>
                        <p className="text-2xl font-normal"> {ret} !</p>
                    </div>
                    <p className="font-bold tracking-[1px] "> {desc} </p>
                </div>
            </div>



            
        </>

    )
}