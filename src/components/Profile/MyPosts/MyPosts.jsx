import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utillits/validators/validators";
import {Textarea} from "../../FormControls/FormControls";


let maxLength10 = maxLengthCreator(50);

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>);


    let addPost = (values) => {
        props.addPost(values.newPostBody);
    };
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <AddMessageReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
});

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required,maxLength10]} name="newPostBody" placeholder="new Post"/>
            <button>add Post</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form : "addPostForm"})(AddMessageForm);
export default MyPosts;