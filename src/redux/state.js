let state = {
    profilePage: {
        postsData: [{post: "Good morning people!", id: 1, likesCount: "24"},{post: "I wish you all luck!!", id: 1, likesCount: "24"}]
    },
    messagesPage: {
        dialogsData: [{name: "Neron", id: 1},{name: "Arzamet", id: 2},{name: "Ruslan", id: 3},{name: "Leon", id: 4}],
        messagesData: [{text: "Hello bro!", id: 1},{text: "Whats'up maaan!", id: 2},{text: "Yo, bro.", id: 3},{text: "Call me.", id: 4}]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        post: postMessage,
        id: 4,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
}

export default state;