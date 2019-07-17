import React from "react"
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <div className={`${s.dialog} ${s.active}`}>
                    User
               </div>
               <div className={`${s.dialog} ${s.active}`}>
                    User
               </div>
               <div className={`${s.dialog} ${s.active}`}>
                    User
               </div>
           </div>
           <div className={s.mesages}>
                <div className={s.message}>messages</div>
                <div className={s.message}>messages</div>
                <div className={s.message}>messages</div>
           </div>

        </div>
    )
}

export default Dialogs;