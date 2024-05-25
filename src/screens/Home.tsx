import React, { useState } from 'react';
import { View, TextInput, Text, ActivityIndicator, Pressable, StyleSheet, Platform } from 'react-native';
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
    <View style={Platform.OS == 'web' ? styles.webContainer : styles.container}>
      <Text style={{fontSize: 30, color: 'blue', fontWeight: '700'}}>
        WeatherApp
      </Text>
      <View style={{flexDirection: 'row', gap: 5}}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          onChangeText={setCity}
          value={city}
          editable={!loading}
          placeholderTextColor={'#ced4da'}
        />
        <Pressable onPress={handleSearch} disabled={loading} style={styles.button}>
          {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>S</Text>}
        </Pressable>
      </View>
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  webContainer: {
    display: 'flex',
    width: '100%',
    padding: 16,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: '#dc3545',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Home;
