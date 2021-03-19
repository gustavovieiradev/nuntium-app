import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin  from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassowrd';
import RoutesTab from './tabs.routes';
import Language from '../pages/Language';
import ChangePassword from '../pages/ChangePassword';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#fff' }}}>
        <Screen name="Signin" component={Signin} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Language" component={Language} />
        <Screen name="ChangePassword" component={ChangePassword} />
        <Screen name="Tabs" component={RoutesTab} />
      </Navigator>
    </NavigationContainer>
  );
}
