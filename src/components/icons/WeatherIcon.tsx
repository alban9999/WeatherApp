import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

interface WeatherIconProps {
  iconCode?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode }) => {
  if (!iconCode) {
    return <Text>No weather data available</Text>;
  }

  const imageUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    margin: -20,
  },
});

export default WeatherIcon;
