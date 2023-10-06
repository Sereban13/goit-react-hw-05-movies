import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getBestMovies } from 'service/api-movie';

const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBestMovies() {
      setIsLoading(true);
      try {
        const response = await getBestMovies();
        setBestMovies([...response]);
      } catch (error) {
        setError('Whoops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    }

    fetchBestMovies();
  }, []);

  return (
    <div>
      <h2>Trend Movies</h2>

      {isLoading && <Loader />}

      {error ? (
        <p>Whoops, something went wrong</p>
      ) : (
        <MovieList movies={bestMovies} />
      )}
    </div>
  );
};

export default Home;
