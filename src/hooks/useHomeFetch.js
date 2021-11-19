import { useState, useEffect, useRef } from 'react';
import API from "../API";
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm="") => {
    try {
      setError(false);
      setErrorMessage("");
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      setMovies(prev => ({
        ...movies,
        results:
            page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }));
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  // initial usage and search
  useEffect(() => {
    // pull data from session storage if exists
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');
      if (sessionState) {
        setMovies(sessionState);
        return;
      }
    }
    // otherwise fetch data from API
    setMovies(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // load more data
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(movies.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, movies.page]);

  // save data in session storage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem('homeState', JSON.stringify(movies));
    }
  }, [searchTerm, movies]);

  return { movies, loading, error, errorMessage, searchTerm, setSearchTerm, setIsLoadingMore };
};