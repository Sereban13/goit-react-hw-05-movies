import MovieList from 'components/MovieList/MovieList';
import MovieSearch from 'components/MovieSearch/MovieSearch';

const Movies = () => {
  return (
    <div>
      <MovieSearch />
      {<p>Enter the name of the film</p> || <MovieList />}
    </div>
  );
};

export default Movies;
