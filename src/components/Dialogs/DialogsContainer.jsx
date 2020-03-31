import React from "react"
import {
    addNewMessageBodyActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : ()=>{
            dispatch(addNewMessageBodyActionCreator());
            debugger;
        },
        updateNewMessageBody : (body)=>{
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
};
let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(authRedirectComponent);
export default DialogsContainer;