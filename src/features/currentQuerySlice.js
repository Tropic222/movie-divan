import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  countries: '',
  genreId: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
};

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    // TODO add actions
  },
});

export default currentQuerySlice.reducer;
