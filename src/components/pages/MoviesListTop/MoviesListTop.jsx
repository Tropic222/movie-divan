import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TOP_LISTS } from '../../../constants.js';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage.jsx';
import MovieListSkeleton from '../../ui/MovieListSkeleton/MovieListSkeleton.jsx';
import MoviesList from '../../ui/MoviesList/index.js';
import SelectMovies from '../../ui/SelectMovies/SelectMovies.jsx';

export default function MoviesListTop() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const movieType = TOP_LISTS.find(el => el.url === location.pathname);
  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [location]);

  useEffect(() => {
    if (data) {
      console.log(('Data from APi', data));
    }
  }, [data]);

  if (error) return <ErrorMessage />;
  if (isLoading) return <MovieListSkeleton />;

  return (
    <>
      <Stack flexDirection="row" sx={{ mt: 2, mb: 2 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h4">{movieType.title}</Typography>
      </Stack>
      <SelectMovies />

      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
