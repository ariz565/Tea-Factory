import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    //if no dependency array => useEffect will run after every render
    //if empty dependency array => useEffect will run only once after initial render
    //if dependency array has some value => useEffect will run after initial render and after every render if the value of dependency array changes

    return (
        <div className="header">
            <div className="logo-container">
                <a href="/" className="logo-link">
                <img className="logo" src={LOGO_URL}  /> </a>
                    </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li>Card</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}
                    >
                    {btnNameReact}</button>
                    </ul>
                </div>
                </div>
    );
};

export default Header;