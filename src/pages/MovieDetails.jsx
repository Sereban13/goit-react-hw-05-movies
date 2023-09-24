import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//
import { fetchMovie } from 'service/api-movie';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { id } = useParams();
  const [findedMovie, setFindedMovie] = useState({});

  useEffect(() => {
    // setLoading(true);
    if (!id) {
      return;
    }
    const findMovie = async () => {
      try {
        const fetchMovieById = await fetchMovie(id);
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

  if (!findedMovie) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <MovieInfo movie={findedMovie} />
    </>
  );
};

export default MovieDetails;
