import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetWeather } from '../../redux/reducers/weatherReducer';
import { GoBackIcon } from '../icons/GoBackIcon';

const BackButton = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const handleBackPress = () => {
    dispatch(resetWeather());
    navigation.goBack();
  };

  return (
    <Pressable onPress={handleBackPress} style={styles.button}>
      <GoBackIcon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { BackButton };
