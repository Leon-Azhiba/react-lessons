import p from "./Post.module.css"

const Post = () => {
    return (
    <div className={p.item}>
        <img src="https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" />
        <p>Post</p>
    </div>
    )
}

export default Post;