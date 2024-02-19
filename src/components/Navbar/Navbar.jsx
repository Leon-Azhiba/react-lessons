import n from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={n.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={n.item}>
                <a href="news">News</a>
            </div>
            <div className={n.item}>
                <a href="banking">Banking</a>
            </div>
            <div className={n.item}>
                <a href="settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;