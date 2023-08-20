import { Link  } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthedUser } from "../actions/AuthedUser";

const NavBar = (props) => {
    const LogOut = () => {
        props.dispatch(getAuthedUser(null));
    };

    if (!props.user) {
        return null
    }

    const userid = props.user.id;
    const username = props.user.name;

    return (
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/add">New Poll</Link>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/" + userid + ".JPG"} alt={`${userid}"s avatar`}/>
                <span>{username}</span>
            </div>
            <Link to="/login">
                <button onClick={LogOut()}>Log Out</button>
            </Link>
        </nav>
    )
};

const mapStateToProps = ({ authedUser, users }) => {
    return { userData: users[authedUser] };
};

export default connect(mapStateToProps)(NavBar);