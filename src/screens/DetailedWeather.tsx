import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from 'config/types';

const DetailedWeather: React.FC<StackScreenProps<'WeatherDetails'>> = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Details for {data.name}</Text>
      <Text>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</Text>
      <Text>Feels Like: {(data.main.feels_like - 273.15).toFixed(2)}°C</Text>
      <Text>Weather: {data.weather[0].description}</Text>
      <Text>Humidity: {data.main.humidity}%</Text>
      <Text>Pressure: {data.main.pressure} hPa</Text>
      <Text>Wind Speed: {data.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    padding: 16,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default DetailedWeather;
