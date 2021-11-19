import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../hooks/useMovieFetch';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import NoImage from '../images/no_image.jpg';

import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';

const Movie = () => {
  const { movieId } = useParams();
  const { data: movie, loading, error, errorMessage } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>{errorMessage}</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;