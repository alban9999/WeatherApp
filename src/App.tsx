import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { RootStackParamList } from './config/types';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DetailedWeather from './screens/DetailedWeather';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            contentStyle: {
              flex: 1,
            },
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen 
            name="DetailedWeather"
            component={DetailedWeather}
            options={{title: 'Weather Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;