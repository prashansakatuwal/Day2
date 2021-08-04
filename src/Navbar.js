import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className= "option"to="/">Home </Link>
            <Link className="option" to="/contact"> Contact</Link>
        </div>      
     );
}
export default Navbar;