import { Stack } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';

import useMoviesQuery from '../../../hooks/useMoviesQuery';
import ErrorMessage from '../../ui/ErrorMessage';

export default function Movies() {
  const { isLoading, hasError, responsePopular, responseBest } =
    useMoviesQuery();

  // TODO: add skeleton
  if (isLoading) return <p>Loading...</p>;

  // TODO: add error component
  if (!hasError) return <ErrorMessage />;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <RouterLink key={row.id} to={`/movie/${row.kinopoiskId}`}>
        <BearSlideImage imageUrl={row.posterUrlPreview} />
      </RouterLink>
    ));

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: responsePopular.data
        ? serializeDataForCarousel(responsePopular.data.items)
        : [],
    },
    {
      title: 'Лучшие фильмы',
      url: '/best',
      data: responsePopular.data
        ? serializeDataForCarousel(responseBest.data.items)
        : [],
    },
  ];

  return (
    <>
      {carouselArr.map(carousel => (
        <Stack key={carousel.title}>
          <Link
            sx={{ mt: 2, mb: 2 }}
            variant="h1"
            component={RouterLink}
            to={carousel.url}
          >
            {carousel.title}
          </Link>
          <BearCarousel
            data={carousel.data}
            slidesPerView={1}
            slidesPerGroup={1}
            isEnableNavButton
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={5000}
            breakpoints={{
              375: {
                autoPlayTime: 0,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          />
        </Stack>
      ))}
    </>
  );
}
