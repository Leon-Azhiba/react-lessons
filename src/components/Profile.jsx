import p from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={p.profile}>
            <div className={p.bg}>
                <img src='https://discordhome.com/user_upload/backgrounds/18437background.jpg' />
            </div>
            <div>ava+description</div>
            <div>
                <h3>My posts</h3>
                <div>new posts</div>
            </div>
            <div className={p.posts}>
                <div className={p.item}>post 1</div>
                <div className={p.item}>post 2</div>
            </div>
        </div>
    )
}

export default Profile;