import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} like={p.likesCount}/> );


    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return(
    <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
    </div>)
}

export default MyPosts;