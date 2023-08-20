const QuestionPage = () => {
    
};


export function formatQuestion (tweet, author, authedUser, parentTweet) {

    const { id, likes, replies, text, timestamp } = tweet
    const { name, avatarURL } = author

    return {
        name,
        id,
        timestamp,
        text,
        avatar: avatarURL,
        likes: likes.length,
        replies: replies.length,
        hasLiked: likes.includes(authedUser),
        parent: !parentTweet ? null : {
        author: parentTweet.author,
        id: parentTweet.id,
        }
    }
}

export default QuestionPage;