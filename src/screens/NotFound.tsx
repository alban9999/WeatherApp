import React from 'react';
import { StackScreenProps } from 'config/types';
import {
  Text,
  ImageBackground,
  Platform,
  Dimensions,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import { BackButton } from '../components/buttons/BackButton';

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
    padding: 16,
    gap: 10,
  },
  text: { fontSize: 40, color: '#ff002b', fontWeight: '700' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export { NotFound };
