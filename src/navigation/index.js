import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/Main';
import PostScreen from '../screens/Post';
import AddAndEditScreen from '../screens/AddAndEditScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const screenOptions = {
    gestureEnabled: false,
    headerShadowVisible: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({route}) => ({title: route.params.post.title})}
        />
        <Stack.Screen
          name="AddAndEdit"
          component={AddAndEditScreen}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
