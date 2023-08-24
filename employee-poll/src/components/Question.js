// import { connect } from "react-redux";
// import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
// import { receiveQuestions } from "../actions/Questions";

const Question = ({question}) => {

    // console.log("question", question);

    return ( 
        <div>
            <p>{question.optionOne.text}</p>
            <p>
            OR 
            </p>
            <p>{question.optionTwo.text}</p>
            <p>Created by {question.author}</p>
            {/* <img src={process.env.PUBLIC_URL + '/img/' + userId + '.JPG'} alt={`${author}'s avatar`}  />
            <span>
            Created by:{username}
            </span>
            <div className="card">
                <h5 className="card-title">
                    {formatDate(timestamp)}
                </h5>
            </div> */}
            <p>
                <Link to={"/question/id="+question.id}>
                    <button>Show more</button>
                    {question.voted ? "View" : "Vote for this poll"}
                </Link>                
            </p>
        </div>
    );
};

export default Question;