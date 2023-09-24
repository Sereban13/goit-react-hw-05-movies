// import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
// import { getBestMovies } from 'service/api-movie';
// import { Container, CardWrapper, ProductName } from './MovieList.Styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, title }) => (
        <ul>
          <li key={id}>
            <Link to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
              <h3>{title}</h3>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MovieList;
