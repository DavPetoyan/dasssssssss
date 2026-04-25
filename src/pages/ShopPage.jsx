import { useEffect, useState } from "react"
import Header from "../components/Header"
import Card from "../components/Card";

function Shop() {

    const [products,setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products));
    },[])

    return (
        <>
            <Header />
            <div>
                {products.map((e) => <Card  text={e.title} img={e.images[0]}/> )}
            </div>
        </>
    )
}

export default Shop
