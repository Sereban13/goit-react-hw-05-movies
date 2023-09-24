import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
//
import { routes } from 'routes';
import { fetchMovie } from 'service/api-movie';
//
import { GoBackBtn } from 'components/GoBackBtn.jsx/GoBackBtn';

import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const Movie = () => {
  const { id } = useParams();
  const [findedMovie, setFindedMovie] = useState({});
  // const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backToPreviousLocation = location?.state?.from ?? '/';

  useEffect(() => {
    // setLoading(true);
    if (!id) {
      return;
    }
    const findMovie = async () => {
      try {
        const fetchMovieById = await fetchMovie(id);
        setFindedMovie(fetchMovieById);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setLoading(false);
      // }
    };
    findMovie();
  }, [id]);

  if (!findedMovie) {
    return <p>Loading ...</p>;
  }
  console.log(findedMovie.genres);

  return (
    <main>
      {/* <div>
        <img
          src={`${baseUrlImg}/${findedMovie.backdrop_path}`}
          alt={findedMovie.title}
        />
        <h2> {findedMovie.title}</h2>

        <h3>Overview:</h3>
        <p>{findedMovie.overview}</p>
        <h3>Genres: </h3>
        <div>
          {!findedMovie.genres ? (
            <p>Loading...</p>
          ) : (
            <p>{findedMovie.genres.map(genre => genre.name).join(', ')}</p>
          )}
        </div>
      </div> */}

      <MovieInfo movie={findedMovie} />

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

      <GoBackBtn path={backToPreviousLocation}>Back Button</GoBackBtn>
    </main>
  );
};

export default Movie;
