import usr from './Users.module.css'

const Users = (props) => {
    return (
        <div use={props.users}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.userPhoto} alt="img" className={usr.userimg} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;