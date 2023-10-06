import Loader from 'components/Loader/Loader';
import { baseUrlImg } from 'service/api-movie';

export const MovieInfo = ({ movie }) => {
  return (
    <div>
      {movie.backdrop_path ? (
        <img src={`${baseUrlImg}/${movie.backdrop_path}`} alt={movie.title} />
      ) : (
        <div>
          <h3>We did not get any poster of this film</h3>
        </div>
      )}

      <h2> {movie.title}</h2>

      <h3>Overview:</h3>
      <p>{movie.overview}</p>
      <h3>Genres: </h3>
      <div>
        {!movie.genres ? (
          <Loader />
        ) : (
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        )}
      </div>
    </div>
  );
};
