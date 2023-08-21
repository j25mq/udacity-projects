// import { users } from "../utils/_DATA";
// import HomePage from '../components/Homepage';
export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    };
}
  
export function handleSetAuthed(id) {
    return setAuthedUser(id);
}