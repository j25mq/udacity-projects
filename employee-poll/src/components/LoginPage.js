// import { users } from "../utils/_DATA";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { handleLogIn } from "../actions/AuthedUser";

const LoginPage = (props) => {
    
    const users = useSelector(state => state);
    const dispatch = useDispatch();

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const usersList = Object.keys(users).map((key) => (
        <option>
            {users[key]}
        </option>
    ));
    console.log(Object.keys(usersList)); 

    const handleSelect = (e) => {
        let selectedUser = e.target.value;
        // let selectedUser = users.find(user => user.id === e.target.value)
        if (selectedUser) {
            setUsername(selectedUser.id)
            setPassword(selectedUser.password)
        }
    };

    const handleSubmit = (e) => {
        dispatch(handleLogIn(username, password));
        setUsername("");
        setPassword("");
    };

    const handleUsername = (e) => {
        let value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        let value = e.target.value;
        setPassword(value);
    };

    return (
        <div>
            Log in
            <div>
                <p>Choose a user among this list:</p>
                {usersList}
                <select onChange={handleSelect}>
                    {props.users && Object.keys(props.users).map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        onChange={handleUsername}
                        type="text"
                        value={username}
                        name="username"
                        id="username"
                        data-testid="username"
                    />
                    <label>Password</label>
                    <input
                        onChange={handlePassword}
                        type="password"
                        value={password}
                        name="password"
                        id="password"
                        data-testid="password"
                    />
                    <button
                        type="submit"
                        data-testid="submit-btn"
                        id="submit-btn"
                    >
                        Login
                    </button>
                </form>                
            </div>
        </div>
    );
};

// const mapStateToProps = ({ users}) => ({
    // users: Object.values(users)
// });

export default LoginPage;