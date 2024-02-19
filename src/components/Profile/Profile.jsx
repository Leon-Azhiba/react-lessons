import MyPosts from "./MyPosts/MyPosts";
import p from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div className={p.bg}>
                <img src='https://discordhome.com/user_upload/backgrounds/18437background.jpg' />
            </div>
            <div>ava+description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;