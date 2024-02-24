import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
    <div className={p.MyPosts}>
        <div className={p.AddPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            {props.posts.postsData.map(el => <Post post={el.post} />)}
        </div>
    </div>
    )
}

export default MyPosts;