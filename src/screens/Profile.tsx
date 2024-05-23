import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const Profile = ({ route, navigation }) => {
  
  return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>go back</Text></TouchableOpacity>
    <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default Profile;
