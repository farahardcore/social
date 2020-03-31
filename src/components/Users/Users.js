import React from "react"
import userPhoto from "../../assets/images/images.jfif";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../DAL/api";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPAge}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <NavLink to={`profile/`+user.id}>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photo}/>
                        </div>
                    </NavLink>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                props.follow(user.id);
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
            </div>)}
        </div>)
}

export default Users;