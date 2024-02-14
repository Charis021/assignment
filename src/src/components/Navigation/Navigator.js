import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Horizontal from '../../Screens/Horizontal';
import Vertical from '../../Screens/Vertical';
import Home from '../../Screens/Home';
import React from 'react';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Horizontal"
          options={{headerShown: false}}
          component={Horizontal}
        />
        <Stack.Screen
          name="Vertical"
          options={{headerShown: false}}
          component={Vertical}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
