export const routes = {
  HOME: '/', //домашня сторінка зі списком популярних кінофільмів.
  MOVIES: '/movies', //компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
  MOVIE_ID: '/movies/:id', // компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
  CAST: '/movies/:id/cast', //компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
  REVIEWS: '/movies/:id/reviews', //компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
};
