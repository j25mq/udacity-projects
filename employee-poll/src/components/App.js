import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import QuestionPage from "./QuestionPage";
import ErrorPage from "./404";

import { handleInitialData } from "../actions/Shared";

import LoadingBar from "react-redux-loading-bar";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, Fragment } from "react";

const App = (props) => {
    useEffect(() => {
        props.dispatch(handleInitialData())
    }, []);
    if (!props.authedUser || props.authedUser in [null, undefined] ) {
        return (props.loading === true ? null : <LoginPage/> )
    }
    return (
        <div>
            <Fragment>
                <LoadingBar/>
                {props.loading === true ? null : 
                    <div id="container">
                        <NavBar/>
                        <Routes>
                            <Route path="/" element={<Homepage/>}/>
                            <Route path="/leaderboard" element={<Leaderboard/>}/>
                            <Route path="/add" element={<NewPoll/>}/>
                            <Route path="/question/:id" element={<QuestionPage/>}/>
                            <Route path="*" element={<ErrorPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </div>
                }
            </Fragment>
        </div>
    );
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(App);