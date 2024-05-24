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
      console.log(response.data);
      return response.data; // This is where you would validate or transform the data if necessary.
    } catch (error: any) {
      // Handle errors, potentially transforming error data into a more usable format.
      return rejectWithValue(error.response?.data?.message || "Network error");
    }
  }
);