import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function addQuestion(question) {
    return {
        type: ADD_QUESTION, 
        question,
    };
};

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS, 
        questions,
    };
}

export function answerQuestion(qid, authedUser, answer) {
    return {
        type: ANSWER_QUESTION, 
        qid,
        authedUser,
        answer,
    };
}

export function handleAddQuestion(question) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        question["author"] = authedUser;
        dispatch(showLoading());
        return _saveQuestion(
            question,
        )
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()));
    };
}

export function handleAnswerQuestion({ authedUser, answer, qid}) {
    return (dispatch) => {
        dispatch(handleAnswerQuestion({ authedUser, answer, qid }))
        dispatch(showLoading());
        return _saveQuestionAnswer({ authedUser, answer, qid}).then(
            dispatch(hideLoading())
        )
        .catch((e) => {
            console.log("Error in handleAnswerQuestion.")
            alert("Error - answer. Try again");
        }).then;
    };
}

// export {
//     ADD_QUESTION,
//     RECEIVE_QUESTIONS,
//     ANSWER_QUESTION,
//     addQuestion,
//     receiveQuestions,
//     answerQuestion,
//     handleAddQuestion,
//     handleAnswerQuestion
// };