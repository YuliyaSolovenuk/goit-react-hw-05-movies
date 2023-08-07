import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1bb674914a73bcdd70cc8fd8d868be33';


//    export async function getMovies() {
//     try {
//       const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=1bb674914a73bcdd70cc8fd8d868be33');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   getMovies()


export const getTrendingMovies = async () => {
   const {data} = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
   console.log(data);
    return data.results; 
};

getTrendingMovies()

export const getSearchMovies = async (searchQuery) => {
   const {data} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
 return data;
};

export const getMovieDetails = async (movie_id) => {
   const {data} = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
 return data;
};

export const getMovieCast = async (movie_id) => {
   const {data} = await axios.get(`/movie/${movie_id}/credits?api_key=${API_KEY}`);
 return data;
};

export const getMovieReviews = async (movie_id) => {
   const {data} = await axios.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}`);
 return data;
};