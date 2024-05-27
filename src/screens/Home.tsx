import React, { useCallback, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  Pressable,
  Platform,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/actions/weatherActions';
import { StackScreenProps } from 'config/types';
import { LogoIcon } from '../components/icons/LogoIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import { useFocusEffect } from '@react-navigation/native';
import { resetWeather } from '../redux/reducers/weatherReducer';
import { styles } from '../styles/Home.styles';

const Home: React.FC<StackScreenProps<'Home'>> = ({ navigation }) => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather);
  const { loading, data, error } = weatherData;

  const resetState = useDispatch();

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetState(resetWeather());
        setCity('');
      };
    }, [dispatch])
  );

  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };

  React.useEffect(() => {
    if (data) {
      navigation.navigate('DetailedWeather', { data, city });
    } else if (error) {
      navigation.navigate('NotFound', { errorMsg: error });
    }
  }, [data, error, navigation]);

  const source =
    'https://static5.depositphotos.com/1005091/452/v/450/depositphotos_4525408-stock-illustration-cloudy-sky-background-1.jpg';

  return (
    <ImageBackground
      blurRadius={Platform.OS == 'web' ? 10 : 2}
      source={Platform.OS == 'web' ? source : require('../components/images/bg.jpg')}
      style={styles.container}
    >
      <View style={styles.layout}>
        <LogoIcon />
        <Text style={styles.title}>Weather app</Text>
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          onChangeText={setCity}
          value={city}
          editable={!loading}
          placeholderTextColor={'black'}
        />
        <Pressable
          onPress={handleSearch}
          disabled={loading}
          style={styles.button}
        >
          {loading ? <ActivityIndicator /> : <SearchIcon />}
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Home;
