import React from "react"
import userPhoto from "../../assets/images/images.jfif";
import s from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        alert("componentDidMount");
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert("componentDidUpdate");
    }


    render() {
       return <div>
           {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null? user.photos.small : userPhoto } className={s.photo}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
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
   }
}

export default Users;