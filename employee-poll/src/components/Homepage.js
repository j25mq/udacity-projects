import { connect } from "react-redux";
import Question from "./Question";
import { useState, useEffect } from "react";
// import Navbar from "./NavBar";

const Homepage = (props) => {

    const [ questions, setQuestions ] = useState(props.questions);

    const unAnsweredQuestions = Object.values(questions)
        .filter(
            ({ optionOne, optionTwo }) =>
                !optionOne.votes.includes(props.authedUser) &&
                !optionTwo.votes.includes(props.authedUser)
        )
        .sort((a, b) => b.timestamp - a.timestamp);

    const answeredQuestions = Object.values(questions)
        .filter(
            ({ optionOne, optionTwo }) =>
                optionOne.votes.includes(props.authedUser) &&
                optionTwo.votes.includes(props.authedUser)
        )
        .sort((a, b) => b.timestamp - a.timestamp);

    console.log("unAnsweredQuestions", unAnsweredQuestions);
    console.log("answeredQuestions", answeredQuestions);

    return (
        <div>
            <div>
                New Polls
                <ul>
                    {unAnsweredQuestions.map((question) => (
                        <li key={question.id}>
                            <Question question={question}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                Answered Polls
                <ul>
                    {answeredQuestions.map((question) => (
                        <li key={question.id}>
                            <Question question={question}/>
                        </li>
                    ))}                    
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = ({ questions, authedUser, users }) => {

    const user = users[authedUser];

    const userQuestions = user.questions;

    return {
        questions,
        userQuestions,
        authedUser,
    };
};

export default connect(mapStateToProps)(Homepage);