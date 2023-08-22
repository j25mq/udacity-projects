import { connect } from "react-redux";
import Question from "./Question";
import { useState, useEffect } from "react";
import Navbar from "./NavBar";

const Homepage = (props) => {

    const [ questions, setQuestions ] = useState(props.unAnsweredQuestions);

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
        // <div>
        <div>
            <Navbar />
            <button
                onClick={showUnAnsweredPolls}
                data-testid="unanswered-questions-test-id"
            >
                New Polls
                {questions.map((questionId) => (
                    <ul>
                        <li key={questionId}>
                            <Question question={questionId}/>
                        </li>
                    </ul>
                ))}
            </button>
            <button
                onClick={showAnsweredPolls}
                data-testid="answered-questions-test-id"
            >
                Answered Polls
                {questions.map((questionId) => (
                    <ul>
                        <li key={questionId}>
                            <Question questionId={questionId}/>
                        </li>
                    </ul>
                ))}
            </button>
        </div>
        // </div>
    );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
    const user = users[authedUser];

    const authedUserAnsweredPolls = (user !== null || user !== undefined) && Object.keys(user.answers);

    const answeredQuestions = Object.keys(questions)
        .map(k => questions[k])
        .filter((questionId) => authedUserAnsweredPolls.includes(questionId))
        // .sort((a,b) => {
        //     return questions[b].timestamp - questions[a].timestamp;
        // });
        // .sort((a, b) => b.timestamp - a.timestamp)
        .sort((a, b) => {
            return questions[b.id].timestamp - questions[a.id].timestamp;
        });

    const unAnsweredQuestions = Object.keys(questions)
        .map(k => questions[k])
        .filter((questionId) => !authedUserAnsweredPolls.includes(questionId))
        // .sort((a, b) => {
        //     return questions[b].timestamp - questions[a].timestamp;
        // });
        // .sort((a, b) => b.timestamp - a.timestamp)
        .sort((a, b) => {
            return questions[b.id].timestamp - questions[a.id].timestamp;
        });
        
    const userQuestions = user.questions;

    return {
        answeredQuestions,
        unAnsweredQuestions,
        userQuestions
    };
};

export default connect(mapStateToProps)(Homepage);