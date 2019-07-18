import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [{id: 1 , message : "Hi" , likesCount : 12},
                          {id: 2 , message : "Hello" , likesCount : 14},
                          {id: 3 , message : "It's my first post!" , likesCount : 15},
                          {id: 4 , message : "What do you doing?" , likesCount : 13},
                          {id: 5 , message : "How much is the fish?" , likesCount : 11}];

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
                <Post message={postsData[1].message} like={postsData[1].likesCount}/>
                <Post message={postsData[2].message} like={postsData[2].likesCount}/>
            </div>
    </div>)
}

export default MyPosts;