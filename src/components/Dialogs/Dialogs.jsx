import d from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {dialogsData} from "../../index.js";
import {messagesData} from "../../index.js";

const Dialogs = (props) => {
    let dialogsElements = dialogsData.map(el => <Dialog name={el.name} id={el.id} />);
    let messagesElements = messagesData.map(el => <Message text={el.text} id={el.id} />);
    return (
        <div className={d.Dialogs}>
           <div className={d.DialogsItems}>
                {dialogsElements}
           </div>
           <div className={d.Messages}>
                {messagesElements}
           </div>
        </div>
    )
}

export default Dialogs;