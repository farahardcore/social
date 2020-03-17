import React from "react"
import userPhoto from "../../assets/images/images.jfif";
import s from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        alert("componentDidMount");
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);

            });
    };
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                debugger;
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    };


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i=1;i<=20;i++){
            pages.push(i)
        }
       return <div>
           <div>
               {pages.map(p => {
                    return <span className={this.props.currentPage===p && s.selectedPAge}
                            onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
               })}
           </div>
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
                        <div>{user.name}</div>
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