import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post';

const MyPosts = () => {
    return(
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
            <div className={s.posts}>
                <Post message="Hi! How are you" like="15"/>
                <Post message="It's my first Post" like="21"/>
            </div>
    </div>)
}

export default MyPosts;