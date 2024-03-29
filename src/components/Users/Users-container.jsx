import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC } from "../../redux/users-reducer";
import { unfollowAC } from "../../redux/users-reducer";
import { setUsersAC } from "../../redux/users-reducer";
import { setTotalUsersCountAC } from "../../redux/users-reducer";

const MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer;