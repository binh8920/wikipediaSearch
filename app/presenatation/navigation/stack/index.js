import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen, WikipediaScreen} from '../../module';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Wikipedia" component={WikipediaScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
