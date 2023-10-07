import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
//
import { fetchMovie } from 'service/api-movie';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { routes } from 'routes';
import { GoBackBtn } from 'components/GoBackBtn.jsx/GoBackBtn';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [findedMovie, setFindedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkHref = useRef(location?.state?.from ?? `${routes.MOVIES}`);

  useEffect(() => {
    setIsLoading(true);
    if (!id) {
      return;
    }
    const findMovie = async () => {
      try {
        const fetchMovieById = await fetchMovie(id);
        setFindedMovie(fetchMovieById);
      } catch (error) {
        setError('Whoops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    findMovie();
  }, [id]);

  if (!findedMovie) {
    return;
  }
  return (
    <>
      {isLoading && <Loader />}

      <GoBackBtn to={backLinkHref.current}>Go Back</GoBackBtn>

      {error ? (
        <p>Whoops, something went wrong</p>
      ) : (
        <MovieInfo movie={findedMovie} />
      )}

      <ul>
        <li>
          <Link to={routes.CAST}>Cast</Link>
        </li>
        <li>
          <Link to={routes.REVIEWS}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
