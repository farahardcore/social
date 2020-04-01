import React from "react"
import {
    addNewMessageBodyActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);