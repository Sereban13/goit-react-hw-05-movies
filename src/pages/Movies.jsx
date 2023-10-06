import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import MovieSearch from 'components/MovieSearch/MovieSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'service/api-movie';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmsByQuery, setFilmsByQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const filmName = searchParams.get('name') ?? '';

  const changeFilmName = name => {
    const newFilmName = name !== '' ? { name } : {};
    setSearchParams(newFilmName);
  };

  useEffect(() => {
    const filmsByQuery = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchMovieByQuery(filmName);
        setFilmsByQuery(results);
      } catch (error) {
        setError('Whoops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    filmsByQuery();
  }, [filmName]);

  console.log(filmsByQuery);

  return (
    <div>
      <MovieSearch onChange={changeFilmName} />

      {isLoading && <Loader />}

      {error ? (
        <p>Whoops, something went wrong</p>
      ) : (
        <MovieList movies={filmsByQuery} />
      )}
    </div>
  );
};

export default Movies;
