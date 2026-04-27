import { Link } from "react-router-dom";

export default function CategoriesBtn({ name, selectCategory, url }) {
    return (
        <>
            <button className="catBtn cursor-pointer text-zinc-400 p-[4px_8px] border rounded-3xl hover:bg-zinc-400 hover:text-white transition-all duration-300" onClick={() => selectCategory(url)}><Link to={"/shop"}>{name}</Link> </button>
        </>
    )
}