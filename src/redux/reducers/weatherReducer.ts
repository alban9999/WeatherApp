import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../actions/weatherActions';
import { WeatherState } from '../../config/interfaces';

const initialState: WeatherState = {
  loading: false,
  data: null,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default weatherSlice.reducer;
