import React from "react"
import s from './users.module.css'

let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://upload.wikimedia.org/wikipedia/ru/c/cc/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9_%D0%9F%D0%B8%D1%87%D1%83%D0%BB.jpg",
                followed: true,
                fullname: "Farid M.",
                status: "champion",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Wassyl_Slipak_24_ao%C3%BBt_2014.jpg",
                followed: true,
                fullname: "Maksim K.",
                status: "loh",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: "https://pravlife.org/sites/default/files/field/image/15-2.jpg",
                followed: true,
                fullname: "Vladislav Y.",
                status: "big data",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 4,
                photoUrl: "https://instagrammi.ru/wp-content/uploads/vasiliy-pospelov.jpg",
                followed: false,
                fullname: "Masha M.",
                status: "love",
                location: {city: "Minsk", country: "Belarus"}
            },]);
    }
    debugger;
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={s.photo}/>
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
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )

};
export default Users;