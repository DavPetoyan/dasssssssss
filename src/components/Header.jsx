import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=' w-full bg-pink-300 p-8' >
            <div className='w-[1440px] mx-auto flex justify-around'>
                <h1>Logo</h1>
                <nav>
                    <ul className='flex gap-4'>
                        <li><Link to={"/"} className='hover:text-white text-decoration-underline'>Home</Link> </li>
                        <li><Link to={"/shop"} className='hover:text-white text-decoration-underline'>Shop</Link> </li>
                        <li><Link to={"/contact"} className='hover:text-white text-decoration-underline'>Contact</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}