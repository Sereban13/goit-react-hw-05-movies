import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviReviews } from 'service/api-movie';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    const MovieReviews = async () => {
      try {
        const { results } = await fetchMoviReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    MovieReviews();
  }, [id]);
  console.log(reviews);
  if (!reviews) {
    return;
  }
  return (
    <>
      {loading && <Loader />}
      {!reviews ? (
        <p>We do not find any reviews</p>
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
