import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/actions/weatherActions';
import { StackScreenProps } from 'config/types';

const Home: React.FC<StackScreenProps<'Home'>> = () => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather);
  const { loading, data, error } = weatherData;

  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };


  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        onChangeText={setCity}
        value={city}
        editable={!loading}
      />
      <Button title="Search" onPress={handleSearch} disabled={loading} />
      {loading && <ActivityIndicator />}
      {error && <Text>Error: {error}</Text>}
      {data && (
        <View>
          <Text>Temperature: {data.main.temp}°C</Text>
          <Text>Weather: {data.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
