

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    users : [
        {id: 1 ,followed: true,fullname:"Farid M.", status : "champion" , location: {city:"Minsk",country:"Belarus"}},
        {id: 2 ,followed: true,fullname:"Maksim K.", status : "loh" , location: {city:"Minsk",country:"Belarus"}},
        {id: 3 ,followed: true,fullname:"Vladislav Y.", status : "big data" , location: {city:"Minsk",country:"Belarus"}},
        {id: 4 ,followed: false,fullname:"Masha M.", status : "love" , location: {city:"Minsk",country:"Belarus"}},
    ],
};

const  usersReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default :
            return state;
    }
};
export const addPostActionCreator = () => ({type : ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type : UPDATE_NEW_POST_TEXT , newText : text});

export default usersReducer;

