import { baseUrlImg } from 'service/api-movie';

export const MovieInfo = ({ movie }) => {
  return (
    <div>
      <img src={`${baseUrlImg}/${movie.backdrop_path}`} alt={movie.title} />
      <h2> {movie.title}</h2>

      <h3>Overview:</h3>
      <p>{movie.overview}</p>
      <h3>Genres: </h3>
      <div>
        {!movie.genres ? (
          <p>Loading...</p>
        ) : (
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        )}
      </div>
    </div>
  );
};
