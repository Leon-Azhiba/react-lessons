import d from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let NewMessageElement = React.createRef();
    
    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let text = NewMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    
    return (
        <div className={d.Dialogs}>
           <div className={d.DialogsItems}>
                {props.dialogsData.map(el => <Dialog name={el.name} id={el.id} />)}
           </div>
           <div className={d.Messages}>
                <div>
                    {props.messagesData.map(el => <Message text={el.text} id={el.id} />)}
                </div>
                <div>
                    <div><textarea onChange={onMessageChange} ref={NewMessageElement} value={props.newMessageText} placeholder="Enter your message..." /></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
           </div>
        </div>
    )
}

export default Dialogs;