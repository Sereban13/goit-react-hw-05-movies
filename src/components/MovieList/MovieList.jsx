// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { routes } from 'routes';
// import { getBestMovies } from 'service/api-movie';
// import { Container, CardWrapper, ProductName } from './MovieList.Styled';

export const MovieList = ({ movies }) => {
  // const location = useLocation();
  // console.log(movies);
  return (
    <div>
      {movies.map(({ id, title }) => (
        <ul>
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
