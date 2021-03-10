import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin  from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassowrd';
import RoutesTab from './tabs.routes';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#fff' }}}>
        <Screen name="Signin" component={Signin} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Tabs" component={RoutesTab} />
      </Navigator>
    </NavigationContainer>
  );
}
