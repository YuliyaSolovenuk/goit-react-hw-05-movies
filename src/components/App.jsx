import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from 'pages/Home';
import Movie from 'pages/Movie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie/>} />
          {/* <Route path="movies/:movieId" element={<div>MovieDetails</div>} >
          <Route path="/cast" element={<div>Cast</div>} />
          <Route path="/reviews" element={<div>Reviews</div>} />
          </Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
