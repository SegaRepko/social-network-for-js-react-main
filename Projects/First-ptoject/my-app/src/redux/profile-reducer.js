const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 13 },
        { id: 2, message: "It's my first post", likesCount: 17 },
        { id: 3, message: 'Lets go make money!!!!', likesCount: 21 },
    ],
    newPostText: ''

}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return { 
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { 
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })


export default profileReducer;