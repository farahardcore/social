import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, required} from "../../utillits/validators/validators";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d =>  <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map( m =>  <Message key={m.id} message={m.message}/> );
    // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    };
    if(!props.isAuth) return <Redirect to={`/login`}/>;
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
           </div>
        </div>
    )
};
const maxLengthForMessage = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required , maxLengthForMessage]} name="newMessageBody" placeholder="new message"/>
            <button>SEND</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form : "dialogMessageForm"})(AddMessageForm);

export default Dialogs;