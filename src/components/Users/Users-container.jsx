import { connect } from "react-redux";
import Users from "./Users";
import { followAC } from "../../redux/users-reducer";
import { unfollowAC } from "../../redux/users-reducer";
import { setUsersAC } from "../../redux/users-reducer";


const MapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer;