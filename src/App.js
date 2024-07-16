import React, { useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SearchProvider, SearchContext } from './components/SearchContext';
import Header from './components/Header';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails'; // Import MovieDetails component

const App = () => {
  return (
    <SearchProvider>
      <div className="min-h-screen dark:bg-gray-900 dark:text-gray-100 flex flex-col">
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </SearchProvider>
  );
};

const MainRoutes = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const location = useLocation();

  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname, setSearchTerm]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/toprated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/movie/:id" element={<MovieDetails />} /> {/* Add this route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
