import { NavLink } from "react-router-dom";
import n from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink className={({isActive}) => (isActive ? n.active : n.item)} to="/profile" end>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={({isActive}) => (isActive ? n.active : n.item)} to="/dialogs" end>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={({isActive}) => (isActive ? n.active : n.item)} to="/news" end>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={({isActive}) => (isActive ? n.active : n.item)} to="/banking" end>Banking</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={({isActive}) => (isActive ? n.active : n.item)} to="/settings" end>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;