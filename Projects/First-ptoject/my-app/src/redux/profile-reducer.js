import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {

    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 13 },
        { id: 2, message: "It's my first post", likesCount: 17 },
        { id: 3, message: 'Lets go make money!!!!', likesCount: 21 },
    ],
    profile: null,
    status: ""

}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case DELETE_POST: {
            return { ...state, postsData: state.postsData.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })

export const setStatus = (status) => ({ type: 'SET_STATUS', status })

export const deletePost = (postId) => ({ type: 'DELETE_POST', postId })

export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText })

export const savePhotoSuccess = (photos) => ({ type: 'SAVE_PHOTO_SUCCESS', photos })


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        });
}

export const saveProfile = (profile) => (dispatch, getState) => {
    const id = getState().auth.id
    profileAPI.saveProfile(profile)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(id));
            } else {
                dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0]}));
                return Promise.reject(response.data.messages[0]);
            }
        });
}

export default profileReducer;