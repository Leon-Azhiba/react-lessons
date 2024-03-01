let store = {
    _state: {
    profilePage: {
        postsData: [{post: "Good morning people!", id: 1, likesCount: "24"},{post: "I wish you all luck!!", id: 1, likesCount: "24"}],
        newPostText: ""},
    messagesPage: {
        dialogsData: [{name: "Neron", id: 1},{name: "Arzamet", id: 2},{name: "Ruslan", id: 3},{name: "Leon", id: 4}],
        messagesData: [{text: "Hello bro!", id: 1},{text: "Whats'up maaan!", id: 2},{text: "Yo, bro.", id: 3},{text: "Call me.", id: 4}]}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')},
    addPost() {
        let newPost = {
            post: this._state.profilePage.newPostText,
            id: 4,
            likesCount: 0}
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)},
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)},
    subscribe(observer) {
        this._callSubscriber = observer}
}
export default store;