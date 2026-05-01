import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesBtn from "./CategoriesBtn";

export default function Header({ inpVal, setInpVal, setCategoryUrl, showSearch = true }) {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(res => setList(res));
    }, [])


    return (
        <header className=' w-full bg-gray-800 p-8 fixed z-2' >
            <div className='max-w-360 mx-auto flex justify-around items-center'>
                <img src="https://st.hzcdn.com/simgs/7bf30efa08d8e18d_3-3347/_.jpg" alt="" className="img w-15 h-15 object-contain rounded-full  scale-[1.3]" />
                <nav>
                    <ul className='flex gap-8 items-center'>
                        {showSearch &&(
                            <input type="text" placeholder="Search product" value={inpVal} onChange={(e) => setInpVal(e.target.value)} className="searchInp  p-[6px_12px] rounded-3xl  border-none outline-none text-white" />
                        )}
                        <li><Link to={"/"} className='text-[#7e7e7e] font-medium tracking-[1px] hover:text-white duration-200 transition-all'>Home</Link> </li>
                        <li><Link to={"/shop"} className='text-[#7e7e7e] font-medium tracking-[1px] hover:text-white duration-200 transition-all'>Shop</Link> </li>
                        <li className="group relative p-[8px_0px] text-[#7e7e7e] font-medium tracking-[1px] hover:text-white duration-200 transition-all "><a href="#">Categories</a>
                            <ul className="drop  hidden  group-hover:flex absolute  top-10 -left-78.5 flex-wrap gap-3 w-160 bg-white rounded-lg  p-4 " >
                                {list.map((e) => <li className="text-center" key={e.slug}><CategoriesBtn name={e.name} selectCategory={() => setCategoryUrl(e.slug)} /></li>)}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}