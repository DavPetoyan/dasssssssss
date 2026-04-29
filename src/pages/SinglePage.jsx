import SingleCard from "../components/SingleCard";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
export default function Single() {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res));
    }, [id])



    if (!id) {
        return <p>Chexav e</p>
    }

    if (!product) {
        return <p>Just a minute please</p>;
    }


    return (
        <>

            <section className="w-full pt-40">
                <div className="max-w-360 mx-auto">
                    <SingleCard key={product.id} title={product.title} desc={product.description} price={product.price} img={product.images?.[0]} ret={product.returnPolicy} images={product.images} category={product.category} rating={product.rating} />
                    
                </div>
            </section>
        </>
    )
}