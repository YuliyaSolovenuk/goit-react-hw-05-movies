import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails/>} >
          <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="movies/:movieId/reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={3000} position="top-center" />
    </div>
  );
};
