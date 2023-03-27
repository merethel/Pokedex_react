import "../styles.css"
import { Link, Outlet } from "react-router-dom"

export default function App() {
    return (
        <>
            <nav>
                <Link to="/">Pokemons</Link>
                <Link to="/information">Information</Link>
            </nav>
            <Outlet />
        </>
    )
}