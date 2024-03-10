import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let NewPostElement = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
    <div className={p.MyPosts}>
        <div className={p.AddPost}>
            <textarea onChange={ onPostChange } ref={NewPostElement} value={props.newPostText} />
            <button onClick={ onAddPost }>Add post</button>
        </div>
        <div className={p.posts}>
            {props.postsData.map(el => <Post post={el.post} />)}
        </div>
    </div>
    )
}

export default MyPosts;