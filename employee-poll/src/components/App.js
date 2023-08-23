import { connect } from "react-redux";
import { handleInitialData } from "../actions/Shared";

import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import { useEffect, Fragment } from "react";

import ErrorPage from "./404";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";

import Homepage from "./Homepage";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import QuestionPage from "./QuestionPage";

// import { Dispatch } from "react";
// import { useDispatch } from "react-redux";

// const App = (props) => {

//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         dispatch(handleInitialData())
//     }, []);

//     if (!props.authedUser || props.authedUser in [null, undefined]) {
//         return (
//             props.loading === true ?  null : <LoginPage/>
//         )
//     }

//     return (
//         <div>
//             <Fragment>
//                 <LoadingBar/>
//                 {props.loading === true ? null :
//                     <div id="container">
//                         <NavBar/>
//                             <Routes>
//                             <Route
//                                 path="/"
//                                 exact
//                                 element={<Homepage/>}
//                             />
//                             <Route
//                                 path="/leaderboard"
//                                 element={<Leaderboard/>}
//                             />
//                             <Route
//                                 path="/add"
//                                 element={<NewPoll/>}
//                             />
//                             <Route
//                                 path="/question/:id"
//                                 element={<QuestionDetails/>}
//                             />
//                             <Route
//                                 path="/login"
//                                 element={<LoginPage/>}
//                             />
//                             <Route
//                                 path="*"
//                                 element={<ErrorPage/>}
//                             />
//                         </Routes>
//                     </div>
//                 }
//             </Fragment>
//         </div>
//     );
// };

const App = (props) => {

    useEffect (() => {
        props.dispatch(handleInitialData())
    },[]);
  
    if (!props.authedUser || props.authedUser in [ null,undefined ] ) {
        return ( props.loading === true ? null : <LoginPage/>   
     )
    }
   return (
        <div>
            <Fragment>
                <LoadingBar/>
                {props.loading === true ? null :
                    <div id="container">
                        <NavBar/>
                        <Routes>
                            <Route path="/" exact element={<Homepage/>}/> 
                            <Route path="/leaderboard" element={<Leaderboard/>} />
                            <Route path="/new" element={<NewPoll/>}/>
                            <Route path="/question/:id"  element={<QuestionPage/>}/> 
                            <Route path="*" exact element={<ErrorPage/>} />
                        </Routes>
                    </div>
                }
            </Fragment>
        </div>
    );
};

// const mapStateToProps = ({ authedUser }) => ({ authedUser });

const mapStateToProps = ({ authedUser, users }) => ({
    loading: !users,
    authedUser: authedUser,
});

export default connect(mapStateToProps)(App);