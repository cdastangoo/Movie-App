import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { movies, loading, error, errorMessage } = useHomeFetch();
  console.log(movies);
  return <div>Home Page</div>;
};

export default Home;
