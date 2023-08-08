import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1bb674914a73bcdd70cc8fd8d868be33';


export const getTrendingMovies = async () => {
   const {data} = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return data.results; 
};

export const getSearchMovies = async (searchQuery) => {
   const {data} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
 return data.results;
};

export const getMovieDetails = async (movie_id) => {
   const {data} = await axios.get(`/movie/${movie_id}?language=en-US&api_key=${API_KEY}`);
 return data;
};

export const getMovieCast = async (movie_id) => {
   const {data} = await axios.get(`/movie/${movie_id}/credits?api_key=${API_KEY}`);
 return data.cast;
};

export const getMovieReviews = async (movie_id) => {
   const {data} = await axios.get(`/movie/${movie_id}/reviews?language=en-US&api_key=${API_KEY}`);
 return data.results;
};