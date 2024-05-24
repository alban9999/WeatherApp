import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  data: null,
  error: null
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
    },
    fetchWeatherSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;
export default weatherSlice.reducer;
