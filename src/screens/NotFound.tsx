import React from 'react';
import { StackScreenProps } from 'config/types';
import {
  Text,
  ImageBackground,
  Platform,
  View,
  SafeAreaView,
} from 'react-native';
import { BackButton } from '../components/buttons/BackButton';
import { styles } from '../styles/NotFound.styles';

const NotFound: React.FC<StackScreenProps<'NotFound'>> = ({
  navigation,
  route,
}) => {
  const { errorMsg } = route.params;
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
      <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Error: {errorMsg}</Text>
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export { NotFound };
