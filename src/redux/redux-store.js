import { legacy_createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer
})

let store = legacy_createStore(reducers);

export default store;