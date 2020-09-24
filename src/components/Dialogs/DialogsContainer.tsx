
import {
    addNewMessageBodyActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {DialogsType, MessagesType} from "../../types/types";

type StateType = {
    dialogsPage : {
        dialogs : [DialogsType]
        messages : [MessagesType]
    }

}
let mapStateToProps = (state:StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch:any) => {
    return {
        sendMessage : (newMessageBody:string)=>{
            dispatch(addNewMessageBodyActionCreator(newMessageBody));
            debugger;
        }
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);