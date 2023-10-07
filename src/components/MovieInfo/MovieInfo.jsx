import Loader from 'components/Loader/Loader';
import { baseUrlImg } from 'service/api-movie';

export const MovieInfo = ({ movie }) => {
  return (
    <div>
      <img
        src={
          movie.backdrop_path
            ? `${baseUrlImg}/${movie.backdrop_path}`
            : 'https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png'
        }
        alt={movie.title}
        width="700px"
      />

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
