import React, { useEffect, useState, useContext } from 'react';
import { fetchMovies } from '../../services/api';
import MovieCard from '../MovieCard';
import { SearchContext } from '../SearchContext';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const fetchedMovies = await fetchMovies('movie/upcoming');
      setMovies(fetchedMovies);
    };

    fetchUpcomingMovies();
  }, []);

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="my-10 dark:bg-gray-900">
      <div className="flex justify-start flex-wrap">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
