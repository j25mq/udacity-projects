import {
    GET_USERS,
    SET_USER_ANSWER,
    UPDATE_USER_QUESTIONS,
} from "../actions/Users";
  
export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return action.users;
    case SET_USER_ANSWER:
        return {
            ...state,
            [action.userId]: {
                ...state[action.userId],
                answers: {
                ...state[action.userId].answers,
                [action.questionId]: action.answer,
                },
            },
        };
    case UPDATE_USER_QUESTIONS:
        return {
            ...state,
            [action.userId]: {
                ...state[action.userId],
                questions: state[action.userId].questions.concat(action.questionId),
            },
        };
    default:
        return state;
    }
}