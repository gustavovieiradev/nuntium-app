import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab from '../components/Tab';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Bookmarks from '../pages/Bookmarks';
import Profile from '../pages/Profile';

const {Navigator, Screen} = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Navigator tabBar={(props) => <Tab {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="Categories" component={Categories} />
      <Screen name="Bookmarks" component={Bookmarks} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
