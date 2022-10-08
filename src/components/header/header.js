import React from "react";
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Logo</a>
            <ul>
                <li><a href="#">Bosh sahifa</a></li>
                <li><a href="#">Biz haqimizda</a></li>
                <li><a href="#">Yangiliklar</a></li>
                <li><a href="#">Aloqa</a></li>
            </ul>
            <button className="header__call">So'rov yuborish</button>
        </header>
    )
}


export default Header