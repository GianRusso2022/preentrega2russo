import CartWidget from "./CartWidget"
import { Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
        <div className="container">
            <a className="navbar-brand" href="#">LosPaseos</a>

            <img src="./logolp.png" alt="Logo LosPaseos" width="70" className='rounded-5' />

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page" href="#">Todos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/collares" className="nav-link" href="#">Collares</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/correas" className="nav-link" href="#">Correas</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
}

export default NavBar;