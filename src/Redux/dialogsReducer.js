const ADD_NEW_MESSAGE_BODY = "ADD_NEW_MESSAGE_BODY";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
let inititalState = {
    dialogs : [
        {id: 1 , name : "Maksim"},
        {id: 2 , name : "Maks"},
        {id: 3 , name : "Masha"},
        {id: 4 , name : "Yo"},
        {id: 5 , name : "Egor"}
    ],
    messages : [
        {id: 1 , message : "Hi"},
        {id: 2 , message : "Hello"},
        {id: 3 , message : "How are you?"},
        {id: 4 , message : "What are you doing?"},
        {id: 5 , message : "How much is the fish?"}

    ],
    newMessageText : ""
}
const  dialogsReducer = (state = inititalState ,action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE_BODY:
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
export const addNewMessageBodyActionCreator = () => ({type : ADD_NEW_MESSAGE_BODY});
export const updateNewMessageBodyActionCreator = (text) =>
    ({type : UPDATE_NEW_MESSAGE , newText : text});
export default dialogsReducer;
