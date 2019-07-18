import React from 'react'
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.post_img} src="https://www.freeiconspng.com/uploads/shield-marvel-icon-5.jpg" />
            { props.message }
            <div>
                <span>Like: { props.like }</span>
            </div>
        </div>
  )
}

export default Post;