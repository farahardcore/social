import React from 'react'
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    //Тут можно получить кастомых друзей


    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink activeClassName={s.active} to="/users">Users</NavLink>
        </div>
    </nav>
}

export default Navbar;