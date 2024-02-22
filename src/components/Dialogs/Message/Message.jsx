import d from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={d.Message}>{props.text}</div>
    )
}

export default Message;