import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";

import { formatDate } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/Questions";

const withRouter = (Screen) => {
    const ScreenWithRouterProp = (props) => {
        const { id }  = useParams();
        const q_id = id.split("=")[1];
        return <Screen {...props} qid={{q_id}}/>;
    };
    return ScreenWithRouterProp;
};
 

const QuestionPage = (props) => {

    const [ selectedOption,setSelectedOption ] = useState( props.userOption ? props.userOption : undefined );
    const navigate = useNavigate();

    useEffect(() => {
        if (props.question === undefined) {
            navigate('/404')
        }
    }, [props.question]);

    if (props.question === undefined) {
        return null;
    };

    const handleChange = option => {
        if (props.userOption === null) {
            setSelectedOption(option);
        }
    };
    
    const statCount = props.statCount;
    const statPer = props.statPer;
     
    const handleAnswer= (e) => {
        // e.preventDefault();
        props.dispatch(handleAnswerQuestion({
            authedUser: props.authedUser,
            qid: props.question.id,
            answer: selectedOption,
        }))
    };

    const { author, timestamp, optionOne, optionTwo } = props.question;
    
    const username = props.user.name;
    const userId = props.user.id;

    return( 
        <div className="card-header">
            <img src={process.env.PUBLIC_URL + '/img/' + userId + '.JPG'} alt={`${author}'s avatar`}/>
            <span>
                Question created by:{username}
            </span>
            <div className="card-body">
                <h2>Would you rather...</h2>
                <form onSubmit={(e) =>handleAnswer(e)}>
                    <input
                        type="radio" 
                        onChange={() => handleChange("optionOne")}
                        disabled={props.userOption !== null}
                        checked={selectedOption === "optionOne" ? true : false} 
                    />
                    <label
                        onClick={ () => handleChange("optionOne") }>
                        {optionOne.text +"- ( Voted: " + statCount.optOneVotesNb + " , " + Math.round(100 * statPer.optOneVotesPer) + " % )"}
                    </label>
                    <span>OR</span> 
                        <input 
                            type="radio"
                            disabled={props.userOption !== null}
                            onChange={()  => handleChange("optionTwo")}
                            checked={selectedOption === "optionTwo" ? true : false} 
                        />
                        <label
                            onClick={ () => handleChange( "optionTwo")}
                        >
                            {optionTwo.text + "- ( Voted: " + statCount.optTwoVotesNb + " , " + Math.round(100 * statPer.optTwoVotesPer) + " % )"} 
                        </label>
                    <button
                        id="submit-question-btn"
                        type="submit" 
                        disabled={props.userOption || !selectedOption} >  
                        SUBMIT
                    </button>
                </form>
            </div>
            <div>
                {formatDate(timestamp)}
            </div>
        </div>
    );
};

function mapStateToProps({ users, questions , authedUser }, props) {
   
   const question = questions[props.qid.q_id];

   if (question) {
        const user = question ? users[question.author] : null ;
        const statCount= {
           optOneVotesNb: question.optionOne.votes.length,
           optTwoVotesNb: question.optionTwo.votes.length,
        }

        let totalVotes = statCount.optOneVotesNb + statCount.optTwoVotesNb;
        
        const statPer = {
            optOneVotesPer: totalVotes === 0 ? 0 : statCount.optOneVotesNb / totalVotes,
            optTwoVotesPer: totalVotes === 0 ? 0 : statCount.optTwoVotesNb /totalVotes,
        }
        
        let userOption = null;
        
        if (question.optionOne.votes.includes(authedUser)) {
            userOption = "optionOne";
        }
        else if (question.optionTwo.votes.includes(authedUser)) {
           userOption = "optionTwo";
        }            
        return {
            authedUser: authedUser,
            question: question,
            user: user,
            statPer,
            statCount,
            userOption: userOption
        };
    } else {
        return {
            authedUser: authedUser,
            question: undefined,
        };
    };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));