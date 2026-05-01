import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {

    const location = useLocation()
    const hideSearch = location.pathname === "/" ||
        location.pathname.includes("/single/");
    return (
        <>
            <Header showSearch={!hideSearch} />
            <main>
                <Outlet />
            </main>
        </>
    )
}