import MovieCard from "./MovieCard";

const Dashboard = ({ usersByMovie, users, movies, image }) => {
  const movieCards = Object.keys(movies).map((id) => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));

  return <div id="layout">{movieCards}</div>;
};

export default Dashboard;