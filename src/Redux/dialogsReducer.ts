import {DialogsType, MessagesType } from "../types/types";

const ADD_NEW_MESSAGE_BODY = "ADD_NEW_MESSAGE_BODY";


let inititalState = {
    dialogs: [
        {id: 1, name: "Maksim"},
        {id: 2, name: "Maks"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Yo"},
        {id: 5, name: "Egor"}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "What are you doing?"},
        {id: 5, message: "How much is the fish?"}

    ] as Array<MessagesType>,
}
export type InitialStateType = typeof inititalState;
const dialogsReducer = (state = inititalState, action: any):InitialStateType => {
    switch (action.type) {

        case ADD_NEW_MESSAGE_BODY:
            let newMessage = {
                id: 7,
                message: action.newMessageBody
            };
            return  {
                ...state,
                messages: [...state.messages, newMessage],
            };

        default:
            return state;
    }
};
type AddNewMessageBodyType = {
    type : typeof ADD_NEW_MESSAGE_BODY
    newMessageBody : string
}
export const addNewMessageBodyActionCreator = (newMessageBody : string):AddNewMessageBodyType => ({type: ADD_NEW_MESSAGE_BODY, newMessageBody});

export default dialogsReducer;
