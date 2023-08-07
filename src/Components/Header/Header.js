import { NavLink } from "react-router-dom";
import "./Header.css"
import { memo } from "react";

const Header = () => {
    return (
        <header>
            <ul>
                <li> <NavLink to="/" className={(navDate) => navDate.isActive ? "navHov" : "navLink"}> Home</NavLink></li>

                <li><NavLink to="/products" className={(navDate) => navDate.isActive ? "navHov" : "navLink"}>Products</NavLink></li>

                <li><NavLink to="/contact" className={(navDate) => navDate.isActive ? "navHov" : "navLink"}>Contact</NavLink></li>

                <li><NavLink to="/about" className={(navDate) => navDate.isActive ? "navHov" : "navLink"}>About</NavLink></li>

                <li><NavLink to="/blog" className={(navDate) => navDate.isActive ? "navHov" : "navLink"}>Blog</NavLink></li>
            </ul>
        </header>
    );
}

export default memo(Header);