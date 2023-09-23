export const MovieInfo = ({
  movie: { backdrop_path, genres = [], id, overview, title },
}) => {
  return (
    <div>
      <img src={backdrop_path} alt={title} />
      <h2>{title}</h2>
      <p>{genres.join(', ')}</p>
      <p>{overview}</p>
    </div>
  );
};
