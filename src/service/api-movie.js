import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8700cb1565a0c17dafc74df6a959ddf1';
export const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

export const getBestMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data.results;
};

// export const fetchMovieByQuery = async (searchQuery, page) => {
//   const query = searchQuery.slice(14, searchQuery.length);
//   const responce = await axios.get(
//     `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`
//   );
//   return responce.data;
// };
export const fetchMovieByQuery = async searchQuery => {
  // const query = searchQuery.slice(14, searchQuery.length);
  const responce = await axios.get(
    `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&api_key=${API_KEY}`
  );
  return responce.data;
};

export const fetchMovie = async movieId => {
  const responce = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return responce.data;
};

export const fetchMoviCast = async movieId => {
  try {
    const responce = await axios.get(
      `/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
    );
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviReviews = async movieId => {
  try {
    const responce = await axios.get(
      `/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
    );
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
