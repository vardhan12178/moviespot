import axios from 'axios';

const API_KEY = '2e23fb332d92898ce2cbff14a6c14be5';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/${category}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
