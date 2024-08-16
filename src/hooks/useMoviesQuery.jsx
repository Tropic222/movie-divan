import { useSelector } from 'react-redux';

import { TOP_LISTS } from '../constants';
import { useGetFilmsTopQuery } from '../services/kinopoiskApi';

export default function useMoviesQuery() {
  const { page = 1 } = useSelector(state => state.currentQuerySlice || {});

  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });
  const responseBest = useGetFilmsTopQuery({
    type: TOP_LISTS[1].value,
    page,
  });

  const isLoading = responsePopular.isFetching || responseBest.isFetching;
  const hasError = responsePopular.error || responseBest.error;

  return {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
  };
}
