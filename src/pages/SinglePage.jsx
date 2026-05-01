import SingleCard from "../components/SingleCard";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ReviewCard from "../components/ReviewCard";
export default function Single() {
    const [product, setProduct] = useState(null)
    const [selectImg, setSelectImg] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setProduct(res)
                setSelectImg(res.images[0])
            });
    }, [])




    if (!product) {
        return <p>Just a minute please</p>;
    }


    return (
        <>

            <section className="w-full pt-40">
                <div className="max-w-360 mx-auto">
                    <SingleCard key={product.id} title={product.title} desc={product.description} price={product.price} img={selectImg} ret={product.returnPolicy} images={product.images} category={product.category} rating={product.rating} setSelectImg={setSelectImg} />
                </div>
            </section>
            <section className="w-full p-6">
                <div className="max-w-360 mx-auto flex items-center  flex-col mt-10">
                    <h1 className="p-10 text-6xl font-bold tracking-[2px] ">Reviews</h1>
                    <div className="w-220 flex flex-wrap  gap-6">
                        {product.reviews.map((e) => <ReviewCard key={e.date} name={e.reviewerName} email={e.reviewerEmail} info={e.comment} rating={e.rating} data={e.date}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}