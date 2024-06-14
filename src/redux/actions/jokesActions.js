import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomJoke = createAsyncThunk(
    'jokes/fetchrandomjoke',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return {
          setup: response.data.setup,
          punchline: response.data.punchline
        };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );