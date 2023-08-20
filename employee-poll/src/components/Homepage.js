import { connect } from "react-redux";
import QuestionItem from "./QuestionItem";
import { useState, useEffect } from "react";

const Homepage = (props) => {

    const [questions, setQuestions] = useState(props.unAnsweredQuestions);

    useEffect(() => {
        const userAddedQuestions = props.userQuestions.filter(
        (question) =>
            !props.unAnsweredQuestions.includes(question) &&
            !props.answeredQuestions.includes(question)
        );
        const defaultList = props.unAnsweredQuestions.concat(userAddedQuestions);
        setQuestions(defaultList);
    }, [props.userQuestions]);

    const showAnsweredPolls = () => {
        setQuestions(props.answeredQuestions);
    };

    const showUnAnsweredPolls = () => {
        setQuestions(props.unAnsweredQuestions);
    };

    return (
        <div>
            <div>
                <button
                    onClick={showAnsweredPolls}
                    data-testid="answered-questions-test-id"
                >
                    Answered Polls
                </button>
                <button
                    onClick={showUnAnsweredPolls}
                    data-testid="unanswered-questions-test-id"
                >
                    UnAnswered Polls
                </button>
            </div>
            <div>
                <ul>
                    {questions.map((questionId) => (
                        <li key={questionId}>
                            <QuestionItem questionId={questionId} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
    const user = users[authedUser];

    const authedUserAnsweredPolls = (user !== null || user !== undefined) && Object.keys(user.answers);

    const answeredQuestions = Object.keys(questions)
    .filter((questionId) => authedUserAnsweredPolls.includes(questionId))
    .sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp;
    });

    const unAnsweredQuestions = Object.keys(questions)
    .filter((questionId) => !authedUserAnsweredPolls.includes(questionId))
    .sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp;
    });

    const userQuestions = user.questions;

    return {
        answeredQuestions,
        unAnsweredQuestions,
        userQuestions
    };
};

export default connect(mapStateToProps)(Homepage);