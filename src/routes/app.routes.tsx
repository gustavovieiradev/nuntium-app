import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Signin } from '../pages/Signin';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Signin" component={Signin} />
      </Navigator>
    </NavigationContainer>
  );
}
