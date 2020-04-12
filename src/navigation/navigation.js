import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sharedScreenOptions} from './config';

import Transactions from '../screens/Transactions';
import Chats from '../screens/Chats';
import SendMoney from '../screens/SendMoney';
import Scan from '../screens/Scan';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';

const TradesStack = createStackNavigator();
const ChatsStack = createStackNavigator();
const ScanStack = createStackNavigator();
const ContactsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const TradesStackScreens = (props) => {
  return (
    <TradesStack.Navigator
      initialRouteName="Transactions"
      screenOptions={sharedScreenOptions}>
      <TradesStack.Screen name="Transactions" component={Transactions} />
    </TradesStack.Navigator>
  );
};

const ChatsStackScreens = (props) => {
  return (
    <ChatsStack.Navigator
      initialRouteName="Chats"
      screenOptions={sharedScreenOptions}>
      <ChatsStack.Screen name="Chats" component={Chats} />
      <ChatsStack.Screen
        name="Send Money"
        component={SendMoney}
        headerMode="modal"
      />
    </ChatsStack.Navigator>
  );
};

const ScanStackScreens = (props) => {
  return (
    <ScanStack.Navigator
      initialRouteName="Scan"
      screenOptions={sharedScreenOptions}>
      <ScanStack.Screen
        name="Scan"
        component={Scan}
        options={{title: 'Scan for QR Code'}}
      />
    </ScanStack.Navigator>
  );
};

const ContactsStackScreens = (props) => {
  return (
    <ContactsStack.Navigator
      initialRouteName="Contacts"
      screenOptions={sharedScreenOptions}>
      <ContactsStack.Screen name="Contacts" component={Contacts} />
    </ContactsStack.Navigator>
  );
};

const SettingsStackScreens = (props) => {
  return (
    <SettingsStack.Navigator
      initialRouteName="Profile"
      screenOptions={sharedScreenOptions}>
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  );
};

const Nav = createBottomTabNavigator();

const NavScreens = (props) => {
  return (
    <Nav.Navigator
      tabBarOptions={{
        activeTintColor: '#6977F7',
        inactiveTintColor: '#ABADC1',
        labelStyle: {
          fontSize: 12,
          fontFamily: 'GTWalsheimPro-Regular',
        },
      }}>
      <Nav.Screen name="Trades" component={TradesStackScreens} />
      <Nav.Screen name="Chats" component={ChatsStackScreens} />
      <Nav.Screen name="Scan" component={ScanStackScreens} />
      <Nav.Screen name="Contacts" component={ContactsStackScreens} />
      <Nav.Screen name="Settings" component={SettingsStackScreens} />
    </Nav.Navigator>
  );
};

export default NavScreens;
