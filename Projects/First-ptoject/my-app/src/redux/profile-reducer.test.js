import profileReducer from "./profile-reducer"
import { addPostActionCreator, deletePost } from "./profile-reducer"



test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("yo yo yo");
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 13 },
            { id: 2, message: "It's my first post", likesCount: 17 },
            { id: 3, message: 'Lets go make money!!!!', likesCount: 21 }
        ]
    };
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(4);
});

it('after deleting length of message should be decrement', () => {
    //1. test data
    let action = deletePost(1);
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 13 },
            { id: 2, message: "It's my first post", likesCount: 17 },
            { id: 3, message: 'Lets go make money!!!!', likesCount: 21 }
        ]
    };
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(2);
});
 
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000);
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 13 },
            { id: 2, message: "It's my first post", likesCount: 17 },
            { id: 3, message: 'Lets go make money!!!!', likesCount: 21 }
        ]
    };
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
});


