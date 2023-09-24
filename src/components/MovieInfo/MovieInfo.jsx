import { GoBackBtn } from 'components/GoBackBtn.jsx/GoBackBtn';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { baseUrlImg } from 'service/api-movie';

export const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const backToPreviousLocation = location?.state?.from ?? '/';
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
      <ul>
        <li>
          <Link to={`${routes.MOVIES}/${movie.id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${routes.MOVIES}/${movie.id}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>

      <GoBackBtn path={backToPreviousLocation}>Back Button</GoBackBtn>
    </div>
  );
};
