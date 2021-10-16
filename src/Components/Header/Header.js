import React from "react";
import "./Header.scss"
import Logo from "../../images/logo.png"
import Bag from "../../images/bag.png"
import User from "../../images/user.png"

const Header = () => {
    return (
        <header className="pt-3 px-4">
            <div className="logo col-2">
                <img className="w-100" src={Logo} alt=""/>
            </div>
            <div className="d-flex ">
                <div className="cart-btn col-3 px-1">
                    <img className="w-100" src={User} alt=""/>
                </div>
                <div className="pro-btn col-3 px-1">
                    <img className="w-100" src={Bag} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header