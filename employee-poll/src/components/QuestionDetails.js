import { connect } from "react-redux";
import User from "./User";
import { useState, useEffect } from "react";
import { withRouter } from "../utils/helpers";
import { setUserAnswer } from "../actions/Users";
import ErrorPage from "./404";

const QuestionDetails = (props) => {
 
    const [myAnswer, setMyAnswer] = useState(null);

    const currentQuestion = props?.questions[props.questionId];
    const QuestionAuthor = props?.users[currentQuestion?.author];

    const authedUserData = props?.users[props?.authedUser];
    const answered = Object.keys(authedUserData?.answers).includes(currentQuestion?.id);

    useEffect(() => {
        const answersMap = new Map();
        if (answered) {
            for (const [key, value] of Object.entries(authedUserData.answers)) {
                answersMap.set(key, value);
            }
        }
        const userAnswer = answersMap.get(currentQuestion?.id);
        setMyAnswer(userAnswer);
    }, [authedUserData?.answers, answered, currentQuestion?.id]);

    const totalNumberOfVotes = currentQuestion?.optionOne.votes.length + currentQuestion?.optionTwo.votes.length;

    const optionOneVotesPercentage = Math.round(
        (currentQuestion?.optionOne.votes.length / totalNumberOfVotes) * 100
    );

    const optionTwoVotesPercentage = Math.round(
        (currentQuestion?.optionTwo.votes.length / totalNumberOfVotes) * 100
    );

    const handleAnswerChange = (e) => {
        if (answered) {
            return
        };
        props.setUserAnswer(props.authedUser, props.questionId, e.target.value);
    };

    if (props.error) {
        return (<ErrorPage/>)
    }

    return (
        <div>
            <div>
                <User userData={QuestionAuthor} />
            </div>
            <div>
                <h3>Would you Rather...</h3>
                <input
                    onChange={handleAnswerChange}
                    checked={answered && myAnswer === "optionOne"}
                    type="checkbox"
                    value="optionOne"
                    id="optionOne"
                />
                <span>
                    {currentQuestion?.optionOne.text}
                </span>
                {answered ? (
                    <span>
                        , answered by {currentQuestion?.optionOne.votes.length} users,{" "}
                        {optionOneVotesPercentage}% of all users
                    </span>
                ) : (
                    false
                )}
                <input
                    onChange={handleAnswerChange}
                    type="checkbox"
                    checked={answered && myAnswer === "optionTwo"}
                    value="optionTwo"
                    id="optionTwo"
                />
                <span>
                    {currentQuestion?.optionTwo.text}
                </span>
                {answered ? (
                    <span>
                        , answered by {currentQuestion?.optionTwo.votes.length} users,{" "}
                        {optionTwoVotesPercentage}% of all users{" "}
                    </span>
                ) : (
                    false
                )}
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserAnswer: (userId, questionId, answer) => dispatch(setUserAnswer(userId, questionId, answer)),
    };
};

const mapStateToProps = ({ users, questions, authedUser }, props) => {
    const questionId = props.router.params.id;
    const error = !Object.keys(questions).includes(questionId);
    return {
        questionId,
        questions,
        users,
        authedUser,
        error
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)
);