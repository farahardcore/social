import React from "react"
import s from "./../Dialogs.module.css"

type Props = {
    message : null | string
}

const Message = (props:Props) => {
    return <div className={s.message}>{props.message}</div>
}



export default Message;