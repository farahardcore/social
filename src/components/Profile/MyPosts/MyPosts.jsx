import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.posts.map( p => <Post message={p.message} like={p.likesCount}/> );

    return(
    <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
    </div>)
}

export default MyPosts;