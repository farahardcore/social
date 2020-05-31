import React from 'react'
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt="" className={s.post_img} src="https://www.vhv.rs/dpng/d/403-4039766_circle-star-circle-star-icon-png-transparent-png.png" />
            { props.message }
            <div>
                <span><img className={s.like} src="https://cdn2.iconfinder.com/data/icons/facebook-ui-colored/48/JD-22-512.png" alt=""/>{ props.like }</span>
            </div>
        </div>
  )
}

export default Post;