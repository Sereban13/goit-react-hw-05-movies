import { Suspense, useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backToPreviousLocation = location?.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    const findMovie = async () => {
      try {
        const fetchMovieById = await fetchMovie(id);
        setFindedMovie(fetchMovieById);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    findMovie();
  }, [id]);

  if (!findedMovie) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      {loading && <Loader />}
      <MovieInfo movie={findedMovie} />
      <GoBackBtn path={backToPreviousLocation}>Back Button</GoBackBtn>
      <ul>
        <li>
          <Link to={routes.CAST}>Cast</Link>
        </li>
        <li>
          <Link to={routes.REVIEWS}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
