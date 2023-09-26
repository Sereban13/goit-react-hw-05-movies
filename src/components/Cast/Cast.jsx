import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrlImg, fetchMoviCast } from 'service/api-movie';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    const MovieCast = async () => {
      setLoading(true);
      try {
        const { cast } = await fetchMoviCast(id);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    MovieCast();
  }, [id]);
  console.log(credits);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {credits.map(({ name, profile_path, character, id }) => (
            <li key={id}>
              <div>
                <img
                  src={`${baseUrlImg}/${profile_path}`}
                  alt={name}
                  width="150px"
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
