import React from "react"
import {
    addNewMessageBodyActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
    dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : ()=>{
            dispatch(addNewMessageBodyActionCreator());
        },
        updateNewMessageBody : (body)=>{
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
};
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;