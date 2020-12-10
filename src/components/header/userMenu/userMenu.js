import './userMenu.css';

const UserMenu = ({profile, updateProfile, myBoards, myPins, logOut})=> {
    return(
        <div className="userMenu_list">
            <ul className="userMenu_list_info">
                <li>{profile}</li>
                <li>{updateProfile}</li>
                <li>{myBoards}</li>
                <li>{myPins}</li>
                <li>{logOut}</li>
            </ul>
        </div>
        )
}

export default UserMenu;