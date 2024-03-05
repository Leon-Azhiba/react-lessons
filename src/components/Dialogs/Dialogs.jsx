import d from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let NewMessageElement = React.createRef();
    
    let sendNewMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = NewMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
    
    return (
        <div className={d.Dialogs}>
           <div className={d.DialogsItems}>
                {props.dialogs.dialogsData.map(el => <Dialog name={el.name} id={el.id} />)}
           </div>
           <div className={d.Messages}>
                <div>
                    {props.dialogs.messagesData.map(el => <Message text={el.text} id={el.id} />)}
                </div>
                <div>
                    <div><textarea onChange={onMessageChange} ref={NewMessageElement} value={props.dialogs.newMessageText} placeholder="Enter your message..." /></div>
                    <div><button onClick={sendNewMessage}>Send</button></div>
                </div>
           </div>
        </div>
    )
}

export default Dialogs;