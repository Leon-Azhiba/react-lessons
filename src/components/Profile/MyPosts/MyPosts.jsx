import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let NewPostElement = React.createRef();
    
    let addNewPost = (props) => {
        let text = NewPostElement.current.value;
        props.AddPost(text);
    }

    return (
    <div className={p.MyPosts}>
        <div className={p.AddPost}>
            <textarea ref={NewPostElement}></textarea>
            <button onClick={ addNewPost }>Add post</button>
        </div>
        <div className={p.posts}>
            {props.posts.postsData.map(el => <Post post={el.post} />)}
        </div>
    </div>
    )
}

export default MyPosts;