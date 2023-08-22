import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import { receiveQuestions } from "../actions/Questions";

const Question = (props) => {

    const { author, timestamp, id } = props.question;

    if (props.user === undefined) {
        return null
    };

    const username = props.user.name;
    const userId = props.user.id;

    return ( 
        <div>
            <img src={process.env.PUBLIC_URL + '/img/' + userId + '.JPG'} alt={`${author}'s avatar`}  />
            <span>
            Created by:{username}
            </span>
            <div className="card">
                <h5 className="card-title">
                    {formatDate(timestamp)}
                </h5>
            </div>
            <Link to={"/question/id="+id} >
                {props.voted ? "View" : "Vote for this poll"}
            </Link>
        </div>
    );
};

function mapStateToProps({ authedUser, users, questions }, { id }) {

    const question = questions[id];
    
    const user = question ? users[question.author] : null ;

    return {
        question: question,
        user: user
    };
}
  
export default connect(mapStateToProps)(Question);