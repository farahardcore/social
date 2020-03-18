import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://img2.freepng.es/20180331/aye/kisspng-iron-man-captain-america-logo-marvel-cinematic-uni-avengers-5abf62fa369331.0376927015224921542236.jpg"></img>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login/"}>Login</NavLink>}

        </div>
    </header>
}

export default Header;