const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {id: 1, userPhoto: 'https://1.bp.blogspot.com/-RjSywlzEFH4/UFZIVMVgE5I/AAAAAAAAA7E/ilKyJJTplJQ/s1600/Avatar%2BHairstyles%2B4.jpg', followed: false, fullName: 'Leon', status: 'Hey there.', location: {city: 'Gudauta', country: 'Abkhazia'}},
        {id: 2, userPhoto: 'https://1.bp.blogspot.com/-RjSywlzEFH4/UFZIVMVgE5I/AAAAAAAAA7E/ilKyJJTplJQ/s1600/Avatar%2BHairstyles%2B4.jpg', followed: true, fullName: 'Neron', status: 'Whats up.', location: {city: 'Gudauta', country: 'Abkhazia'}},
        {id: 3, userPhoto: 'https://1.bp.blogspot.com/-RjSywlzEFH4/UFZIVMVgE5I/AAAAAAAAA7E/ilKyJJTplJQ/s1600/Avatar%2BHairstyles%2B4.jpg', followed: false, fullName: 'Zyaka', status: 'Kulashik.', location: {city: 'Gudauta', country: 'Abkhazia'}},
        {id: 4, userPhoto: 'https://1.bp.blogspot.com/-RjSywlzEFH4/UFZIVMVgE5I/AAAAAAAAA7E/ilKyJJTplJQ/s1600/Avatar%2BHairstyles%2B4.jpg', followed: false, fullName: 'Arzamet', status: 'Oh my.', location: {city: 'Gudauta', country: 'Abkhazia'}}
]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;