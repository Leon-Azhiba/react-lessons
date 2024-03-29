import { NavLink } from "react-router-dom";
import d from "./../Dialogs.module.css"

const Dialog = (props) => {
    return (
        <div className={d.Dialog}>
            <NavLink to={"/dialogs/{props.id}"}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;