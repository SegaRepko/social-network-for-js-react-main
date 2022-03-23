import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 13 },
                { id: 2, message: "It's my first post", likesCount: 17 },
                { id: 3, message: 'Lets go make money!!!!', likesCount: 21 },
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: "It's my" },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'Fine' },
                { id: 5, message: 'Goodbye' }
            ],
            dialogsData: [
                { id: 1, name: 'Serezha' },
                { id: 2, name: 'Kate' },
                { id: 3, name: 'Mama' },
                { id: 4, name: 'Papa' },
                { id: 5, name: 'Liza' },
                { id: 6, name: 'Anton' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },



    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель //паттерн 
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}


export default store;
window.store = store;