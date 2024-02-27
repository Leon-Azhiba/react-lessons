import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={p.profile}>
            <ProfileInfo descr="Description" />
            <MyPosts profilePage={props.profilePage}
                        addPost={props.addPost}
                        newPostText={props.newPostText}
                        updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile;