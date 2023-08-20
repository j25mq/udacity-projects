import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

const QuestionItem = (props) => {
    return (
        <Link  to={`/questions/${props.questionId}`}>
            <h4>{props.questionText}</h4>
            <span>Created by: {props.authorName.name}</span>
            <span>Creation Date: {props.questionDate}</span>
        </Link>
    );
};

const mapStateToProps = ({ questions, users }, { questionId }) => {
    const question = questions[questionId];
    const authorName = users[question.author];
    const questionDate = formatDate(question.timestamp);
    const questionText = `Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`;

    return {
        questionId,
        questionText,
        authorName,
        questionDate
    };
};

export default connect(mapStateToProps)(QuestionItem);