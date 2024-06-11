import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentTemperature } from '../actions/weatherActions';

const initialState = {
  temperature: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentTemperature.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentTemperature.fulfilled, (state, action) => {
        state.loading = false;
        state.temperature = action.payload;
      })
      .addCase(fetchCurrentTemperature.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
