import UserList from "./UserList";

const MovieCard = ({ users, usersWhoLikedMovie, movieInfo }) => {
  return (
    <div className="movieCard">
      <li key={movieInfo.id}>
        <div>
          <h2 className="movieInfo">{movieInfo.name}</h2>
          {movieInfo.image}
        </div>
        <div className="likedByUsers">
          <h3>Liked By:</h3>
          <UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
        </div>
      </li>
    </div>
  );
};

export default MovieCard;