// import { useState } from "react";

import { connect } from "react-redux";
// import PropTypes  from 'prop-types'; 
// import User from "./User";

const Leaderboard = (props) => {
    return (
        <div>
            <h1>Leaderboard</h1>
            <table id="table">
                <thead className="head-light" >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Users</th>
                        <th scope="col">Answers</th>
                        <th scope="col">Questiosn</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user_ids.map((id, i) =>
                    <tr>
                        <th scope="row" key={i}>
                            {i}
                        </th>
                        <td>
                            <img src={process.env.PUBLIC_URL + '/img/' +  props.users[id].id + '.JPG'} alt={`${ props.users[id].id}'s avatar`}  />
                            <span>
                                {props.users[id].name}
                            </span>
                        </td>
                        <td>
                            {Object.keys(props.users[id].answers).length}
                        </td>
                        <td>
                            {props.users[id].questions.length}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({users}) => {
    const usersIds = Object.keys(users).sort((a,b) => 
        Object.keys(users[b].answers).length -  Object.keys(users[a].answers).length)
        console.log(usersIds)
        return { 
            user_ids: usersIds,
            users: users
    };
};

// const rankedUsers = Object.values(users).sort((user1, user2) => {
//     const secondUserRank = Object.keys(user2.answers).length + user2.questions.length;
//     const firstUserRank = Object.keys(user1.answers).length + user1.questions.length;
//     return secondUserRank - firstUserRank;
// });

export default connect(mapStateToProps)(Leaderboard);