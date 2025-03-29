import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-white px-10 py-4 shadow-2xl sticky top-0 z-50">
        <nav className="flex justify-between">
            <ul className="flex gap-8">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/shop'}>Shop</Link></li>
            </ul>
            <Link to={'/'}>baselessalcohol</Link>
        </nav>
    </header>
  )
}

export default Navbar
