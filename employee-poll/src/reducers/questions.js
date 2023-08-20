import { ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION} from "../actions/Questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      let optionOne = {...state[action.qid].optionOne}
      let optionTwo = {...state[action.qid].optionTwo}
      if (action.answer === "optionOne") {
        optionOne.votes = optionOne.votes.concat(action.authedUser)
      }
      else{
        optionTwo.votes = optionTwo.votes.concat(action.authedUser)
      }
      return {
        ...state,
        [action.qid]: {...state[action.qid],
            optionOne: optionOne,
            optionTwo: optionTwo
          }
        }
    case ADD_QUESTION:    
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}