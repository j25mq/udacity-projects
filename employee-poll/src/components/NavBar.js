// import { connect } from "react-redux";
// import { getAuthedUser } from "../actions/AuthedUser";
import { Link } from "react-router-dom";
import { handleSetAuthed } from "../actions/AuthedUser"

const NavBar = (props) => {

    const LogOut = (e) => {
        props.dispatch(handleSetAuthed(null)) ;
    };

    if (!props.user) {
      return null
    };

    const userid = props.user.id;
    const username = props.user.name;

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/add">New Poll</Link>
                </li>
                <li>
                    <Link to="/login" onClick={LogOut()}>
                        <button>Log Out</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/" + userid + ".JPG"} alt={`${userid}"s avatar`}/>
                <span>{username}</span>
            </div>
        </nav>
    );
};

export default NavBar;