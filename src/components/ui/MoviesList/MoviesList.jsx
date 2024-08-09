import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  console.log(movies);
  return (
    <>
      <Stack>
        {movies.map(movie => (
          <Stack key={movie.kinopoiskId}>
            <Link to={`/movie/${movie.kinopoiskId}`}>
              <img src={movie.posterUrlPreview} alt={movie.nameRu} />
            </Link>
            <Typography>{movie.nameRu ? movie.nameRu : movie.En}</Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
