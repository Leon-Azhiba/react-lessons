const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE';

let defaultState = {
    dialogsData: [{name: "Neron", id: 1},{name: "Arzamet", id: 2},{name: "Ruslan", id: 3},{name: "Leon", id: 4}],
    messagesData: [{text: "Hello bro!", id: 1},{text: "Whats'up maaan!", id: 2},{text: "Yo, bro.", id: 3},{text: "Call me.", id: 4}],
    newMessageText: ""
}

const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, text: text}],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;