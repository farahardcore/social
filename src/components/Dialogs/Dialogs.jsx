import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator,
    updateNewMessageActionCreator,} from "../../Redux/state";

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map( m =>  <Message message={m.message}/> );
    let addMessage = () => props.dispatch(addNewMessageActionCreator());
    let updateMessageText = (e)=>{
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    };
    console.log(props);

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
                {messagesElements}
               <textarea
                         onChange={updateMessageText}
                         value={props.state.newMessageText}>
               </textarea>
               <button onClick={addMessage}>SEND</button>
           </div>

        </div>
    )
}

export default Dialogs;