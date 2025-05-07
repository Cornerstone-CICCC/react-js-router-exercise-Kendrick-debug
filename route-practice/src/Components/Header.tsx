import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <div>
        <header className="flex justify-between items-center bg-gray-200 p-2 mb-5">
            <div>LOGO</div>
            <nav>
                <menu className="flex gap-4 ">
                    <li> <Link to="/"> Home Page</Link></li>
                    <li> <Link to="/Products">Products</Link> </li>
                    <li> <Link to="/About">About Page </Link> </li>
                    <li> <Link to="Contact-us">Conatact Us</Link></li>
                </menu>
            </nav>
        </header>
    </div>
    </>
  )
}

export default Header