// import { connect } from "react-redux";
// import { handleInitialData } from "../actions/Shared";

import LoadingBar from "react-redux-loading-bar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

import ErrorPage from "./404";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";

import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import QuestionDetails from "./QuestionDetails";

const App = (props) => {

    const location = useLocation();
    const isUserAuth = props.authedUser !== null;

    function ProtectedRoute({ children }) {
        return isUserAuth ? (
            children
        ) : (
            <Navigate to="/login" replace state={{ path: location.pathname }} />
        );
    }
    return (
        <div>
            <Fragment>
                {!isUserAuth ? null : <NavBar />}
                <LoadingBar/>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            <ProtectedRoute>
                                <Homepage/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/leaderboard"
                        element={
                            <ProtectedRoute>
                                <Leaderboard/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <ProtectedRoute>
                                <NewPoll/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/question/:id"
                        element={
                            <ProtectedRoute>
                                <QuestionDetails/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={<LoginPage/>}
                    />
                    <Route
                        path="*"
                        element={<ErrorPage/>}
                    />
                </Routes>
            </Fragment>
        </div>
    );
};

// const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default App;