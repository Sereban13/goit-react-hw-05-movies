// import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Header } from 'components/Header/Header';
import { Home } from 'pages/Home';
import { Movie } from 'pages/Movie';
import { MovieSearch } from 'pages/MovieSearch';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
// import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<MovieSearch />} />
          <Route path={routes.MOVIE_ID} element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
};
