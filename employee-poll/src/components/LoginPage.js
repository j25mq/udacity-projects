import { users } from "../utils/_DATA";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { handleLogIn, handleSetAuthedUser } from "../actions/AuthedUser";

const LoginPage = () => {
    
    // const users = useSelector(state => state);
    const dispatch = useDispatch();

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const keys = Object.keys(users);
    const usersList = keys.map(key => users[key]); 

    // console.log(Object.keys(usersList)); 

    const handleSelect = (e) => {
        let selectedUser = e.target.value;
        // let selectedUser = users.find(user => user.id === e.target.value)
        if (selectedUser) {
            setUsername(selectedUser.id)
            setPassword(selectedUser.password)
            handleSetAuthedUser(selectedUser)
        }
        console.log(selectedUser);
    };
    // console.log(selectedUser);

    const handleSubmit = (e) => {
        dispatch(handleLogIn(username, password));
        // setUsername("");
        // setPassword("");
    };

    const handleUsername = (e) => {
        // handleSetAuthedUser(selectedUser)
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
                <select onChange={handleSelect}>
                    {usersList.map((user) => (
                        <option key={user.id}>
                            {user.id}
                        </option>
                    ))}
                </select>
                <form onChange={handleSubmit}>
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
                        data-testid="submit-btn-test"
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