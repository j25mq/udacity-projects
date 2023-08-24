// import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/Questions";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import Homepage from "./Homepage";

const NewPoll = ({ dispatch, authedUser }) => {

    const navigate = useNavigate();
  
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");
  
    const handleOptionOne = (e) => {
        const text = e.target.value;
        setOptionOneText(text);
    };
  
    const handleOptionTwo = (e) => {
        const text = e.target.value;
        setOptionTwoText(text);
    };
  
    const saveNewPoll = () => {
        const newPoll = {
            author: authedUser,
            optionOneText: optionOneText,
            optionTwoText: optionTwoText,
        };
  
        dispatch(handleAddQuestion(newPoll));
        setOptionOneText("");
        setOptionTwoText("");
        navigate("/");
    };
  
    const validInputs = optionOneText === null || optionOneText === "" || optionOneText === undefined || optionTwoText === null || optionTwoText === "" || optionTwoText === undefined;
  
    return (
        <div>
            <form onSubmit={saveNewPoll}>
                <h3>Would you rather...</h3>
                <label>
                    Option One:
                    <textarea
                        onChange={handleOptionOne}
                        value={optionOneText}
                        placeholder="Enter first option here..."
                    />
                </label>
                <label>
                    Option Two:
                    <textarea
                        onChange={handleOptionTwo}
                        value={optionTwoText}
                        placeholder="Enter second option here..."
                    />
                </label>
                <input
                    disabled={validInputs}
                    type="submit"
                    value={"Add new question"}
                />
            </form>
        </div>
    );
};

export default NewPoll;