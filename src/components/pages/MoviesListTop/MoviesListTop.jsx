import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { TOP_LISTS } from '../../../constants.js';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';

export default function MoviesListTop() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const movieType = TOP_LISTS.find(el => el.url === location.pathname);
  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });
  console.log(data, error, isLoading);
  return <div>MoviesListTop</div>;
}
