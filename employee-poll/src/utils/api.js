import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./_DATA.js";

export function getIntialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions,
    }));
}

export function savePoll(poll) {
    return _saveQuestion(poll);
}

export function savePollAnswer(authedUser, qid, answer) {
    _saveQuestionAnswer({
        authedUser,
        qid,
        answer
    });
}