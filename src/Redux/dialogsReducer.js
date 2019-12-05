const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

const  dialogsReducer = (state ,action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messages.push(newMessage)
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default :
            return state;
    }
};
export const addNewMessageActionCreator = () => ({type : ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (text) =>
    ({type : UPDATE_NEW_MESSAGE , newText : text});
export default dialogsReducer;
