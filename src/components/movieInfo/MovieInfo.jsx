const MovieInfo = ({
  title,
  vote_average,
  overview,
  genres,
  backdrop_path,
}) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
          alt="title"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          <b>User Score:</b> {Math.round(vote_average * 10)}%
        </p>
        <p>
          <b>
            Overview
            <br />
          </b>
          {overview}
        </p>
        <p>
          <b>Genres</b>
          {genres && (
            <ul>
              {genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
