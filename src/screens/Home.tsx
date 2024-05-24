import { StackScreenProps } from 'config/types';
import React from 'react';
import { Button, View, Text } from 'react-native';

const Home: React.FC<StackScreenProps<'Home'>> = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};

export default Home;
