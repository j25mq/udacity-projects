// const CREATE_QUESTION = "CREATE_QUESTION";
export const RECEIVE_USERS = "RECEIVE_USERS";
// const SAVE_ANSWER = "SAVE_ANSWER";

// const createQuestion = (id, author) => {
//     return {
//         type: CREATE_QUESTION, 
//         id,
//         author,
//     };
// };

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS, 
        users,
    };
};

// const saveAnswer = (qid, userid, answerid) => {
//     return {
//         type: SAVE_ANSWER, 
//         qid: questionid,
//         authedUser: userid,
//         answer: answerid,        
//     };
// };

// export { CREATE_QUESTION, RECEIVE_USERS, SAVE_ANSWER, createQuestion, receiveUsers, saveAnswer };