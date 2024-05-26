export interface WeatherApiResponse {
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
  };
  name: string;
}

export interface WeatherState {
  loading: boolean;
  data: any;
  error: string | null;
}