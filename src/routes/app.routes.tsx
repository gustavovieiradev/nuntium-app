import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin  from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassowrd';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Signin" component={Signin} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  );
}
