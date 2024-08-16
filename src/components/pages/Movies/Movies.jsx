import { Stack } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';

import useMoviesQuery from '../../../hooks/useMoviesQuery';

export default function Movies() {
  const { isLoading, hasError, responsePopular, responseBest } =
    useMoviesQuery();

  // TODO: add skeleton
  if (isLoading) return <p>Loading...</p>;

  // TODO: add error component
  if (hasError) return <p>Error message</p>;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <BearSlideImage key={row.id} imageUrl={row.posterUrlPreview} />
    ));

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: responsePopular.data
        ? serializeDataForCarousel(responsePopular.data.items)
        : [],
    },
  ];

  return (
    <div>
      <Stack>
        <Link
          sx={{ mt: 2, mb: 2 }}
          variant="h1"
          component={RouterLink}
          to={carouselArr[0].url}
        >
          {carouselArr[0].title}
        </Link>
        <BearCarousel
          data={carouselArr[0].data}
          slidesPerView={1}
          slidesPerGroup={1}
          isEnableNavButton
          isEnableLoop
          isEnableAutoPlay
          autoPlayTime={5000}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
        />
      </Stack>
    </div>
  );
}
