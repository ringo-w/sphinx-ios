import React from 'react';
import {sharedScreenOptions} from './config';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Support from '../screens/Support';
import Transactions from '../screens/Transactions';

import BottomTabs from './navigation';

const RootStack = createStackNavigator();

const RootStackScreens = () => (
  <RootStack.Navigator mode="card" initialRouteName="Onboarding">
    <RootStack.Screen
      name="Main"
      options={{header: () => null}}
      component={BottomTabs}
    />
    <RootStack.Screen
      name="Onboarding"
      options={{header: () => null}}
      component={Onboarding}
    />
    <RootStack.Screen
      name="Login"
      options={{header: () => null}}
      component={Login}
    />
    <RootStack.Screen
      name="Profile"
      options={sharedScreenOptions}
      component={Profile}
    />
    <RootStack.Screen
      name="Support"
      options={sharedScreenOptions}
      component={Support}
    />
    <RootStack.Screen
      name="Transactions"
      options={sharedScreenOptions}
      component={Transactions}
    />
  </RootStack.Navigator>
);

export default RootStackScreens;
