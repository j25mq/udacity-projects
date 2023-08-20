import { connect } from "react-redux";
import { useState } from "react";
import { handleLogIn } from "../actions/AuthedUser";
import { users } from "../utils/_DATA";

const LoginPage = ({ props, dispatch, users }) => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSelect = (e) => {
        let selectedUser = users.find(user => user.id === e.target.value)
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
                <p>Choose an user among this list:</p>
                <select onChange={handleSelect}>
                    {users.map((user) => (
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
                        type="text"
                        value={username}
                        name="username"
                        id="username"
                        data-testid="username"
                        onChange={handleUsername}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        id="password"
                        data-testid="password"
                        onChange={handlePassword}
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

const mapStateToProps = ({ users}) => ({
    // users: Object.values(users)
});

export default connect(mapStateToProps)(LoginPage);