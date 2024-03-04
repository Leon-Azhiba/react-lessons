import { NavLink } from "react-router-dom";
import n from "./Navbar.module.css"

const NavItem = (props) => {
    return (
        <div className={n.item}>
            <NavLink className={({isActive}) => (isActive ? n.active : n.item)} to={props.navRef} end>{props.itemName}</NavLink>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <NavItem navRef="/profile" itemName="Profile" />
            <NavItem navRef="/dialogs" itemName="Messages" />
            <NavItem navRef="/news" itemName="News" />
            <NavItem navRef="/callback" itemName="Call Back" />
        </nav>
    )
}

export default Navbar;