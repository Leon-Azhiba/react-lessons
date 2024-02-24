import i from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={i.ProfileInfo}>
            <div className={i.bg}>
                <img src='https://discordhome.com/user_upload/backgrounds/18437background.jpg' alt="" />
            </div>
            <div className={i.info}>{props.descr}</div>
        </div>
    )
}

export default ProfileInfo;