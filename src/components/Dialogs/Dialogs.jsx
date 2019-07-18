import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to={`/dialogs/${props.id} `}>{props.name}</NavLink>
               </div>
    )
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [{id: 1 , name : "Maksim"},
                         {id: 2 , name : "Maks"},
                         {id: 3 , name : "Masha"},
                         {id: 4 , name : "Yo"},
                         {id: 5 , name : "Egor"}];

    let messagesData = [{id: 1 , message : "Hi"},
                          {id: 2 , message : "Hello"},
                          {id: 3 , message : "How are you?"},
                          {id: 4 , message : "What do you doing?"},
                          {id: 5 , message : "How much is the fish?"}];

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
               <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
               <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
           </div>
           <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
           </div>

        </div>
    )
}

export default Dialogs;