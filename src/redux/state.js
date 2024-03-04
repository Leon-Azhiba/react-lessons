const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
    profilePage: {
        postsData: [{post: "Good morning people!", id: 1, likesCount: "24"},{post: "I wish you all luck!!", id: 1, likesCount: "24"}],
        newPostText: ""},
    messagesPage: {
        dialogsData: [{name: "Neron", id: 1},{name: "Arzamet", id: 2},{name: "Ruslan", id: 3},{name: "Leon", id: 4}],
        messagesData: [{text: "Hello bro!", id: 1},{text: "Whats'up maaan!", id: 2},{text: "Yo, bro.", id: 3},{text: "Call me.", id: 4}],
        newMessageText: ""}
    },
    _callSubscriber() {
        console.log('State changed')},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer},

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                post: this._state.profilePage.newPostText,
                id: 4,
                likesCount: 0};
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                text: this._state.messagesPage.newMessageText,
                id: 5};
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessagetActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;