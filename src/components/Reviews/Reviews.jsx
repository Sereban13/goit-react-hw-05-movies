import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviReviews } from 'service/api-movie';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    if (!id) {
      return;
    }
    const MovieReviews = async () => {
      try {
        const { results } = await fetchMoviReviews(id);
        setReviews(results);
      } catch (error) {
        setError('Whoops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    MovieReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong</p>}

      {reviews.length === 0 ? (
        <p>We did not find any information</p>
      ) : (
        <div>
          <ul>
            {reviews.map(
              ({ author, author_details: { name }, content, id }) => (
                <li key={id}>
                  <h2>{!name ? author : name}</h2>
                  <h3>Content</h3>
                  <p>{content}</p>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
