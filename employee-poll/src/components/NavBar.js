import { connect } from "react-redux";
// import { getAuthedUser } from "../actions/AuthedUser";
import { Link } from "react-router-dom";
import { handleSetAuthed } from "../actions/AuthedUser";

const NavBar = (props) => {

    const LogOut = () => {
        {props.dispatch(handleSetAuthed(null))}

        if (props.user != null) {
            props.dispatch(handleSetAuthed(null));
            return null
        }
    };

    const userid = props.user.id;
    const username = props.user.name;

    return (
        <nav>
            <div>Navbar</div>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/new">New Poll</Link>
                </li>
                <li>
                    <Link to="/" onClick={LogOut}>
                        <button>Log Out</button>
                    </Link>
                </li>
            </ul>
            <div>
                <p>Hello {username}!</p>
                <img src={process.env.PUBLIC_URL + "/img/" + userid + ".JPG"} alt={`${userid}"s avatar`}/>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ users, authedUser}) => {
    return { 
        user: users[authedUser]
    };
};

export default connect(mapStateToProps)(NavBar);