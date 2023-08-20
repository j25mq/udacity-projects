import { GET_AUTHED_USER, SET_AUTHED_USER } from "../actions/AuthedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;

        case GET_AUTHED_USER:
            return {
                ...state,
                ...action.authedUser
            }
        default:
            return state;
    }
}