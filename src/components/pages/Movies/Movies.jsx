import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import React from 'react';

import useMoviesQuery from '../../../hooks/useMoviesQuery';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseSerial,
    responseFilms,
    responseCartoons,
    responseBest,
  } = useMoviesQuery();

  //TODO add skeleton
  if (isLoading) return <p>Loading...</p>;
  //TODO add error component
  if (hasError) return <p>Error massage</p>;

  const serializeDataForCarousel = data =>
    data.map(row => <BearSlideImage key={row.id}>{row.name}</BearSlideImage>);

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
  ];
  return (
    <div>
      <BearCarousel data={carouselArr[0].data} />
    </div>
  );
}
