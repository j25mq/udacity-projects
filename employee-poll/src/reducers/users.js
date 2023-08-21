// import {
//     GET_USERS,
//     SET_USER_ANSWER,
//     UPDATE_USER_QUESTIONS,
// } from "../actions/Users";
import { RECEIVE_USERS }  from "../actions/Users";
import { ANSWER_QUESTION, ADD_QUESTION } from "../actions/Questions";

export default function users(state = {},action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ANSWER_QUESTION:
            let user_answers = state[action.authedUser].answers;
            user_answers[action.qid] = action.answer
            return {
                ...state,
                [action.authedUser] : {...state[action.authedUser],
                    answers: user_answers}
                };
        case ADD_QUESTION:
            const { question } = action
            let user_question = state[question.author].questions.concat(question.id);
            return {
                ...state,
                [question.author]: {...state[question.author],
                    questions: user_question}
            };
        default:
            return state;
    };
}