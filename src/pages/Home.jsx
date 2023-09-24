// import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getBestMovies } from 'service/api-movie';

const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBestMovies() {
      // setLoading(true);
      try {
        const response = await getBestMovies();
        setBestMovies([...response]);
        // setLoading(false);
      } catch (error) {
        console.log(error);
        // setLoading(false);
      } finally {
        // setLoading(false);
      }
    }

    fetchBestMovies();
  });
  return (
    <div>
      <h2>Trend Movies</h2>
      {!bestMovies ? <p>Loading...</p> : <MovieList movies={bestMovies} />}
    </div>
  );
};

export default Home;
