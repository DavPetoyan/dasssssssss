import { useEffect, useState } from "react"
import Header from "../components/Header"
import Card from "../components/Card";

function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products));
    }, [])

    return (
        <>
            <Header />
            <section className="w-full bg-gray-600">
                <div className="w-360 mx-auto flex flex-wrap gap-8.5 justify-center p-4">
                    {products.map((e) => <Card text={e.title} img={e.images[0]} price={e.price} returnPolicy={e.returnPolicy} />)}
                </div>
            </section>

        </>
    )
}

export default Shop
