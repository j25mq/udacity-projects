import { users } from "../utils/_DATA";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const GET_AUTHED_USER = "GET_AUTHED_USER";

export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER,
        id,
    };
}

export function getAuthedUser(user){
    return {
        type: GET_AUTHED_USER,
        user,
    };
}

export function handleLogIn(username, password) {
    return (dispatch, getState) => {
        const { users } = getState();
        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!user) {
            return dispatch(setAuthedUser(user));
        }
    };
}
