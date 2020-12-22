import React from 'react';
import CartIcon from './CartIcon/CartIcon';
import { Link} from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";



const NavBar = ()=>{

    const { count, add } = useCartContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">NavBar</Link>

            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Catalogo">
                    Catalogo
                    </Link>
                    </li>
                </ul>
                <CartIcon count={count}/>
            </div>
        </nav>
        
    );
}

export default NavBar;