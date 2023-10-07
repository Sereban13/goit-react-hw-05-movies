import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrlImg, fetchMoviCast } from 'service/api-movie';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      return;
    }
    const MovieCast = async () => {
      setIsLoading(true);
      try {
        const { cast } = await fetchMoviCast(id);
        setCredits(cast);
      } catch (error) {
        setError('Whoops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    MovieCast();
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong</p>}

      {credits.length === 0 ? (
        <p>We did not find any information</p>
      ) : (
        <ul>
          {credits.map(({ name, profile_path, character, id }) => (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? `${baseUrlImg}/${profile_path}`
                      : 'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png'
                  }
                  alt={name}
                  width="400px"
                />

                <h2>Name: {name}</h2>
                <span>{character}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
