import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import React from 'react';

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
      {carouselArr.map((carousel, index) => (
        <BearCarousel key={index} data={carousel.data} />
      ))}
    </div>
  );
}
