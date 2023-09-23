// import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { routes } from 'routes';
// import { fetchMovieByID } from 'service/api-movie';
// import { fetchMovie } from 'service/api-movie';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8700cb1565a0c17dafc74df6a959ddf1';
const Movie = () => {
  const { id } = useParams();
  const [findedMovie, setFindedMovie] = useState({});
  // const [loading, setLoading] = useState(false);

  // const location = useLocation();
  // const backToPreviousLocation = location?.state?.from ?? '/';

  const fetchMovieByID = async movieID => {
    const responce = await axios.get(`/movie/${movieID}?api_key=${API_KEY}`);
    return responce.data;
  };
  useEffect(() => {
    // setLoading(true);
    // if (!id) {
    //   return;
    // }
    const findMovie = async () => {
      try {
        const fetchMovieById = await fetchMovieByID(id);
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
  return (
    <main>
      <div>
        <img src={findedMovie.backdrop_path} alt={findedMovie.title} />
        <h2>Title: {findedMovie.title}</h2>
        {/* <p>{findedMovie.genres.join(', ')}</p> */}
        <p>Overview: {findedMovie.overview}</p>
      </div>
      {/* <MovieInfo movie={findedMovie} /> */}
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
    </main>
  );
};

export default Movie;
