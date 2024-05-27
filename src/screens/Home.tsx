import React, { useCallback, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  Pressable,
  Platform,
  ImageBackground,
  FlatList,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC<StackScreenProps<'Home'>> = ({ navigation }) => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather);
  const { loading, data, error } = weatherData;
  const [dropdown, setDropdown] = useState(false);
  const resetState = useDispatch();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetState(resetWeather());
        setCity('');
        setDropdown(false);
      };
    }, [dispatch]),
  );

  React.useEffect(() => {
    const getSavedCities = async () => {
      try {
        const savedCities = await AsyncStorage.getItem('searchedCities');
        if (savedCities) {
          setSuggestions(JSON.parse(savedCities));
        }
      } catch (error) {
        console.error('Failed to load cities', error);
      }
    };

    getSavedCities();
  }, []);

  const handleSearch = async () => {
    dispatch(fetchWeather(city));
    try {
      const savedCities = JSON.parse(
        (await AsyncStorage.getItem('searchedCities')) || '[]',
      );

      if (city && !savedCities.includes(city)) {
        savedCities.push(city);
        await AsyncStorage.setItem(
          'searchedCities',
          JSON.stringify(savedCities),
        );
        setSuggestions(savedCities);
      }

      setCity('');
    } catch (error) {
      console.error('Failed to save city', error);
    }
  };

  const handleSuggestionClick = (suggestedCity: string) => {
    setCity(suggestedCity);
    dispatch(fetchWeather(suggestedCity));
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
      source={
        Platform.OS == 'web' ? source : require('../components/images/bg.jpg')
      }
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
          onChange={() => setDropdown(true)}
        />
        <Pressable
          onPress={handleSearch}
          disabled={loading}
          style={styles.button}
        >
          {loading ? <ActivityIndicator /> : <SearchIcon />}
        </Pressable>
        {dropdown && (
          <FlatList
            style={styles.list}
            data={suggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSuggestionClick(item)}
                style={styles.input2}
              >
                <Text>{item}</Text>
              </Pressable>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default Home;
