import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div className={p.MyPosts}>
        <div className={p.AddPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            <Post message="Hey, how are you?" />
            <Post message="I'm so tired." />
        </div>
    </div>
    )
}

export default MyPosts;