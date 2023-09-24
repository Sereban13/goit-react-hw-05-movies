import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrlImg, fetchMoviCast } from 'service/api-movie';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState({});

  useEffect(() => {
    // setLoading(true);
    if (!id) {
      return;
    }
    const MovieCast = async () => {
      try {
        const fetchMovieCast = await fetchMoviCast(id);
        setCredits(fetchMovieCast);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setLoading(false);
      // }
    };
    MovieCast();
  }, [id]);
  console.log(credits.cast);
  // console.log(credits);

  return !credits ? (
    <Loader />
  ) : (
    <>
      {credits.cast.map(({ name, profile_path, character }) => (
        <div>
          <img src={`${baseUrlImg}/${profile_path}`} alt={name} width="150px" />

          <h2>Name: {name}</h2>
          <span>{character}</span>
        </div>
      ))}
    </>
  );
};

export default Cast;
