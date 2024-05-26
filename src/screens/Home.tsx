import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Platform,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/actions/weatherActions';
import { StackScreenProps } from 'config/types';
import { LogoIcon } from '../components/icons/LogoIcon';
import { SearchIcon } from '../components/icons/SearchIcon';

const Home: React.FC<StackScreenProps<'Home'>> = ({ navigation }) => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather);
  const { loading, data, error } = weatherData;

  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };

  React.useEffect(() => {
    if (data) {
      navigation.navigate('DetailedWeather', { data });
    }
  }, [data, navigation]);

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
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        display: 'flex',
        height: Dimensions.get('window').height,
      },
    }),
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  input: {
    flex: 1,
    minWidth: 300,
    borderRadius: 20,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  errorText: {
    color: '#dc3545',
    marginTop: 16,
    textAlign: 'center',
  },
  row: { flexDirection: 'row', gap: 5 },
  title: { fontSize: 30, color: '#007DB9', fontWeight: '700' },
  layout: { alignItems: 'center', gap: 10 },
});

export default Home;
