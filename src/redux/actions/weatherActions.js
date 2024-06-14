import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrentTemperature = createAsyncThunk(
  'weather/fetchCurrentTemperature',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
      return response.data.current.temperature_2m;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);




