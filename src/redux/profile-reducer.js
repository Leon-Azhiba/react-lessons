const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let defaultState = {
    postsData: [{post: "Good morning people!", id: 1, likesCount: "24"},{post: "I wish you all luck!!", id: 1, likesCount: "24"}],
    newPostText: ""
}

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
        let newPost = {
            post: state.newPostText,
            id: 4,
            likesCount: 0};
        let stateCopy = {...state};
        stateCopy.postsData = [...state.postsData];
        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
        } 
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;