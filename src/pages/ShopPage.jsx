import { useEffect, useState } from "react"
import Header from "../components/Header"
import Card from "../components/Card";

function Shop() {

    const [products, setProducts] = useState([])
    const [inpValue, setInpValue] = useState("")
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products));
    }, [])

    const [categoryUrl, setCategoryUrl] = useState(null)


    useEffect(() => {
        let url = "https://dummyjson.com/products"

        if (categoryUrl) {
            url = `https://dummyjson.com/products/category/${categoryUrl}`
        }

        if (inpValue) {
            url = `https://dummyjson.com/products/search?q=${inpValue}`
        }

        fetch(url)
            .then(res => res.json())
            .then(res => setProducts(res.products));

    }, [inpValue, categoryUrl])

    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
        clearTimeout(timerId)
        setTimerId(
            setTimeout(() => {
                fetch(`https://dummyjson.com/products/search?q=${inpValue}`)
                    .then(res => res.json())
                    .then(res => setProducts(res.products));
            }, 1000))
    }, [inpValue])


    if (!products.length) {
        return (
            <>
                <Header setInpVal={setInpValue} inpVal={inpValue} setCategoryUrl={setCategoryUrl} />
                <p className="font-bold pt-50 pl-10"> <span className="text-red-500">"{inpValue}"</span> Anunov Product Chunenq !</p>
            </>

        )
    }

    return (
        <>
            <Header setInpVal={setInpValue} inpVal={inpValue} setCategoryUrl={setCategoryUrl} />
            <section className="w-full border-b border-gray-400 border-dashed pt-50">
                <div className="max-w-360 mx-auto flex flex-wrap gap-8.5 justify-center ">
                    {products.map((e) => <Card text={e.title} key={e.id} img={e.images[0]} price={e.price} returnPolicy={e.returnPolicy} id={e.id}/>)}
                </div>
            </section>


        </>
    )
}

export default Shop
