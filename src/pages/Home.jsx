import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getBestMovies } from 'service/api-movie';

export const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);

  useEffect(() => {
    async function fetchBestMovies() {
      try {
        const response = await getBestMovies();
        setBestMovies([...response]);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBestMovies();
  });
  return (
    <div>
      <MovieList movies={bestMovies} />
    </div>
  );
};
