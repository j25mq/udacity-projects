import PropTypes from 'prop-types';

const User = ({ userData, ranking }) => {
    return (
        <div>
            <div>
                <img
                    src={
                        "https://gravatar.com/avatar/984cd6ea2ab7a97be50364e928f88986?s=400&d=robohash&r=x"
                    }
                    alt={`user's avatarr`}
                    className="avatar"
                />
            </div>
            <div>
                <h4>{`Name: ${userData.name}`}</h4>
                {ranking ? <span>{`Your ranking: ${ranking}`}</span> : false}
                <span>
                    {`You asked ${userData.questions.length} question(s).`}
                    </span>
                <span>
                    {`You answered to ${Object.keys(userData.answers).length} question(s).`}
                </span>
            </div>
        </div> 
    );
};

User.propTypes = {
    userData: PropTypes.object.isRequired,
    ranking: PropTypes.number.isRequired
}

export default User;