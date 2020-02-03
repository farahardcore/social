import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map( m =>  <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => props.sendMessage();
    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
                {messagesElements}
               <textarea
                         onChange={onNewMessageChange}
                         value={newMessageBody}>
               </textarea>
               <button onClick={onSendMessageClick}>SEND</button>
           </div>

        </div>
    )
}

export default Dialogs;