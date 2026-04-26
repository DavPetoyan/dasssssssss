import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=' w-full bg-gray-600 p-8' >
            <div className='w-360 mx-auto flex justify-around items-center'>
                <h1 className="logo text-[30px] tracking-[3px] text-white">Logo</h1>
                <nav>
                    <ul className='flex gap-8 items-center'>
                        <input type="text" placeholder="Search product" className="searchInp  p-[6px_12px] rounded-3xl  border-none outline-none"/>
                        <li><Link to={"/"} className='font-medium tracking-[1px] hover:text-white duration-200 transition-all'>Home</Link> </li>
                        <li><Link to={"/shop"} className='font-medium tracking-[1px] hover:text-white duration-200 transition-all'>Shop</Link> </li>
                        <li><Link to={"/contact"} className='font-medium tracking-[1px] hover:text-white duration-200 transition-all'>Contact</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}