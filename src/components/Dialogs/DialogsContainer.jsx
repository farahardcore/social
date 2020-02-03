import React from "react"
import {addNewMessageBodyActionCreator,
    updateNewMessageBodyActionCreator,} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => props.store.dispatch(addNewMessageBodyActionCreator());
    let onNewMessageChange = (body)=>{
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <Dialogs sendMessage={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange}
                 dialogsPage={state}/>
    )
};

export default DialogsContainer;