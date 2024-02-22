import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsData} from "../../../index";

const MyPosts = () => {
    let postElements = postsData.map(el => <Post message={el.post} />);
    return (
    <div className={p.MyPosts}>
        <div className={p.AddPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            {postElements}
        </div>
    </div>
    )
}

export default MyPosts;