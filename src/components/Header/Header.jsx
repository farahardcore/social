 import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core/";



const Header = (props) => {
    return (
    <header className={s.header}>
        <div className={s.left}>
            <h5>SPACE Social Network</h5>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div className={props.isAuth ? s.logout : s.login}>{props.login} - <Button variant="outlined" color="primary" href="#outlined-buttons" onClick={props.logout}>Log out</Button> </div>
                : <NavLink to={'/login'}><Button variant="outlined" color="primary">Login</Button></NavLink> }
        </div>

    </header>)
};

export default Header;