import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./Users";
import { receiveQuestions } from "./Questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getUsers(), _getQuestions()]).then(
            ([users, question]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(question));
                dispatch(hideLoading());
            }
        );
    };
}