import { _getUsers, _getQuestions } from "../utils/_DATA";
import { getUsers } from "./Users";
import { receiveQuestions } from "./Questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getIntialData } from "../utils/api";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getUsers(), _getQuestions()]).then(
            ([users, question]) => {
                dispatch(getUsers(users));
                dispatch(receiveQuestions(question));
                dispatch(hideLoading());
            }
        );
    };
}