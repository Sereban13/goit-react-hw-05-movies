// import { GoBackBtn } from 'components/GoBackBtn.jsx/GoBackBtn';
import Loader from 'components/Loader/Loader';
// import { Suspense } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { routes } from 'routes';
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
          <Loader />
        ) : (
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        )}
      </div>
    </div>
  );
};
