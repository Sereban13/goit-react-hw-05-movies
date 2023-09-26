// import Loader from 'components/Loader/Loader';
import Loader from 'components/Loader/Loader';
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
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    }

    fetchBestMovies();
  });
  return (
    <div>
      <h2>Trend Movies</h2>
      {/* {loading && <Loader />} */}
      {!bestMovies ? <Loader /> : <MovieList movies={bestMovies} />}
    </div>
  );
};

export default Home;
