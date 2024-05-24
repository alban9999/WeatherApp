import { StackScreenProps } from 'config/types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Profile: React.FC<StackScreenProps<'Profile'>> = ({ route, navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>go back</Text></TouchableOpacity>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default Profile;
