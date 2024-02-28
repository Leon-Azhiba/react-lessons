let reRenderEntireTree = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        postsData: [{post: "Good morning people!", id: 1, likesCount: "24"},{post: "I wish you all luck!!", id: 1, likesCount: "24"}],
        newPostText: ""
    },
    messagesPage: {
        dialogsData: [{name: "Neron", id: 1},{name: "Arzamet", id: 2},{name: "Ruslan", id: 3},{name: "Leon", id: 4}],
        messagesData: [{text: "Hello bro!", id: 1},{text: "Whats'up maaan!", id: 2},{text: "Yo, bro.", id: 3},{text: "Call me.", id: 4}]
    }
}

export const addPost = () => {
    let newPost = {
        post: state.profilePage.newPostText,
        id: 4,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    reRenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state);
}

export const subscribe = (observer) => {
    reRenderEntireTree = observer;
}


export default state;