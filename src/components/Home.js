import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';

import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

const Home = () => {
  const { movies, loading, error, errorMessage, searchTerm, setSearchTerm } = useHomeFetch();
  console.log(movies);
  return (
    <>
      {!searchTerm && movies.results[0] ?
        <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
            title={movies.results[0].original_title}
            text={movies.results[0].overview}
        />
      : null }
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {movies.results.map(movie => (
          <Thumbnail
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
