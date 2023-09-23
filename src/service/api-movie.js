import axios from 'axios';
// import { transformMoviesData } from 'helpers';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8700cb1565a0c17dafc74df6a959ddf1';

export const getBestMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  // const movies = transformMoviesData(data.results);
  return data.results;
  // return movies;
};

// export const fetchMovie = async movieId => {
//   const responce = await axios.get(`/movie/${movieId}?&api_key=${API_KEY}`);
//   // console.log('datas:', data);

//   return responce.data;
// };
// export const fetchMovieByID = async movieID => {
//   const responce = await axios.get(`/movie/${movieID}?api_key=${API_KEY}`);
//   return responce.data;
// };

// export const fetchByRegion = async region => {
//   const { data } = await axios.get(`/region/${region}`);
//   const countries = transformMoviesData(data);

//   return countries;
// };
