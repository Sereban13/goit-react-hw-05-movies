import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
//
import Header from 'components/Header/Header';
import Home from 'pages/Home';
import MovieSearch from 'pages/MovieSearch';
import Movie from 'pages/Movie';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
//

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />

          <Route path={routes.MOVIE_ID} element={<Movie />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>

          <Route path={routes.MOVIES} element={<MovieSearch />} />
        </Route>
      </Routes>
    </div>
  );
};
