import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { RootStackParamList } from './config/types';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen 
            name="Profile"
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;