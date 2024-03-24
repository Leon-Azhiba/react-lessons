import usr from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                { name: "psychotmg",
                    id: 30991,
                    uniqueUrlName: null,
                    photos: {
                        small: null,
                        large: null
                    },
                    status: null,
                    followed: false
                }
            ]
        )
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small} alt="img" className={usr.userimg} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>Moscow</div>
                        <div>Russia</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;