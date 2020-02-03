import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} like={p.likesCount}/> );


    let onAddPost = () =>{
        props.addPost();
    };
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
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
                <button onClick={ onAddPost }>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
    </div>)
}

export default MyPosts;