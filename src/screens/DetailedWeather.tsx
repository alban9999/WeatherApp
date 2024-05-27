import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Platform,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import { StackScreenProps } from 'config/types';
import WeatherIcon from '../components/icons/WeatherIcon';
import { BackButton } from '../components/buttons/BackButton';
import { styles } from '../styles/DetailedWeather.styles';

const DetailedWeather: React.FC<StackScreenProps<'DetailedWeather'>> = ({
  route,
  navigation,
}) => {
  const { data } = route.params;
  const iconCode = data.weather[0].icon;
  const source =
    'https://static5.depositphotos.com/1005091/452/v/450/depositphotos_4525408-stock-illustration-cloudy-sky-background-1.jpg';
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  return (
    <ImageBackground
      blurRadius={Platform.OS == 'web' ? 10 : 2}
      source={
        Platform.OS == 'web' ? source : require('../components/images/bg.jpg')
      }
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <BackButton navigation={navigation} />
        </View>
        <View style={styles.centeredLayout}>
          <View style={styles.mainContent}>
            <WeatherIcon iconCode={iconCode} />
            <Text style={styles.city}>{data.name}</Text>
            <Text style={styles.temperature}>
              {(data.main.temp - 273.15).toFixed()}°C
            </Text>
            <Text>{data.weather[0].description}</Text>
          </View>
          <View
            style={
              isSmallScreen && Platform.OS == 'web' ? styles.column : styles.row
            }
          >
            <View style={styles.box}>
              <Text>
                Feels Like: {(data.main.feels_like - 273.15).toFixed()}°C
              </Text>
            </View>
            <View style={styles.box}>
              <Text>Humidity: {data.main.humidity}%</Text>
            </View>
          </View>
          <View
            style={
              isSmallScreen && Platform.OS == 'web' ? styles.column : styles.row
            }
          >
            <View style={styles.box}>
              <Text>Pressure: {data.main.pressure} hPa</Text>
            </View>
            <View style={styles.box}>
              <Text>Wind: {data.wind.speed} m/s</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DetailedWeather;
