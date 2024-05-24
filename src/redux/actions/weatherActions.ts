import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface WeatherApiResponse {
  coord: { lon: number; lat: number };
  weather: Array<{ description: string; icon: string }>;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  name: string; // City name
}

export const fetchWeather = createAsyncThunk<WeatherApiResponse, string, { rejectValue: string }>(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f656e4b5f520a242bdf8360dcc896c96`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Network error");
    }
  }
);
