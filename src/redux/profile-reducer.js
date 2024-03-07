const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let defaultState = {
    postsData: [{post: "Good morning people!", id: 1, likesCount: "24"},{post: "I wish you all luck!!", id: 1, likesCount: "24"}],
    newPostText: ""
}

const profileReducer = (state = defaultState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            post: state.newPostText,
            id: 4,
            likesCount: 0};
        state.postsData.push(newPost);
        state.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;