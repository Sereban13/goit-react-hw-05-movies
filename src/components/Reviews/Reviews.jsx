import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviReviews } from 'service/api-movie';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    // setLoading(true);
    if (!id) {
      return;
    }
    const MovieReviews = async () => {
      try {
        const fetchMovieReviews = await fetchMoviReviews(id);
        setReviews(fetchMovieReviews);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setLoading(false);
      // }
    };
    MovieReviews();
  }, [id]);
  console.log(reviews);
  if (!reviews) {
    return;
  }
  return !reviews ? (
    <Loader />
  ) : (
    <>
      {reviews.result.map(({ author, content }) => (
        <div>
          <h2>{author}</h2>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
