import React from 'react'
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
import Friends from './Friends/Friends';

const Navbar = (props) => {
debugger;
  let friendsElement = props.state.friends.map( f => <Friends src={f.src} />);

    return  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink activeClassName={s.active} to="/news">News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink activeClassName={s.active} to="/music">Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
    </div>
    {friendsElement}
  </nav>
}

export default Navbar;