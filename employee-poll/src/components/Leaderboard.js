// import { useState } from "react";

import { connect } from "react-redux";
import PropTypes  from 'prop-types'; 
import User from "./User";

const Leaderboard = (props) => {
    return (
        <ul>
            {Object.values(props.rankedUsers).map((user, i) => (
                <User ranking={i + 1} userData={user} key={user.id} />
            ))}
        </ul>
    );
};

const mapStateToProps = ({ users }) => {
    const rankedUsers = Object.values(users).sort((user1, user2) => {
        const secondUserRank = Object.keys(user2.answers).length + user2.questions.length;
        const firstUserRank = Object.keys(user1.answers).length + user1.questions.length;
        return secondUserRank - firstUserRank;
    });

    return {
        rankedUsers,
    };
};

export default connect(mapStateToProps)(Leaderboard);


Leaderboard.prototype = {
    rankedUsers: PropTypes.string.isRequired
}