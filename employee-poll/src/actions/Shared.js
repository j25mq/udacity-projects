import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./Users";
import { receiveQuestions } from "./Questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getIntialData } from "../utils/api";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getIntialData().then(
            ([users, questions]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            }
        );
    };
}