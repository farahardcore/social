import React from "react"
import {
    addNewMessageBodyActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => store.dispatch(addNewMessageBodyActionCreator());

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body));
                };
                return <Dialogs sendMessage={onSendMessageClick}
                                updateNewMessageBody={onNewMessageChange}
                                dialogsPage={state}/>
            }
        }

        </StoreContext.Consumer>
    )
};

export default DialogsContainer;