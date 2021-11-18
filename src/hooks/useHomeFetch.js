import { useState, useEffect, useRef } from 'react';
import API from "../API";

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

  // initial and search
  useEffect(() => {
    setMovies(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  return { movies, loading, error, errorMessage, searchTerm, setSearchTerm };
};