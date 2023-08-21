// export const GET_USERS ="GET_ALL_USERS";
// export const SET_USER_ANSWER ="GET_USER_ANSWER";
// export const UPDATE_USER_QUESTIONS ="UPDATE_USER_QUESTIONS";

export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}