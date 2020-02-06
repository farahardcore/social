import React from "react"
import s from './users.module.css'
import * as axios from "axios";
import userPhoto from "./../../assets/images/images.jfif";

let Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
    }
    };
    return <div>
        <button onClick={getUsers}>Get USERS</button>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null? user.photos.small : userPhoto } className={s.photo}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullname}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
            </div>)}
        </div>

};
export default Users;