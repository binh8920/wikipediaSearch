import React from 'react';
import MyStack from './stack';
import {NavigationContainer} from '@react-navigation/native';

const MyNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default MyNavigator;
