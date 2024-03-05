import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let NewPostElement = React.createRef();
    
    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
    <div className={p.MyPosts}>
        <div className={p.AddPost}>
            <textarea onChange={ onPostChange } ref={NewPostElement} value={props.newPostText} />
            <button onClick={ addNewPost }>Add post</button>
        </div>
        <div className={p.posts}>
            {props.postsData.map(el => <Post post={el.post} />)}
        </div>
    </div>
    )
}

export default MyPosts;