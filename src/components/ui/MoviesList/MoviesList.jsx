import { Stack } from '@mui/material';
import React from 'react';

import MovieCard from '../MovieCard/MovieCard';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  console.log(movies);
  return (
    <>
      <Stack>
        {movies.map(movie => (
          <MovieCard key={movie.kinopoisId} movie={movie} />
        ))}
      </Stack>
    </>
  );
}
