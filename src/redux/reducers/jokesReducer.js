import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomJoke } from '../actions/jokesActions';

const initialState = {
  temperature: null,
  loading: false,
  error: null,
};

const jokes = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomJoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.joke = action.payload;
      })
      .addCase(fetchRandomJoke.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jokes.reducer;
