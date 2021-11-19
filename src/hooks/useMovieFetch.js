import { useState, useEffect, useCallback } from 'react';
import API from '../API';

export const useMovieFetch = movieId => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovieData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setErrorMessage("");

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      const directors = credits.crew.filter(member => member.job === 'Director');

      setData({
        ...movie,
        actors: credits.cast,
        directors: directors
      });

      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieData();
  }, [movieId, fetchMovieData]);

  return { data, loading, error, errorMessage };
};