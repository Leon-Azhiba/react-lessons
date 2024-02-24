import d from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={d.Dialogs}>
           <div className={d.DialogsItems}>
                {props.dialogs.dialogsData.map(el => <Dialog name={el.name} id={el.id} />)}
           </div>
           <div className={d.Messages}>
                {props.dialogs.messagesData.map(el => <Message text={el.text} id={el.id} />)}
           </div>
        </div>
    )
}

export default Dialogs;