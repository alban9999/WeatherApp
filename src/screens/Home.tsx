import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/actions/weatherActions';
import { StackScreenProps } from 'config/types';

const Home: React.FC<StackScreenProps<'Home'>> = ({navigation,}) => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather);
  const { loading, data, error } = weatherData;

  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };

  React.useEffect(() => {
    if (data) {
      navigation.navigate('WeatherDetails', { data });
    }
  }, [data, navigation]);

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
    </View>
  );
};

export default Home;
