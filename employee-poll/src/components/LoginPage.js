import { connect } from "react-redux";
import { useState } from "react";
import { handleSetAuthed } from "../actions/AuthedUser";

const LoginPage = (props) => {
    
    const [ selectedUser, setSelectedUser ] = useState(null);

    if (props.authedUser || props.authedUser !== null) {
        return null;
    }

    const handleChange = (id) => {
        setSelectedUser(id)
    };

    const AddAuthed = (e) => {
        props.dispatch(handleSetAuthed(selectedUser))

    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={(e) => AddAuthed(e)}>
                {props.users && Object.keys(props.users).map(id => {
                    return (
                        <div key={id} >
                            <input
                                type="radio"
                                onChange={() => handleChange(id)}
                                value={id} 
                                checked={selectedUser === id ? true: false}
                                data-testid={"checked" + id}
                            />
                            <label
                                onClick={ () => handleChange(id)}
                                data-testid={id}
                            >
                                {props.users[id].id + " - " + props.users[id].name}
                            </label>
                        </div>
                    )
                })}
                <button
                    type="submit"
                    id="submit-btn"
                    disabled={selectedUser === null} 
                    data-testid="submit-btn"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
};

function mapStateToProps({ users ,authedUser }) {
    return {
        users: users,
        authedUser: authedUser
    };
}
  
export default connect(mapStateToProps)(LoginPage);