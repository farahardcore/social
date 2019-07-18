import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
                         {id: 1 , name : "Maksim"},
                         {id: 2 , name : "Maks"},
                         {id: 3 , name : "Masha"},
                         {id: 4 , name : "Yo"},
                         {id: 5 , name : "Egor"}
                        ];
    let messages = [
                          {id: 1 , message : "Hi"},
                          {id: 2 , message : "Hello"},
                          {id: 3 , message : "How are you?"},
                          {id: 4 , message : "What are you doing?"},
                          {id: 5 , message : "How much is the fish?"}
                        ];
    let dialogsElements = dialogs.map( d =>  <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map( m =>  <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
                {messagesElements}
           </div>

        </div>
    )
}

export default Dialogs;